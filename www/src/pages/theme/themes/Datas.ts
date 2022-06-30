import abcdefMd from '@uiw/codemirror-theme-abcdef/README.md';
import okaidiaMd from '@uiw/codemirror-theme-okaidia/README.md';
import draculaMd from '@uiw/codemirror-theme-dracula/README.md';
import darculaMd from '@uiw/codemirror-theme-darcula/README.md';
import duotoneMd from '@uiw/codemirror-theme-duotone/README.md';
import eclipseMd from '@uiw/codemirror-theme-eclipse/README.md';
import bespinMd from '@uiw/codemirror-theme-bespin/README.md';
import sublimeMd from '@uiw/codemirror-theme-sublime/README.md';

import { abcdef } from '@uiw/codemirror-theme-abcdef';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { bespin } from '@uiw/codemirror-theme-bespin';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { sublime } from '@uiw/codemirror-theme-sublime';

export const mdSource = {
  abcdef: abcdefMd.source,
  bespin: bespinMd.source,
  eclipse: eclipseMd.source,
  dracula: draculaMd.source,
  darcula: darculaMd.source,
  duotoneLight: duotoneMd.source,
  duotoneDark: duotoneMd.source,
  okaidia: okaidiaMd.source,
  sublime: sublimeMd.source,
};

export const themeData = {
  abcdef,
  bespin,
  darcula,
  dracula,
  duotoneLight,
  duotoneDark,
  eclipse,
  okaidia,
  sublime,
};
