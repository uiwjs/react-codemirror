import { Preview } from '../../theme/Preview';
import { BasicSetupExample } from './example';

export const Component = () => {
  return (
    <Preview path={() => import('@uiw/codemirror-extensions-basic-setup/README.md')}>
      <BasicSetupExample />
    </Preview>
  );
};
