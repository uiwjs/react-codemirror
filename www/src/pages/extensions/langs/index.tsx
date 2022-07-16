import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-langs/README.md';
import { langNames, LanguageName, loadLanguage } from '@uiw/codemirror-extensions-langs';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { PageWarpper } from '../';
import styled from 'styled-components';

const Toolbar = styled.div`
  padding-bottom: 32px;
`;

export const LangsDoc = () => {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);

  const [language, setLanguage] = useState<LanguageName>('markdown');
  const [source, setSource] = useState<string>(data.source);

  useEffect(() => {
    if (language) {
      import(`code-example/txt/sample.${language.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setSource(data.default);
        })
        .catch((err) => {
          setSource('');
        });
    }
  }, [language]);

  return (
    <PageWarpper>
      <CodeMirror
        value={source}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[loadLanguage(language)!].filter(Boolean)}
      />
      <Toolbar>
        <select value={language} onChange={(evn) => setLanguage(evn.target.value as LanguageName)}>
          <option value="good">good</option>
          {langNames.map((name, idx) => {
            return (
              <option key={idx} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <span>&nbsp; Total: {langNames.length}</span>
      </Toolbar>
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
