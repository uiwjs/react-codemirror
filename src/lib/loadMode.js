const modes = ['apl', 'asciiarmor', 'asn.1', 'asterisk', 'brainfuck', 'clike', 'clojure', 'cmake', 'cobol', 'coffeescript', 'commonlisp', 'crystal', 'css', 'cypher', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dtd', 'dylan', 'ebnf', 'ecl', 'eiffel', 'elm', 'erlang', 'factor', 'fcl', 'forth', 'fortran', 'gas', 'gfm', 'gherkin', 'go', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell-literate', 'haxe', 'htmlembedded', 'htmlmixed', 'http', 'idl', 'javascript', 'jinja2', 'jsx', 'julia', 'livescript', 'lua', 'markdown', 'mathematica', 'mbox', 'meta.js', 'mirc', 'mllike', 'modelica', 'mscgen', 'mumps', 'nginx', 'nsis', 'ntriples', 'octave', 'oz', 'pascal', 'pegjs', 'perl', 'php', 'pig', 'powershell', 'properties', 'protobuf', 'pug', 'puppet', 'python', 'q', 'r', 'rpm', 'rst', 'ruby', 'rust', 'sas', 'sass', 'scheme', 'shell', 'sieve', 'slim', 'smalltalk', 'smarty', 'solr', 'soy', 'sparql', 'spreadsheet', 'sql', 'stex', 'stylus', 'swift', 'tcl', 'textile', 'tiddlywiki', 'tiki', 'toml', 'tornado', 'troff', 'ttcn', 'ttcn-cfg', 'turtle', 'twig', 'vb', 'vbscript', 'velocity', 'verilog', 'vhdl', 'vue', 'webidl', 'xml', 'xquery', 'yacas', 'yaml', 'yaml-frontmatter', 'z80'];

