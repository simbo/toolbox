import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.pug',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() public name: string = 'unicorn';

  @Input() public svgFilter: string;

  public get svgSymbolLink(): string {
    return `#icon-symbol--${this.name}`;
  }

  public get svgFilterUrl(): string|false {
    return this.svgFilter ? `url(#${this.svgFilter})` : false;
  }

}
