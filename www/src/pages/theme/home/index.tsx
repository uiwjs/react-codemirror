import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { color } from '@uiw/codemirror-extensions-color';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Warpper } from '../../../components/Warpper';
import { themeData } from '../themes/Datas';
import { toSnakeCase, toTitleCase } from '../../../utils/utils';

const ThemesWarpper = styled.div`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  display: grid;
  padding: 2.6rem;
  a {
    text-decoration: none;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ThemeCard = styled.div`
  padding: 1rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  border: 1px solid var(--color-neutral-muted);
  background-color: var(--color-canvas-subtle);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  &:hover {
    transform: translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  }
`;

const Title = styled.div`
  font-weight: 600;
  padding-bottom: 0.68rem;
`;

const codeString = `import React, {useState} from 'react';

// My favorite component
const Counter = () => {
  const [value, setValue] = useState(0);

  return <span>{value}</span>;
};`;

const CodeEditor = styled(CodeMirror)`
  border-radius: 0.375rem;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    display: block;
    height: 100%;
    background: transparent;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
`;

export function ThemesHome() {
  return (
    <Warpper>
      <ThemesWarpper>
        {Object.keys(themeData).map((name, idx) => {
          const [_name, _theme] = toSnakeCase(name) || [];
          return (
            <Link key={idx} to={`/theme/data/${_name}${_theme ? `/${_theme}` : ''}`}>
              <ThemeCard>
                <Title>{toTitleCase(name)}</Title>
                <CodeEditor
                  value={codeString}
                  height="165px"
                  theme={themeData[name as keyof typeof themeData]}
                  extensions={[color, langs.jsx()]}
                />
              </ThemeCard>
            </Link>
          );
        })}
      </ThemesWarpper>
    </Warpper>
  );
}
