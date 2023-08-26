import { createRequire } from 'node:module';
import FS from 'node:fs/promises';

const require = createRequire(import.meta.url);

const includes = (data, ...arg) => {
  const scope = typeof data.scope === 'string' ? data.scope.split(' ').filter(Boolean) : data.scope || [];
  const isInclude = !![scope||[]].flat().find(elm => arg.includes(elm));
  return isInclude ? getForeground(data.settings.foreground) : undefined;
}
const getForeground = (str) => typeof str === 'string' ? str : null;

function format(data = {}, dark = false) {
  const { colors = {}, tokenColors = [] } = data || {};
  const conf = {
    // name: data.name,
    // Layout
    background: colors['editor.background'],
    foreground: colors['editor.foreground'] || colors['input.foreground'],
    selection: colors['editor.selectionBackground'],
    cursor: colors['editorCursor.foreground'] || colors['foreground'],
    dropdownBackground: colors['dropdown.background'],
    dropdownBorder: colors['dropdown.border'] || colors['foreground'],
    activeLine: colors['editor.lineHighlightBackground'] || colors['editor.background'],
    matchingBracket: colors['editorBracketMatch.background'] || colors['editor.lineHighlightBackground'] || colors['editor.selectionBackground'],
    // Syntax
    keyword: null,
    storage: null,
    variable: null,
    parameter: null,
    function: null,
    string: null,
    constant: null,
    type: null,
    class: null,
    number: null,
    comment: null,
    heading: null,
    invalid: null,
    regexp: null,
    tag: null,
  };
  tokenColors.forEach((item) => {
    const keys = Object.keys(item).length;
    if (keys === 1 && !conf.foreground && item.settings.foreground) {
      conf.foreground = getForeground(item.settings.foreground);
    }

    if (includes(item, "keyword")) {
      conf.keyword = getForeground(item.settings.foreground);
    }
    if (includes(item, "entity.name.tag")) {
      conf.tag = getForeground(item.settings.foreground);
    }
    if (includes(item, "storage", "keyword")) {
      conf.storage = getForeground(item.settings.foreground);
    }
    if (includes(item, "variable", "variable.parameter", "variable.other", "variable.language", "foreground")) {
      conf.variable = getForeground(item.settings.foreground);
    }
    if (includes(item, "variable.parameter", "variable.other", "variable")) {
      conf.parameter = getForeground(item.settings.foreground);
    }
    if (includes(item, "entity.name.function", "support.function", "entity.name", "support")) {
      conf.function = getForeground(item.settings.foreground);
    }
    if (includes(item, "string")) {
      conf.string = getForeground(item.settings.foreground);
    }
    if (includes(item, "constant", "constant.character", "constant.keyword")) {
      conf.constant = getForeground(item.settings.foreground);
    }
    if (includes(item, "entity.name.type", "entity.name.class", "support.type", "support")) {
      conf.type = getForeground(item.settings.foreground);
    }
    if (includes(item, "entity.name.class", "entity.name", 'entity', "entity.name.function")) {
      conf.class = getForeground(item.settings.foreground);
    }
    if (includes(item, "constant.numeric", "constant")) {
      conf.number = getForeground(item.settings.foreground);
    }
    if (includes(item, "comment")) {
      conf.comment = getForeground(item.settings.foreground);
    }
    if (includes(item, "markup.heading", "markup.heading.setext", "heading.1.markdown entity.name")) {
      conf.heading = getForeground(item.settings.foreground);
    }
    if (includes(item, "invalid", "editorError.foreground", "errorForeground", "foreground", "input.foreground")) {
      conf.invalid = getForeground(item.settings.foreground);
    }
    if (includes(item, "string.regexp", "string")) {
      conf.regexp = getForeground(item.settings.foreground);
    }
  });
  return conf;
}

const getString = (obj) => `export const config = ${JSON.stringify(obj, null, 2)};`;

;(async () => {
  const themeQuietlight = format(require('./data/quietlight.json'));
  let themePath = '../quietlight/src/color.ts';
  await FS.writeFile(themePath, getString(themeQuietlight));
  console.log(`🎉 File \x1b[32;1m${themePath}\x1b[0m created.`);

  const themeRed = format(require('./data/red.json'));
  themePath = '../red/src/color.ts';
  await FS.writeFile(themePath, getString(themeRed));
  console.log(`🎉 File \x1b[32;1m${themePath}\x1b[0m created.`);

  const themeAbyss = format(require('./data/abyss.json'));
  themePath = '../abyss/src/color.ts';
  await FS.writeFile(themePath, getString(themeAbyss));
  console.log(`🎉 File \x1b[32;1m${themePath}\x1b[0m created.`);

  const themeKimbie = format(require('./data/kimbie.json'));
  themePath = '../kimbie/src/color.ts';
  await FS.writeFile(themePath, getString(themeKimbie));
  console.log(`🎉 File \x1b[32;1m${themePath}\x1b[0m created.`);
  
  const monokai = format(require('./data/monokai.json'));
  themePath = '../monokai/src/color.ts';
  await FS.writeFile(themePath, getString(monokai));
  console.log(`🎉 File \x1b[32;1m${themePath}\x1b[0m created.`);

  // const themeSolarizedDark = format(require('./data/solarized.dark.json'), true)
  // console.log('~~~::', themeSolarizedDark);
  // const themeSolarizedLight = format(require('./data/solarized.light.json'))
  // console.log('~~~::', themeSolarizedLight);
})()