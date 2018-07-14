import { Component, Input, ViewChild, Optional, Inject, OnInit, HostBinding } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import * as shortid from 'shortid';

import { ControlElementBase } from '../control-base/control-element-base';

@Component({
  selector: 'c-textfield',
  templateUrl: './textfield.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextfieldComponent,
    multi: true,
  }]
})
export class TextfieldComponent
  extends ControlElementBase<string>
  implements OnInit {

  @Input() public id: string;
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public multiline: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public autocorrect: boolean = false;
  @Input() public autocomplete: boolean = false;
  @Input() public autocapitalize: boolean = false;

  @HostBinding('id') hostId: string = '';

  @ViewChild(NgModel) model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  public ngOnInit(): void {
    if (!this.id) {
      this.id = `textfield_${shortid.generate()}`;
    }
  }

}