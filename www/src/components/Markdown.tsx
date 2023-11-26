import { FC, PropsWithChildren, useRef } from 'react';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, getURLParameters, CodeBlockData } from 'markdown-react-code-preview-loader';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import rehypeIgnore from 'rehype-ignore';
import { type Node } from 'unist';
import styled from 'styled-components';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const CodeLayoutView = styled(CodeLayout)`
  & + div.copied {
    display: none !important;
  }
`;

interface CodePreviewProps {
  mdData?: CodeBlockData;
  'data-meta'?: string;
  node?: Node;
}

const CodePreview: FC<PropsWithChildren<CodePreviewProps>> = (props) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { mdData, node, 'data-meta': meta, ...rest } = props;
  const line = node?.position?.start.line;
  const metaId = getMetaId(meta) || String(line);
  const Child = mdData?.components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = mdData?.data[metaId].value || '';
    const param = getURLParameters(meta || '');
    return (
      <CodeLayoutView ref={$dom}>
        <Preview>
          <Child />
        </Preview>
        <Toolbar text={code}>{param.title || 'Example'}</Toolbar>
        <Code>
          <pre {...rest} />
        </Code>
      </CodeLayoutView>
    );
  }
  return <code {...rest} />;
};

interface MarkdownProps extends MarkdownPreviewProps {
  mdData?: CodeBlockData;
}

export default function Markdown(props: MarkdownProps) {
  const { mdData, ...rest } = props;
  return (
    <MarkdownPreview
      {...rest}
      style={{ paddingTop: 30 }}
      // disableCopy={true}
      rehypePlugins={[rehypeIgnore]}
      source={props.source || ''}
      components={{
        code: (props) => <CodePreview {...props} mdData={mdData} />,
      }}
    />
  );
}
