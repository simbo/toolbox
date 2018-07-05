import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ClassList } from '../../shared/class-list.interface';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.pug'
})
export class ButtonComponent {

  @Input() public href: string;
  @Input() public link: string;
  @Input() public label: string;
  @Input() public icon: string;
  @Input() public style: string;
  @Input() public title: string;

  @Output('click') public clickEmitter =
    new EventEmitter<MouseEvent>();

  public get iconOnly(): boolean {
    return !!(this.icon && !this.label);
  }

  public get labelOnly(): boolean {
    return !!(this.label && !this.icon);
  }

  public get classList(): ClassList {
    return {
      [`is-style--${this.style}`]: !!this.style,
      'has-label': !!this.label,
      'has-label-only': this.labelOnly,
      'has-icon': !!this.icon,
      'has-icon-only': this.iconOnly
    };
  }

}
