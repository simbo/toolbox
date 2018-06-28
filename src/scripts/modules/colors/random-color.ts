import * as Color from 'color';
import { rgb } from 'color';
import randomInt from 'random-int';

export function randomColor(): Color {
  const red = randomInt(0, 255);
  const green = randomInt(0, 255);
  const blue = randomInt(0, 255);
  return rgb(red, green, blue);
}
