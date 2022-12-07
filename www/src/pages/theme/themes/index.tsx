import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Document } from './Document';
import { Sample } from './Sample';
import { themeData } from './Datas';
import { SiderMenus } from './SiderMenus';

export const toCamelCase = (str: string = '') => {
  const s =
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('') || '';
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

export const ThemeOkaidia = () => {
  const { name = '', ...other } = useParams();
  const textName = (name + '/' + (other['*'] || ''))
    .split('/')
    .filter(Boolean)
    .map((item) => item?.slice(0, 1).toUpperCase() + item?.slice(1).toLowerCase());
  const theme = themeData[toCamelCase(textName.join(' ')) as keyof typeof themeData];
  return (
    <Fragment>
      <SiderMenus />
      <Document themeName={textName.join(' ')}>
        <Sample theme={theme} />
      </Document>
    </Fragment>
  );
};
