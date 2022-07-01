import { EditorSelection, SelectionRange } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';

export interface Statistics {
  /** Get the number of lines in the editor. */
  lineCount: number;
  /** Cursor Position */
  selection: EditorSelection;
  /** Retrieves a list of all current selections. */
  ranges: readonly SelectionRange[];
  /** Get the currently selected code. */
  selectionCode: string;
  /**
   * The length of the given array should be the same as the number of active selections.
   * Replaces the content of the selections with the strings in the array.
   */
  selections: string[];
  /** Return true if any text is selected. */
  selectedText: boolean;
}

export const getStatistics = (view: ViewUpdate): Statistics => ({
  lineCount: view.state.doc.lines,
  selection: view.state.selection,
  ranges: view.state.selection.ranges,
  selectionCode: view.state.sliceDoc(view.state.selection.main.from, view.state.selection.main.to),
  selections: view.state.selection.ranges.map((r) => view.state.sliceDoc(r.from, r.to)),
  selectedText: view.state.selection.ranges.some((r) => !r.empty),
});
