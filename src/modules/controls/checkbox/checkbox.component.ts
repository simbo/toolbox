import { Component, Optional, Inject, ViewChild, Input, OnInit, HostBinding } from '@angular/core';
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as shortid from 'shortid';

import { ClassList } from '../../shared/class-list.interface';
import { ControlElementBase } from '../control-base/control-element-base';

@Component({
  selector: 'c-checkbox',
  templateUrl: './checkbox.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true,
  }]
})
export class CheckboxComponent
  extends ControlElementBase<boolean>
  implements OnInit {

  @Input() public id: string;
  @Input() public label: string = '';
  @Input() public readonly: boolean = false;
  @Input() public labelPosition: string = 'after';
  @Input() public style: string = 'cross';

  @HostBinding('id') hostId: string = '';

  @ViewChild(NgModel) public model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  public get classList(): ClassList {
    return {
      'has-label': !!this.label.length,
      'has-label--before': this.labelPosition === 'before',
      'has-label--after': this.labelPosition === 'after',
      [`is-style--${this.style}`]: !!this.style.length
    };
  }

  public ngOnInit(): void {
    if (!this.id || !this.id.length) {
      this.id = `checkbox_${shortid.generate()}`;
    }
  }

}
