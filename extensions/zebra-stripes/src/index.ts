import { Extension } from '@codemirror/state';
import { Facet, RangeSetBuilder } from '@codemirror/state';
import { EditorView, Decoration, ViewPlugin, DecorationSet, ViewUpdate } from '@codemirror/view';

const lineNumber = Facet.define({
  combine: (values) => {
    return values.length && Array.isArray(values) ? values.flat() : [];
  },
});

const stepSize = Facet.define({
  combine: (values) => {
    return values.length && Array.isArray(values) ? Math.min(...values) : 2;
  },
});

const stripe = Decoration.line({
  attributes: { class: 'cm-zebra-stripe' },
});

function stripeDeco(view: EditorView) {
  const step = view.state.facet(stepSize);
  const num = view.state.facet(lineNumber);
  const builder = new RangeSetBuilder<Decoration>();
  for (let { from, to } of view.visibleRanges) {
    for (let pos = from; pos <= to; ) {
      let line = view.state.doc.lineAt(pos);

      if (line.number % step === 0 && num.length === 0) {
        builder.add(line.from, line.from, stripe);
      }
      if (num.length > 0 && num.flat().includes(line.number)) {
        builder.add(line.from, line.from, stripe);
      }
      pos = line.to + 1;
    }
  }
  return builder.finish();
}

const showStripes = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;
    constructor(view: EditorView) {
      this.decorations = stripeDeco(view);
    }

    update(update: ViewUpdate) {
      this.decorations = stripeDeco(update.view);
      // if (update.docChanged || update.viewportChanged) {
      //   this.decorations = stripeDeco(update.view);
      // }
    }
  },
  {
    decorations: (v) => v.decorations,
  },
);

const baseTheme = (opt: Pick<Partial<ZebraStripesOptions>, 'lightColor' | 'darkColor'> = {}) => {
  return EditorView.baseTheme({
    '&light .cm-zebra-stripe': { backgroundColor: opt.lightColor || '#eef6ff' },
    '&dark .cm-zebra-stripe': { backgroundColor: opt.darkColor || '#3a404d' },
  });
};

export type ZebraStripesOptions = {
  step?: number | null;
  lightColor?: string;
  darkColor?: string;
  /**
   * @example `[1,[2,6], 10]`
   */
  lineNumber?: (number | number[])[] | null;
};

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export function zebraStripes(options: ZebraStripesOptions = {}): Extension {
  const zebraStripeTheme = baseTheme({ lightColor: options.lightColor, darkColor: options.darkColor });
  if (options.lineNumber && Array.isArray(options.lineNumber)) {
    options.step = null;
    options.lineNumber = options.lineNumber.map((item) => {
      if (Array.isArray(item) && typeof item[0] === 'number' && typeof item[1] === 'number') {
        return range(item[0], item[1], 1);
      }
      return item;
    });
  } else {
    options.lineNumber = null;
  }
  return [
    options.lineNumber === null ? [] : lineNumber.of(options.lineNumber || []),
    options.step === null ? [] : stepSize.of(options.step || 2),
    showStripes,
    zebraStripeTheme,
  ];
}
