import React from 'react';
import CodeMirror, { Position } from 'codemirror';

export type DOMEvent = 'onMouseDown' | 'onDblClick' | 'onTouchStart' | 'onContextMenu' | 'onKeyDown' | 'onKeyPress'
  | 'onKeyUp' | 'onCut' | 'onCopy' | 'onPaste' | 'onDragStart' | 'onDragEnter' | 'onDragOver' | 'onDragLeave' | 'onDrop';

export type IDOMEvent = {
  [P in DOMEvent]?: (instance: CodeMirror.Editor, event: Event) => void;
}

export type Editor = CodeMirror.Editor;

export interface IReactCodemirror extends IDOMEvent {
  /**
   * value of the auto created model in the editor.
   */
  value?: string;
  /**
   * width of editor. Defaults to 100%.
   */
  width?: any;
  /**
   * height of editor. Defaults to 100%.
   */
  height?: any;
  /**
   * refer to codemirror options.
   */
  options?: CodeMirror.EditorConfiguration;
  /**
   * Fired whenever a change occurs to the document.
   * changeObj has a similar type as the object passed to the editor's "change" event,
   * but it never has a next property, because document change events are not batched (whereas editor change events are).
   */
  onChange?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void;
  /**
   * Like the "change" event, but batched per operation, passing an
   * array containing all the changes that happened in the operation.
   * This event is fired after the operation finished, and display
   * changes it makes will trigger a new operation.
   * */
  onChanges?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void;
  /**
   * This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
   * The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
   * Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
   * Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
   * probably cause the editor to become corrupted.
   */
  onBeforeChange?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable) => void;
  /**
   * Will be fired when the cursor or selection moves, or any change is made to the editor content.
   */
  onCursorActivity?: (instance: CodeMirror.Editor) => void;
  /**
   * This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
   * Handlers for this event have the same restriction as "beforeChange" handlers they should not do anything to directly update the state of the editor.
   */
  onBeforeSelectionChange?: (instance: CodeMirror.Editor, selection: { head: Position; anchor: Position; }) => void;
  /**
   * Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
   * The from and to arguments give the new start and end of the viewport.
   */
  onViewportChange?: (instance: CodeMirror.Editor, from: number, to: number) => void;
  /** Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
   * the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
   * and the raw mousedown event object as fourth argument.
   */
  onGutterClick?: (instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event) => void;

  /** Fires whenever the editor is focused. */
  onFocus?: (instance: CodeMirror.Editor) => void;

  /** Fires whenever the editor is unfocused. */
  onBlur?: (instance: CodeMirror.Editor) => void;

  /** Fires when the editor is scrolled. */
  onScroll?: (instance: CodeMirror.Editor) => void;

  /** Will be fired whenever CodeMirror updates its DOM display. */
  onUpdate?: (instance: CodeMirror.Editor) => void;

  /** Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
   * The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor.
   */
  onRenderLine?: (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => void;
  /**
   * Fires when the overwrite flag is flipped.
   * */
  onOverwriteToggle?: (instance: CodeMirror.Editor, overwrite: boolean) => void;
  /**
   * Will be fired when the line object is deleted. A line object is associated with the start of the line.
   * Mostly useful when you need to find out when your gutter markers on a given line are removed.
   * */
  onDelete?(): void;
  /**
   * Fired when the cursor enters the marked range.
   * From this event handler, the editor state may be inspected but not modified,
   * with the exception that the range on which the event fires may be cleared.
   * */
  onBeforeCursorEnter?(): void;
  /**
   * Fired when the cursor enters the marked range.
   * From this event handler, the editor state may be inspected but not modified,
   * with the exception that the range on which the event fires may be cleared.
   * */
  onClear?(): void;
  /**
   * Fired when the last part of the marker is removed from the document by editing operations.
   * */
  onHide?(): void;
  /**
   * Fired when, after the marker was removed by editing, a undo operation brought the marker back.
   * */
  onUnhide?(): void;
  /**
   * Fired whenever the editor re-adds the widget to the DOM.
   * This will happen once right after the widget is added (if it is scrolled into view),
   * and then again whenever it is scrolled out of view and back in again, or when changes to the editor options
   * or the line the widget is on require the widget to be redrawn.
   * */
  onRedraw?(): void;
}
export default class ReactCodemirror extends React.Component<IReactCodemirror> {
  editor: Editor;
  static defaultProps: IReactCodemirror;
  render(): JSX.Element;
}
