import * as colorNameList from 'color-name-list/dist/colornames.umd.js';

import { ColorValue } from '../generic/color-value';
import { NamedColor } from '../named-color/named-color.interface';

export const colorNames: NamedColor[] = colorNameList
  .map(({name, hex}) => {
    const value = (new ColorValue(hex)).value;
    return { name, value };
  });
