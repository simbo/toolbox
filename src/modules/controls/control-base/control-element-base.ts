import { Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncValidatorArray, ValidatorArray, ValidationResult, message, validate } from './control-validation-base';
import { ControlValueAccessorBase } from './control-value-accessor-base';

export abstract class ControlElementBase<T> extends ControlValueAccessorBase<T> {

  @Input() public id: string;

  @HostBinding('id') public hostId: string = '';

  @Input() public label: string = '';

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray
  ) {
    super();
  }

  protected get invalid(): Observable<boolean> {
    return this.validate().pipe(
      map(v => Object.keys(v || {}).length > 0)
    );
  }

  protected get failures(): Observable<Array<string>> {
    return this.validate().pipe(
      map(v => Object.keys(v).map(k => message(v, k)))
    );
  }

  protected validate(): Observable<ValidationResult> {
    return validate
      (this.validators, this.asyncValidators)
      (this.model.control);
  }

}
