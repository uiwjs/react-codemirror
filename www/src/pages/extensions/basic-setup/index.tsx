import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-basic-setup/README.md';
import { PageWarpper } from '../';

export const BasicSetupDoc = () => {
  return (
    <PageWarpper>
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
