import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ControlValueAccessorBase } from './control-value-accessor-base';

import {
  AsyncValidatorArray,
  ValidatorArray,
  ValidationResult,
  message,
  validate,
} from './control-validation-base';


export abstract class ControlElementBase<T> extends ControlValueAccessorBase<T> {
  protected abstract model: NgModel;

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray
  ) {
    super();
  }

  protected validate(): Observable<ValidationResult> {
    return validate
      (this.validators, this.asyncValidators)
      (this.model.control);
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

}
