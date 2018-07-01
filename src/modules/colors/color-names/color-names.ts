import * as colorNameList from 'color-name-list/dist/colornames.umd.js';

import { ColorValue, ColorValueData } from '../generic/color-value';

export interface NamedColor {
  name: string;
  value: ColorValueData;
}

export const colorNames: NamedColor[] = colorNameList
  .map(({name, hex}) => {
    const value = (new ColorValue(hex)).value;
    return { name, value };
  });
