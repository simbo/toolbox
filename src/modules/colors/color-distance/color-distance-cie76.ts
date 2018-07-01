import * as deltaE from 'delta-e';

import { labArrayToObject } from '../color-convert/lab-array-to-object';

export function colorDistanceCIE76(colorA: number[], colorB: number[]): number {
  return deltaE.getDeltaE76(
    labArrayToObject(colorA),
    labArrayToObject(colorB)
  );
}
