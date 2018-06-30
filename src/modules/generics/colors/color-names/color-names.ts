import colorNameList from 'color-name-list/dist/colornames.json';

import { ColorValue, ColorValueData } from '../color-value';

export interface NamedColor {
  name: string;
  value: ColorValueData;
}

export const colorNames: NamedColor[] = colorNameList
  .map(({name, hex}) => {
    const value = (new ColorValue(hex)).value;
    return { name, value };
  });
