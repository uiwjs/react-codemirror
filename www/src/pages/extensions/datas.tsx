import eventsMd from '@uiw/codemirror-extensions-events/README.md';
import basicSetupMd from '@uiw/codemirror-extensions-basic-setup/README.md';
import colorMd from '@uiw/codemirror-extensions-color/README.md';
import lineNumbersRelativeMd from '@uiw/codemirror-extensions-line-numbers-relative/README.md';
import langsMd from '@uiw/codemirror-extensions-langs/README.md';
import themesAllMd from '@uiw/codemirror-themes-all/README.md';
import hyperLinkMd from '@uiw/codemirror-extensions-hyper-link/README.md';
import mentionsMd from '@uiw/codemirror-extensions-mentions/README.md';

export const mdSource = {
  color: basicSetupMd.source,
  'basic-setup': colorMd.source,
  events: eventsMd.source,
  'themes-all': themesAllMd.source,
  'line-numbers-relative': lineNumbersRelativeMd.source,
  languages: langsMd.source,
  'hyper-link': hyperLinkMd.source,
  mentions: mentionsMd.source,
};
