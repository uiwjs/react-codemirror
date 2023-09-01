import { languages } from '@codemirror/language-data';
import { StreamLanguage } from '@codemirror/language';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { less } from '@codemirror/lang-less';
import { sass } from '@codemirror/lang-sass';
import { json } from '@codemirror/lang-json';
import { mermaid } from 'codemirror-lang-mermaid';
import { python } from '@codemirror/lang-python';
import { xml } from '@codemirror/lang-xml';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { lezer } from '@codemirror/lang-lezer';
import { php } from '@codemirror/lang-php';
import { wast } from '@codemirror/lang-wast';
import { vue } from '@codemirror/lang-vue';
import { angular } from '@codemirror/lang-angular';
import { nix } from '@replit/codemirror-lang-nix';
import { svelte } from '@replit/codemirror-lang-svelte';
import { csharp } from '@replit/codemirror-lang-csharp';
import { solidity } from '@replit/codemirror-lang-solidity';

import { apl } from '@codemirror/legacy-modes/mode/apl';
import { asciiArmor } from '@codemirror/legacy-modes/mode/asciiarmor';
// import { asn1 } from '@codemirror/legacy-modes/mode/asn1';
import { asterisk } from '@codemirror/legacy-modes/mode/asterisk';
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck';
import {
  c,
  scala,
  kotlin,
  shader,
  nesC,
  objectiveC,
  objectiveCpp,
  squirrel,
  ceylon,
  dart,
} from '@codemirror/legacy-modes/mode/clike';
import { clojure } from '@nextjournal/lang-clojure';
import { cmake } from '@codemirror/legacy-modes/mode/cmake';
import { cobol } from '@codemirror/legacy-modes/mode/cobol';
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript';
import { commonLisp } from '@codemirror/legacy-modes/mode/commonlisp';
import { crystal } from '@codemirror/legacy-modes/mode/crystal';
import { cypher } from '@codemirror/legacy-modes/mode/cypher';
import { d } from '@codemirror/legacy-modes/mode/d';
import { diff } from '@codemirror/legacy-modes/mode/diff';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { dtd } from '@codemirror/legacy-modes/mode/dtd';
import { dylan } from '@codemirror/legacy-modes/mode/dylan';
import { ebnf } from '@codemirror/legacy-modes/mode/ebnf';
import { ecl } from '@codemirror/legacy-modes/mode/ecl';
import { eiffel } from '@codemirror/legacy-modes/mode/eiffel';
import { elm } from '@codemirror/legacy-modes/mode/elm';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { factor } from '@codemirror/legacy-modes/mode/factor';
import { fcl } from '@codemirror/legacy-modes/mode/fcl';
import { forth } from '@codemirror/legacy-modes/mode/forth';
import { fortran } from '@codemirror/legacy-modes/mode/fortran';
import { gas } from '@codemirror/legacy-modes/mode/gas';
import { gherkin } from '@codemirror/legacy-modes/mode/gherkin';
import { go } from '@codemirror/legacy-modes/mode/go';
import { groovy } from '@codemirror/legacy-modes/mode/groovy';
import { haskell } from '@codemirror/legacy-modes/mode/haskell';
import { haxe } from '@codemirror/legacy-modes/mode/haxe';
import { http } from '@codemirror/legacy-modes/mode/http';
import { idl } from '@codemirror/legacy-modes/mode/idl';
import { jinja2 } from '@codemirror/legacy-modes/mode/jinja2';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { liveScript } from '@codemirror/legacy-modes/mode/livescript';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { mathematica } from '@codemirror/legacy-modes/mode/mathematica';
import { mbox } from '@codemirror/legacy-modes/mode/mbox';
import { mirc } from '@codemirror/legacy-modes/mode/mirc';
// import { mllike } from '@codemirror/legacy-modes/mode/mllike';
import { modelica } from '@codemirror/legacy-modes/mode/modelica';
import { mscgen } from '@codemirror/legacy-modes/mode/mscgen';
import { mumps } from '@codemirror/legacy-modes/mode/mumps';
import { nginx } from '@codemirror/legacy-modes/mode/nginx';
import { nsis } from '@codemirror/legacy-modes/mode/nsis';
import { ntriples } from '@codemirror/legacy-modes/mode/ntriples';
import { octave } from '@codemirror/legacy-modes/mode/octave';
import { oz } from '@codemirror/legacy-modes/mode/oz';
import { pascal } from '@codemirror/legacy-modes/mode/pascal';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { pig } from '@codemirror/legacy-modes/mode/pig';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { properties } from '@codemirror/legacy-modes/mode/properties';
import { protobuf } from '@codemirror/legacy-modes/mode/protobuf';
import { puppet } from '@codemirror/legacy-modes/mode/puppet';
import { q } from '@codemirror/legacy-modes/mode/q';
import { r } from '@codemirror/legacy-modes/mode/r';
// import { rpm } from '@codemirror/legacy-modes/mode/rpm';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { sas } from '@codemirror/legacy-modes/mode/sas';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { sieve } from '@codemirror/legacy-modes/mode/sieve';
// import { mode } from '@codemirror/legacy-modes/mode/simple-mode';
import { smalltalk } from '@codemirror/legacy-modes/mode/smalltalk';
import { solr } from '@codemirror/legacy-modes/mode/solr';
import { sparql } from '@codemirror/legacy-modes/mode/sparql';
import { spreadsheet } from '@codemirror/legacy-modes/mode/spreadsheet';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { stylus } from '@codemirror/legacy-modes/mode/stylus';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { tcl } from '@codemirror/legacy-modes/mode/tcl';
import { textile } from '@codemirror/legacy-modes/mode/textile';
import { tiddlyWiki } from '@codemirror/legacy-modes/mode/tiddlywiki';
import { tiki } from '@codemirror/legacy-modes/mode/tiki';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { troff } from '@codemirror/legacy-modes/mode/troff';
// import { cfg } from '@codemirror/legacy-modes/mode/ttcn-cfg';
import { ttcn } from '@codemirror/legacy-modes/mode/ttcn';
import { turtle } from '@codemirror/legacy-modes/mode/turtle';
import { vb } from '@codemirror/legacy-modes/mode/vb';
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript';
import { velocity } from '@codemirror/legacy-modes/mode/velocity';
import { verilog } from '@codemirror/legacy-modes/mode/verilog';
import { vhdl } from '@codemirror/legacy-modes/mode/vhdl';
import { webIDL } from '@codemirror/legacy-modes/mode/webidl';
import { xQuery } from '@codemirror/legacy-modes/mode/xquery';
import { yacas } from '@codemirror/legacy-modes/mode/yacas';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { z80 } from '@codemirror/legacy-modes/mode/z80';

