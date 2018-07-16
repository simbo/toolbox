import { Component, Input } from '@angular/core';

import { RollerAnimation } from './roller.animation';

@Component({
  selector: 'c-roller',
  templateUrl: './roller.component.pug',
  animations: [
    RollerAnimation
  ]
})
export class RollerComponent {

  @Input() public expanded: boolean = false;

  constructor() {}

}
