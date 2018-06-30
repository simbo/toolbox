import { Component, Input, ViewChild, Optional, Inject } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';

import { ControlElementBase } from '../control-base/control-element-base';

export interface SelectChoice {
  value: string;
  label: string;
}

export type SelectChoices = SelectChoice[];

@Component({
  selector: 'c-select',
  templateUrl: './select.component.pug',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true,
  }]
})
export class SelectComponent extends ControlElementBase<SelectChoices> {

  @Input() public id: string;
  @Input() public label: string = '';
  @Input() public choices: SelectChoices;

  @ViewChild(NgModel) model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  choicesTrackBy(index: number, item: SelectChoice): string {
    return item.value;
  }

}
