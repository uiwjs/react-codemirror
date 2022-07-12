import eventsMd from '@uiw/codemirror-extensions-events/README.md';
import basicSetupMd from '@uiw/codemirror-extensions-basic-setup/README.md';
import colorMd from '@uiw/codemirror-extensions-color/README.md';
import lineNumbersRelativeMd from '@uiw/codemirror-extensions-line-numbers-relative/README.md';
import hyperLinkMd from '@uiw/codemirror-extensions-hyper-link/README.md';

export const mdSource = {
  color: basicSetupMd.source,
  'basic-setup': colorMd.source,
  events: eventsMd.source,
  'line-numbers-relative': lineNumbersRelativeMd.source,
  'hyper-link': hyperLinkMd.source,
};
