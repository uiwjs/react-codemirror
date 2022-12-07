import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Document } from './Document';
import { Sample } from './Sample';
import { themeData } from './Datas';
import { SiderMenus } from './SiderMenus';

export const ThemeOkaidia = () => {
  const { name = '', lightOrDark = '' } = useParams();
  const text = name + lightOrDark.replace(lightOrDark[0], (lightOrDark[0] || '').toLocaleUpperCase());
  const theme = themeData[text as keyof typeof themeData];
  return (
    <Fragment>
      <SiderMenus />
      <Document themeName={text}>
        <Sample theme={theme} />
      </Document>
    </Fragment>
  );
};
