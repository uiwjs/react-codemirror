import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters, CodeBlockData } from 'markdown-react-code-preview-loader';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import rehypeIgnore from 'rehype-ignore';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

interface CodePreviewProps extends CodeProps {
  mdData?: CodeBlockData;
}

const CodePreview: FC<PropsWithChildren<CodePreviewProps>> = ({ inline, node, ...props }) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { mdData, ...rest } = props;
  // useEffect(() => {
  //   if ($dom.current) {
  //     const parentElement = $dom.current.parentElement;
  //     if (parentElement && parentElement.parentElement) {
  //       parentElement.parentElement.replaceChild($dom.current, parentElement);
  //     }
  //   }
  // }, [$dom]);
  const { 'data-meta': meta } = props as any;
  if (inline || !isMeta(meta)) {
    return <code {...rest} />;
  }
  const line = node.position?.start.line;
  const metaId = getMetaId(meta) || String(line);
  const Child = mdData?.components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = mdData?.data[metaId].value || '';
    const param = getURLParameters(meta);
    return (
      <CodeLayout ref={$dom}>
        <Preview>
          <Child />
        </Preview>
        <Toolbar>{param.title || 'Example'}</Toolbar>
        <Code>
          <pre {...rest} />
        </Code>
      </CodeLayout>
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
      disableCopy={true}
      rehypePlugins={[rehypeIgnore]}
      source={props.source || ''}
      components={{
        code: (props) => <CodePreview {...props} mdData={mdData} />,
      }}
    />
  );
}
