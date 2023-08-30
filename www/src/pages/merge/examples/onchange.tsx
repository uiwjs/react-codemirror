import { Preview } from '../../theme/Preview';

export const Component = () => {
  return <Preview path={() => import('./Example.md')} />;
};
