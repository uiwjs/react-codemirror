import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Document } from './Document';
import { Sample } from './Sample';
import { themeData } from './Datas';
import { SiderMenus } from './SiderMenus';
import { toCamelCase } from '../../../utils/utils';

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
