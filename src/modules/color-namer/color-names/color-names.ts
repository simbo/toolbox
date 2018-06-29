import * as Color from 'color';
import { rgb } from 'color';
import { colorNamesMap } from './color-names-map';

export interface NamedColor {
  name: string;
  hex: string;
  rgb: number[];
  color: Color;
  distance?: number;
}

export const colorNames: NamedColor[] = Object.entries(colorNamesMap)
  .map(([name, hex]) => {
    const color = rgb(hex);
    return {
      name,
      hex,
      rgb: color.array().slice(0, 3),
      color
    };
  });
