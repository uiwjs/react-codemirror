import { useEffect, useState } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';

export type MdDataHandle = () => Promise<{ default: CodeBlockData }>;

export const useMdData = (path: MdDataHandle) => {
  const [mdData, setMdData] = useState<CodeBlockData>({
    source: '',
    components: {},
    data: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(() => true);
    const getMd = async () => {
      try {
        const result = await path();
        if (result.default) {
          setMdData(result.default);
        }
      } catch (err) {
        console.warn(err);
      }
      setLoading(() => false);
    };
    getMd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return { mdData, loading };
};
