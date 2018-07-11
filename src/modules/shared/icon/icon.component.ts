import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.pug',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() public name: string;

  constructor() {}

}
