import * as deltaE from 'delta-e';
import * as isNumber from 'is-number';

import { labArrayToObject } from '../convert/lab-array-to-object';

export function colorDistanceCIE94(colorA: number[], colorB: number[]): number {
  const delta = deltaE.getDeltaE94(
    labArrayToObject(colorA),
    labArrayToObject(colorB)
  );
  if (isNumber(delta)) {
    return delta;
  }
  return 100;
}