export default async function loadMode(mode) {
  if (modes.indexOf(mode) < 0) return;
  if (mode === 'jsx') {
    await import('codemirror/mode/javascript/javascript');
    await import('codemirror/mode/xml/xml');
    await import('codemirror/mode/jsx/jsx');
    return;
  }
  // console.log('mode:2', mode);
  if (mode === 'apl') { await import('codemirror/mode/apl/apl'); return; }
  if (mode === 'asciiarmor') { await import('codemirror/mode/asciiarmor/asciiarmor'); return; }
  if (mode === 'asn.1') { await import('codemirror/mode/asn.1/asn.1'); return; }
  if (mode === 'asterisk') { await import('codemirror/mode/asterisk/asterisk'); return; }
  if (mode === 'brainfuck') { await import('codemirror/mode/brainfuck/brainfuck'); return; }
  if (mode === 'clike') { await import('codemirror/mode/clike/clike'); return; }
  if (mode === 'clojure') { await import('codemirror/mode/clojure/clojure'); return; }
  if (mode === 'cmake') { await import('codemirror/mode/cmake/cmake'); return; }
  if (mode === 'cobol') { await import('codemirror/mode/cobol/cobol'); return; }
  if (mode === 'coffeescript') { await import('codemirror/mode/coffeescript/coffeescript'); return; }
  if (mode === 'commonlisp') { await import('codemirror/mode/commonlisp/commonlisp'); return; }
  if (mode === 'crystal') { await import('codemirror/mode/crystal/crystal'); return; }
  if (mode === 'css') { await import('codemirror/mode/css/css'); return; }
  if (mode === 'cypher') { await import('codemirror/mode/cypher/cypher'); return; }
  if (mode === 'd') { await import('codemirror/mode/d/d'); return; }
  if (mode === 'dart') { await import('codemirror/mode/dart/dart'); return; }
  if (mode === 'diff') { await import('codemirror/mode/diff/diff'); return; }
  if (mode === 'django') { await import('codemirror/mode/django/django'); return; }
  if (mode === 'dockerfile') { await import('codemirror/mode/dockerfile/dockerfile'); return; }
  if (mode === 'dtd') { await import('codemirror/mode/dtd/dtd'); return; }
  if (mode === 'dylan') { await import('codemirror/mode/dylan/dylan'); return; }
  if (mode === 'ebnf') { await import('codemirror/mode/ebnf/ebnf'); return; }
  if (mode === 'ecl') { await import('codemirror/mode/ecl/ecl'); return; }
  if (mode === 'eiffel') { await import('codemirror/mode/eiffel/eiffel'); return; }
  if (mode === 'elm') { await import('codemirror/mode/elm/elm'); return; }
  if (mode === 'erlang') { await import('codemirror/mode/erlang/erlang'); return; }
  if (mode === 'factor') { await import('codemirror/mode/factor/factor'); return; }
  if (mode === 'fcl') { await import('codemirror/mode/fcl/fcl'); return; }
  if (mode === 'forth') { await import('codemirror/mode/forth/forth'); return; }
  if (mode === 'fortran') { await import('codemirror/mode/fortran/fortran'); return; }
  if (mode === 'gas') { await import('codemirror/mode/gas/gas'); return; }
  if (mode === 'gfm') { await import('codemirror/mode/gfm/gfm'); return; }
  if (mode === 'gherkin') { await import('codemirror/mode/gherkin/gherkin'); return; }
  if (mode === 'go') { await import('codemirror/mode/go/go'); return; }
  if (mode === 'groovy') { await import('codemirror/mode/groovy/groovy'); return; }
  if (mode === 'haml') { await import('codemirror/mode/haml/haml'); return; }
  if (mode === 'handlebars') { await import('codemirror/mode/handlebars/handlebars'); return; }
  if (mode === 'haskell') { await import('codemirror/mode/haskell/haskell'); return; }
  if (mode === 'haskell-literate') { await import('codemirror/mode/haskell-literate/haskell-literate'); return; }
  if (mode === 'haxe') { await import('codemirror/mode/haxe/haxe'); return; }
  if (mode === 'htmlembedded') { await import('codemirror/mode/htmlembedded/htmlembedded'); return; }
  if (mode === 'htmlmixed') { await import('codemirror/mode/htmlmixed/htmlmixed'); return; }
  if (mode === 'http') { await import('codemirror/mode/http/http'); return; }
  if (mode === 'idl') { await import('codemirror/mode/idl/idl'); return; }
  if (mode === 'javascript') { await import('codemirror/mode/javascript/javascript'); return; }
  if (mode === 'jinja2') { await import('codemirror/mode/jinja2/jinja2'); return; }
  if (mode === 'jsx') { await import('codemirror/mode/jsx/jsx'); return; }
  if (mode === 'julia') { await import('codemirror/mode/julia/julia'); return; }
  if (mode === 'livescript') { await import('codemirror/mode/livescript/livescript'); return; }
  if (mode === 'lua') { await import('codemirror/mode/lua/lua'); return; }
  if (mode === 'markdown') { await import('codemirror/mode/markdown/markdown'); return; }
  if (mode === 'mathematica') { await import('codemirror/mode/mathematica/mathematica'); return; }
  if (mode === 'mbox') { await import('codemirror/mode/mbox/mbox'); return; }
  if (mode === 'meta') { await import('codemirror/mode/meta'); return; } // eslint-disable-line
  if (mode === 'mirc') { await import('codemirror/mode/mirc/mirc'); return; }
  if (mode === 'mllike') { await import('codemirror/mode/mllike/mllike'); return; }
  if (mode === 'modelica') { await import('codemirror/mode/modelica/modelica'); return; }
  if (mode === 'mscgen') { await import('codemirror/mode/mscgen/mscgen'); return; }
  if (mode === 'mumps') { await import('codemirror/mode/mumps/mumps'); return; }
  if (mode === 'nginx') { await import('codemirror/mode/nginx/nginx'); return; }
  if (mode === 'nsis') { await import('codemirror/mode/nsis/nsis'); return; }
  if (mode === 'ntriples') { await import('codemirror/mode/ntriples/ntriples'); return; }
  if (mode === 'octave') { await import('codemirror/mode/octave/octave'); return; }
  if (mode === 'oz') { await import('codemirror/mode/oz/oz'); return; }
  if (mode === 'pascal') { await import('codemirror/mode/pascal/pascal'); return; }
  if (mode === 'pegjs') { await import('codemirror/mode/pegjs/pegjs'); return; }
  if (mode === 'perl') { await import('codemirror/mode/perl/perl'); return; }
  if (mode === 'php') { await import('codemirror/mode/php/php'); return; }
  if (mode === 'pig') { await import('codemirror/mode/pig/pig'); return; }
  if (mode === 'powershell') { await import('codemirror/mode/powershell/powershell'); return; }
  if (mode === 'properties') { await import('codemirror/mode/properties/properties'); return; }
  if (mode === 'protobuf') { await import('codemirror/mode/protobuf/protobuf'); return; }
  if (mode === 'pug') { await import('codemirror/mode/pug/pug'); return; }
  if (mode === 'puppet') { await import('codemirror/mode/puppet/puppet'); return; }
  if (mode === 'python') { await import('codemirror/mode/python/python'); return; }
  if (mode === 'q') { await import('codemirror/mode/q/q'); return; }
  if (mode === 'r') { await import('codemirror/mode/r/r'); return; }
  if (mode === 'rpm') { await import('codemirror/mode/rpm/rpm'); return; }
  if (mode === 'rst') { await import('codemirror/mode/rst/rst'); return; }
  if (mode === 'ruby') { await import('codemirror/mode/ruby/ruby'); return; }
  if (mode === 'rust') { await import('codemirror/mode/rust/rust'); return; }
  if (mode === 'sas') { await import('codemirror/mode/sas/sas'); return; }
  if (mode === 'sass') { await import('codemirror/mode/sass/sass'); return; }
  if (mode === 'scheme') { await import('codemirror/mode/scheme/scheme'); return; }
  if (mode === 'shell') { await import('codemirror/mode/shell/shell'); return; }
  if (mode === 'sieve') { await import('codemirror/mode/sieve/sieve'); return; }
  if (mode === 'slim') { await import('codemirror/mode/slim/slim'); return; }
  if (mode === 'smalltalk') { await import('codemirror/mode/smalltalk/smalltalk'); return; }
  if (mode === 'smarty') { await import('codemirror/mode/smarty/smarty'); return; }
  if (mode === 'solr') { await import('codemirror/mode/solr/solr'); return; }
  if (mode === 'soy') { await import('codemirror/mode/soy/soy'); return; }
  if (mode === 'sparql') { await import('codemirror/mode/sparql/sparql'); return; }
  if (mode === 'spreadsheet') { await import('codemirror/mode/spreadsheet/spreadsheet'); return; }
  if (mode === 'sql') { await import('codemirror/mode/sql/sql'); return; }
  if (mode === 'stex') { await import('codemirror/mode/stex/stex'); return; }
  if (mode === 'stylus') { await import('codemirror/mode/stylus/stylus'); return; }
  if (mode === 'swift') { await import('codemirror/mode/swift/swift'); return; }
  if (mode === 'tcl') { await import('codemirror/mode/tcl/tcl'); return; }
  if (mode === 'textile') { await import('codemirror/mode/textile/textile'); return; }
  if (mode === 'tiddlywiki') { await import('codemirror/mode/tiddlywiki/tiddlywiki'); return; }
  if (mode === 'tiki') { await import('codemirror/mode/tiki/tiki'); return; }
  if (mode === 'toml') { await import('codemirror/mode/toml/toml'); return; }
  if (mode === 'tornado') { await import('codemirror/mode/tornado/tornado'); return; }
  if (mode === 'troff') { await import('codemirror/mode/troff/troff'); return; }
  if (mode === 'ttcn') { await import('codemirror/mode/ttcn/ttcn'); return; }
  if (mode === 'ttcn-cfg') { await import('codemirror/mode/ttcn-cfg/ttcn-cfg'); return; }
  if (mode === 'turtle') { await import('codemirror/mode/turtle/turtle'); return; }
  if (mode === 'twig') { await import('codemirror/mode/twig/twig'); return; }
  if (mode === 'vb') { await import('codemirror/mode/vb/vb'); return; }
  if (mode === 'vbscript') { await import('codemirror/mode/vbscript/vbscript'); return; }
  if (mode === 'velocity') { await import('codemirror/mode/velocity/velocity'); return; }
  if (mode === 'verilog') { await import('codemirror/mode/verilog/verilog'); return; }
  if (mode === 'vhdl') { await import('codemirror/mode/vhdl/vhdl'); return; }
  if (mode === 'vue') { await import('codemirror/mode/vue/vue'); return; }
  if (mode === 'webidl') { await import('codemirror/mode/webidl/webidl'); return; }
  if (mode === 'xml') { await import('codemirror/mode/xml/xml'); return; }
  if (mode === 'xquery') { await import('codemirror/mode/xquery/xquery'); return; }
  if (mode === 'yacas') { await import('codemirror/mode/yacas/yacas'); return; }
  if (mode === 'yaml') { await import('codemirror/mode/yaml/yaml'); return; }
  if (mode === 'yaml-frontmatter') { await import('codemirror/mode/yaml-frontmatter/yaml-frontmatter'); return; }
  if (mode === 'z80') { await import('codemirror/mode/z80/z80'); }
}
