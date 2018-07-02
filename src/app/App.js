import React, { PureComponent } from 'react';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import logo from './logo.png';
import styles from './App.less';
import CodeMirror from '../lib/';

const code = `import React, { PureComponent } from 'react';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import logo from './logo.png';
import styles from './App.less';
import CodeMirror from '../../lib/';

export default class App extends PureComponent {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React-CodeMirror</h1>
        </header>
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          options={{
            keyMap: 'sublime',
            mode: 'jsx',
          }}
        />
      </div>
    );
  }
}
`;
const modes = ['json', 'apl', 'asciiarmor', 'asn.1', 'asterisk', 'brainfuck', 'clike', 'clojure', 'cmake', 'cobol', 'coffeescript', 'commonlisp', 'crystal', 'css', 'cypher', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dtd', 'dylan', 'ebnf', 'ecl', 'eiffel', 'elm', 'erlang', 'factor', 'fcl', 'forth', 'fortran', 'gas', 'gfm', 'gherkin', 'go', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell-literate', 'haxe', 'htmlembedded', 'htmlmixed', 'http', 'idl', 'javascript', 'jinja2', 'jsx', 'julia', 'livescript', 'lua', 'markdown', 'mathematica', 'mbox', 'meta.js', 'mirc', 'mllike', 'modelica', 'mscgen', 'mumps', 'nginx', 'nsis', 'ntriples', 'octave', 'oz', 'pascal', 'pegjs', 'perl', 'php', 'pig', 'powershell', 'properties', 'protobuf', 'pug', 'puppet', 'python', 'q', 'r', 'rpm', 'rst', 'ruby', 'rust', 'sas', 'sass', 'scheme', 'shell', 'sieve', 'slim', 'smalltalk', 'smarty', 'solr', 'soy', 'sparql', 'spreadsheet', 'sql', 'stex', 'stylus', 'swift', 'tcl', 'textile', 'tiddlywiki', 'tiki', 'toml', 'tornado', 'troff', 'ttcn', 'ttcn-cfg', 'turtle', 'twig', 'vb', 'vbscript', 'velocity', 'verilog', 'vhdl', 'vue', 'webidl', 'xml', 'xquery', 'yacas', 'yaml', 'yaml-frontmatter', 'z80'];

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      mode: 'jsx',
    };
  }
  onChange(e) {
    this.setState({
      mode: e.target.value,
    });
  }
  render() {
    const { mode } = this.state;
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React-CodeMirror</h1>
          <div>
            <select value={mode} onChange={this.onChange.bind(this)}>
              {modes.map((item, key) => {
                const optionProps = { key };
                if (mode === item) {
                  // optionProps.selected = true;
                  // optionProps.defaultValue = item;
                  optionProps.value = item;
                }
                return (
                  <option {...optionProps}> {item} </option>
                );
              })}
            </select>
          </div>
        </header>
        <CodeMirror
          value={code}
          options={{
            keyMap: 'sublime',
            mode,
          }}
        />
      </div>
    );
  }
}
