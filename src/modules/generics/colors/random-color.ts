import * as Color from 'color';
import * as randomInt from 'random-int';

export function randomColor(): Color {
  const red = randomInt(0, 255);
  const green = randomInt(0, 255);
  const blue = randomInt(0, 255);
  return new Color([red, green, blue], 'rgb');
}
