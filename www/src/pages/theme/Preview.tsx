import { FC, Children, PropsWithChildren, cloneElement, useState } from 'react';
import styled from 'styled-components';
import { useMdData } from '../../components/useMdData';
import { Warpper } from '../../components/Warpper';
import { PreCode } from './themes/PreCode';
import { themeData } from './themes/Datas';
import { Sample } from './themes/Sample';
import Markdown from '../../components/Markdown';

interface PreviewProps {
  path?: any;
  themePkg?: string;
  mode?: 'light' | 'dark';
  preview?: 'document' | 'example';
}

export const Content = styled.div`
  padding: 30px 38px 120px 38px;
  flex: 1;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
`;

export const Title = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const toCamelCase = (str: string = '') => {
  const s =
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('') || '';
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

export const Header = styled.div`
  position: relative;
  padding: 0 0 22px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-border-default);
  ${Title} {
    padding: 6px 0 12px 0;
  }
  ${Button} {
  }
`;

export const Preview: FC<PropsWithChildren<PreviewProps>> = (props) => {
  const { themePkg, mode } = props;
  const { mdData } = useMdData(props.path);
  const childs = Children.toArray(props.children);
  const [previewDoc, setPreviewDoc] = useState<PreviewProps['preview']>(props.preview || 'example');
  const themePkgNmae = !!mode ? themePkg?.replace(/-(light|dark)$/, '') : themePkg;
  const themeName = themePkgNmae?.replace('@uiw/codemirror-theme-', '').replace('-', ' ');
  const themeExtensionName = themePkgNmae?.replace('@uiw/codemirror-theme-', '') + (!!mode ? `-${mode}` : '');
  const extension = themeData[toCamelCase(themeExtensionName) as keyof typeof themeData];
  console.log('extension', themeExtensionName);
  return (
    <Warpper>
      <Content>
        {props.themePkg && (
          <Header>
            <Title>{themeName} Theme</Title>
            <div>
              <Button onClick={() => setPreviewDoc(previewDoc === 'document' ? 'example' : 'document')}>
                {previewDoc === 'document' ? 'Preview Theme Example' : 'Preview Document'}
              </Button>
            </div>
            <PreCode value={`npm install ${themePkg} --save`} />
          </Header>
        )}
        {childs.map((child, key) => {
          return cloneElement(child as any, { key, source: mdData?.source });
        })}
        {mdData && (previewDoc === 'document' || !themePkg) && <Markdown source={mdData.source} mdData={mdData} />}
        {previewDoc === 'example' && themePkg && themeExtensionName && <Sample theme={extension} />}
      </Content>
    </Warpper>
  );
};
