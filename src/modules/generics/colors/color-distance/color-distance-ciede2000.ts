import * as deltaE from 'delta-e';

import { labArrayToObject } from '../lab-array-to-object';

export function colorDistanceCIEDE2000(colorA: number[], colorB: number[]): number {
  return deltaE.getDeltaE00(
    labArrayToObject(colorA),
    labArrayToObject(colorB)
  );
}
