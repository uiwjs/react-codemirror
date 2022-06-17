import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { python } from '@codemirror/lang-python';
import { markdown } from '@codemirror/lang-markdown';
import { xml } from '@codemirror/lang-xml';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { lezer } from '@codemirror/lang-lezer';
import { php } from '@codemirror/lang-php';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { tcl } from '@codemirror/legacy-modes/mode/tcl';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { vb } from '@codemirror/legacy-modes/mode/vb';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck';
// import { clike } from '@codemirror/legacy-modes/mode/clike';
import { stylus } from '@codemirror/legacy-modes/mode/stylus';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { nginx } from '@codemirror/legacy-modes/mode/nginx';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { pascal } from '@codemirror/legacy-modes/mode/pascal';
import { liveScript } from '@codemirror/legacy-modes/mode/livescript';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript';
import { clojure } from '@codemirror/legacy-modes/mode/clojure';
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { r } from '@codemirror/legacy-modes/mode/r';

export const langs = {
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  json,
  html,
  css,
  python,
  markdown,
  xml,
  sql,
  mysql: () => sql({ dialect: MySQL }),
  pgsql: () => sql({ dialect: PostgreSQL }),
  java,
  rust,
  cpp,
  lezer,
  php,
  go: () => StreamLanguage.define(go),
  shell: () => StreamLanguage.define(shell),
  lua: () => StreamLanguage.define(lua),
  swift: () => StreamLanguage.define(swift),
  tcl: () => StreamLanguage.define(tcl),
  yaml: () => StreamLanguage.define(yaml),
  vb: () => StreamLanguage.define(vb),
  powershell: () => StreamLanguage.define(powerShell),
  brainfuck: () => StreamLanguage.define(brainfuck),
  stylus: () => StreamLanguage.define(stylus),
  erlang: () => StreamLanguage.define(erlang),
  nginx: () => StreamLanguage.define(nginx),
  perl: () => StreamLanguage.define(perl),
  ruby: () => StreamLanguage.define(ruby),
  pascal: () => StreamLanguage.define(pascal),
  livescript: () => StreamLanguage.define(liveScript),
  scheme: () => StreamLanguage.define(scheme),
  toml: () => StreamLanguage.define(toml),
  vbscript: () => StreamLanguage.define(vbScript),
  clojure: () => StreamLanguage.define(clojure),
  coffeescript: () => StreamLanguage.define(coffeeScript),
  julia: () => StreamLanguage.define(julia),
  dockerfile: () => StreamLanguage.define(dockerFile),
  r: () => StreamLanguage.define(r),
  // clike: () => StreamLanguage.define(clike),
  // clike: () => clike({ }),
};
