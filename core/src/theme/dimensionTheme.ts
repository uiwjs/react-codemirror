import { EditorView } from '@codemirror/view';
import type { Extension } from '@codemirror/state';

export const scrollerTheme = EditorView.theme({
  '& .cm-scroller': {
    height: '100% !important',
  },
});

let lastDimensionKey: string | null = null;
let lastDimensionTheme: Extension | null = null;

export function getDimensionTheme(
  height: string | null,
  minHeight: string | null,
  maxHeight: string | null,
  width: string | null,
  minWidth: string | null,
  maxWidth: string | null,
): Extension | null {
  if (!height && !minHeight && !maxHeight && !width && !minWidth && !maxWidth) {
    return null;
  }

  const cacheKey = JSON.stringify({ height, minHeight, maxHeight, width, minWidth, maxWidth });
  if (cacheKey === lastDimensionKey) {
    return lastDimensionTheme;
  }

  lastDimensionKey = cacheKey;
  lastDimensionTheme = EditorView.theme({
    '&': {
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
    },
  });
  return lastDimensionTheme;
}
