import * as colorNameList from 'color-name-list/dist/colornames.umd.js';

import { ColorValue } from '../generic/color-value';
import { NamedColor } from '../named-color/named-color.interface';

export const colorNames: NamedColor[] = colorNameList
  .map(({name, hex}) => {
    const data = (new ColorValue(hex)).data;
    return { name, data };
  });
