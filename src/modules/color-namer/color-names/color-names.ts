import * as Color from 'color';
import colorNameList from 'color-name-list/dist/colornames.json';

export interface NamedColor {
  name: string;
  hex: string;
  rgb: number[];
  lab: number[];
  color: Color;
  distance?: number;
}

export const colorNames: NamedColor[] = colorNameList
  .map(({name, hex}) => {
    const color = new Color(hex, 'hex');
    return {
      name,
      hex,
      rgb: color.array(),
      lab: color.lab().array(),
      color
    };
  });
