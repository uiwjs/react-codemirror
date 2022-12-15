import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-classname/README.md';
import { PageWarpper } from '../';
import { ClassNameDemo } from './ClassNameDemo';

export const ClassNameDoc = () => {
  return (
    <PageWarpper>
      <ClassNameDemo />
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
