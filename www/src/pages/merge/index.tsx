import { Preview } from '../theme/Preview';
import { MergeExample } from './Example';

export const Component = () => {
  return (
    <Preview path={() => import('react-codemirror-merge/README.md')}>
      <MergeExample />
    </Preview>
  );
};
