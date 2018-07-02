import * as deltaE from 'delta-e';

import { labArrayToObject } from '../convert/lab-array-to-object';

export function colorDistanceCIE94(colorA: number[], colorB: number[]): number {
  return deltaE.getDeltaE94(
    labArrayToObject(colorA),
    labArrayToObject(colorB)
  );
}