export const langs = {
  apl: () => StreamLanguage.define(apl),
  asciiArmor: () => StreamLanguage.define(asciiArmor),
  // asn1: () => StreamLanguage.define(asn1),
  asterisk: () => StreamLanguage.define(asterisk),
  // clike: () => StreamLanguage.define(clike),
  c: () => StreamLanguage.define(c),
  csharp: () => csharp(),
  scala: () => StreamLanguage.define(scala),
  solidity: () => solidity,
  kotlin: () => StreamLanguage.define(kotlin),
  shader: () => StreamLanguage.define(shader),
  nesC: () => StreamLanguage.define(nesC),
  objectiveC: () => StreamLanguage.define(objectiveC),
  objectiveCpp: () => StreamLanguage.define(objectiveCpp),
  squirrel: () => StreamLanguage.define(squirrel),
  ceylon: () => StreamLanguage.define(ceylon),
  dart: () => StreamLanguage.define(dart),
  cmake: () => StreamLanguage.define(cmake),
  cobol: () => StreamLanguage.define(cobol),
  commonLisp: () => StreamLanguage.define(commonLisp),
  crystal: () => StreamLanguage.define(crystal),
  cypher: () => StreamLanguage.define(cypher),
  d: () => StreamLanguage.define(d),
  diff: () => StreamLanguage.define(diff),
  dtd: () => StreamLanguage.define(dtd),
  dylan: () => StreamLanguage.define(dylan),
  ebnf: () => StreamLanguage.define(ebnf),
  ecl: () => StreamLanguage.define(ecl),
  eiffel: () => StreamLanguage.define(eiffel),
  elm: () => StreamLanguage.define(elm),
  factor: () => StreamLanguage.define(factor),
  fcl: () => StreamLanguage.define(fcl),
  forth: () => StreamLanguage.define(forth),
  fortran: () => StreamLanguage.define(fortran),
  gas: () => StreamLanguage.define(gas),
  gherkin: () => StreamLanguage.define(gherkin),
  groovy: () => StreamLanguage.define(groovy),
  haskell: () => StreamLanguage.define(haskell),
  haxe: () => StreamLanguage.define(haxe),
  http: () => StreamLanguage.define(http),
  idl: () => StreamLanguage.define(idl),
  jinja2: () => StreamLanguage.define(jinja2),
  mathematica: () => StreamLanguage.define(mathematica),
  mbox: () => StreamLanguage.define(mbox),
  mirc: () => StreamLanguage.define(mirc),
  modelica: () => StreamLanguage.define(modelica),
  mscgen: () => StreamLanguage.define(mscgen),
  mumps: () => StreamLanguage.define(mumps),
  nsis: () => StreamLanguage.define(nsis),
  ntriples: () => StreamLanguage.define(ntriples),
  octave: () => StreamLanguage.define(octave),
  oz: () => StreamLanguage.define(oz),
  pig: () => StreamLanguage.define(pig),
  properties: () => StreamLanguage.define(properties),
  protobuf: () => StreamLanguage.define(protobuf),
  puppet: () => StreamLanguage.define(puppet),
  q: () => StreamLanguage.define(q),
  sas: () => StreamLanguage.define(sas),
  sass: () => sass(),
  mermaid: () => mermaid(),
  nix: () => nix(),
  svelte: () => svelte(),
  sieve: () => StreamLanguage.define(sieve),
  smalltalk: () => StreamLanguage.define(smalltalk),
  solr: () => StreamLanguage.define(solr),
  sparql: () => StreamLanguage.define(sparql),
  spreadsheet: () => StreamLanguage.define(spreadsheet),
  stex: () => StreamLanguage.define(stex),
  textile: () => StreamLanguage.define(textile),
  tiddlyWiki: () => StreamLanguage.define(tiddlyWiki),
  tiki: () => StreamLanguage.define(tiki),
  troff: () => StreamLanguage.define(troff),
  ttcn: () => StreamLanguage.define(ttcn),
  turtle: () => StreamLanguage.define(turtle),
  velocity: () => StreamLanguage.define(velocity),
  verilog: () => StreamLanguage.define(verilog),
  vhdl: () => StreamLanguage.define(vhdl),
  webIDL: () => StreamLanguage.define(webIDL),
  xQuery: () => StreamLanguage.define(xQuery),
  yacas: () => StreamLanguage.define(yacas),
  z80: () => StreamLanguage.define(z80),

  wast,
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  vue: () => vue(),
  angular: () => angular(),
  json,
  html,
  css,
  python,
  markdown: () => markdown({ base: markdownLanguage, codeLanguages: languages }),
  xml,
  sql,
  mysql: () => sql({ dialect: MySQL }),
  pgsql: () => sql({ dialect: PostgreSQL }),
  java,
  rust,
  cpp,
  // clike: () => StreamLanguage.define(clike),
  // clike: () => clike({ }),
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
  less: () => less(),
  scheme: () => StreamLanguage.define(scheme),
  toml: () => StreamLanguage.define(toml),
  vbscript: () => StreamLanguage.define(vbScript),
  clojure: () => clojure(),
  coffeescript: () => StreamLanguage.define(coffeeScript),
  julia: () => StreamLanguage.define(julia),
  dockerfile: () => StreamLanguage.define(dockerFile),
  r: () => StreamLanguage.define(r),
};

/** Language list */
export const langNames = Object.keys(langs) as LanguageName[];
export type LanguageName = keyof typeof langs;

export function loadLanguage(name: LanguageName) {
  return langs[name] ? langs[name]() : null;
}
