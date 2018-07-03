import { Component, Input, ViewChild, Optional, Inject, OnInit, HostBinding } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import * as shortid from 'shortid';

import { ControlElementBase } from '../control-base/control-element-base';

@Component({
  selector: 'c-selectable-text',
  templateUrl: './selectable-text.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectableTextComponent,
    multi: true,
  }]
})
export class SelectableTextComponent
  extends ControlElementBase<string>
  implements OnInit {

  @Input() public id: string;
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public multiline: boolean = false;

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
      this.id = `selectable-text_${shortid.generate()}`;
    }
  }

}
