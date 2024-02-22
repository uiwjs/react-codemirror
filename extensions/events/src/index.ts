import { ViewPlugin, EditorView } from '@codemirror/view';
export type Events<K extends keyof HTMLElementEventMap> = Record<
  K,
  (this: HTMLElement, event: HTMLElementEventMap[K]) => void
>;

interface DOMElementProps extends Partial<HTMLElement> {}
type Options<T extends keyof HTMLElementEventMap> = {
  /**
   * Bind events on different dom nodes.
   * - `scroll` The DOM element that wraps the entire editor view.
   * - `dom` The DOM element that can be styled to scroll. (Note that it may not have been, so you can't assume this is scrollable.)
   * - `content` The editable DOM element holding the editor content. You should not, usually, interact with this content directly though the DOM, since the editor will immediately undo most of the changes you make.
   */
  type?: 'scroll' | 'dom' | 'content';
  events?: Events<T>;
  props?: DOMElementProps;
};

export function element<T extends keyof HTMLElementEventMap>(opts: Options<T>) {
  const { type = 'scroll', events, props } = opts;
  return ViewPlugin.fromClass(
    class {
      dom?: HTMLElement;
      view: EditorView;
      constructor(view: EditorView) {
        this.view = view;
        if (type === 'dom') {
          this.dom = view.dom;
        } else if (type === 'content') {
          this.dom = view.contentDOM;
        } else {
          this.dom = view.scrollDOM;
        }

        // Apply props to the DOM element
        if (this.dom && props) {
          const keys = Object.keys(props) as (keyof typeof props)[];
          keys.forEach((key) => {
            (this.dom as any)[key] = props[key];
          });
        }

        (Object.keys(events || {}) as Array<keyof typeof events>).forEach((keyname) => {
          if (events && events[keyname] && this.dom) {
            this.dom.addEventListener(keyname, events[keyname]);
          }
        });
      }
      destroy() {
        (Object.keys(events || {}) as Array<keyof typeof events>).forEach((keyname) => {
          if (events && events[keyname] && this.dom) {
            this.dom.removeEventListener(keyname, events[keyname]);
          }
        });
      }
    },
  );
}
/**
 * The DOM element that can be styled to scroll.
 * (Note that it may not have been, so you can't assume this is scrollable.)
 */
export function dom<T extends keyof HTMLElementEventMap>(opts: Events<T>) {
  return element({ type: 'dom', events: opts });
}
/**
 * The DOM element that wraps the entire editor view.
 */
export function scroll<T extends keyof HTMLElementEventMap>(opts: Events<T>) {
  return element({ type: 'scroll', events: opts });
}
/**
 * The editable DOM element holding the editor content.
 * You should not, usually, interact with this content directly though the DOM,
 * since the editor will immediately undo most of the changes you make.
 */
export function content<T extends keyof HTMLElementEventMap>(opts: Events<T>) {
  return element({ type: 'content', events: opts });
}
