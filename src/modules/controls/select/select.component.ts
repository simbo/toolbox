import { Component, Input, Optional, Inject, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import * as shortid from 'shortid';

import { ControlElementBase } from '../control-base/control-element-base';

export interface SelectChoice {
  value: string;
  label: string;
}

export type SelectChoices = SelectChoice[];

@Component({
  selector: 'c-select',
  templateUrl: './select.component.pug',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true,
  }]
})
export class SelectComponent
  extends ControlElementBase<SelectChoices>
  implements OnInit {

  @Input() public choices: SelectChoices;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  public ngOnInit(): void {
    if (!this.id || !this.id.length) {
      this.id = `select_${shortid.generate()}`;
    }
  }

  public choicesTrackBy(index: number, item: SelectChoice): string {
    return item.value;
  }

}
