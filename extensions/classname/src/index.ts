import { Extension } from '@codemirror/state';
import { RangeSetBuilder } from '@codemirror/state';
import { EditorView, Decoration, ViewPlugin, DecorationSet, ViewUpdate } from '@codemirror/view';

function stripeDeco(view: EditorView, opts: ClassnameOptions) {
  const builder = new RangeSetBuilder<Decoration>();
  for (let { from, to } of view.visibleRanges) {
    for (let pos = from; pos <= to; ) {
      let line = view.state.doc.lineAt(pos);
      if (opts.add && typeof opts.add === 'function') {
        const cls = opts.add(line.number);
        if (cls && typeof cls === 'string') {
          const attributes = { class: cls } as Record<string, string>;
          builder.add(
            line.from,
            line.from,
            Decoration.line({
              attributes,
            }),
          );
        }
      }
      pos = line.to + 1;
    }
  }
  return builder.finish();
}

export type ClassnameOptions = {
  add?: (lineNumber: number) => string | undefined;
};

export function classname(options: ClassnameOptions = {}): Extension {
  return ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;
      constructor(view: EditorView) {
        this.decorations = stripeDeco(view, options);
      }
      update(update: ViewUpdate) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = stripeDeco(update.view, options);
        }
      }
    },
    {
      decorations: (v) => v.decorations,
    },
  );
}
