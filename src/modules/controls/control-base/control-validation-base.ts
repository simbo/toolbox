import { AbstractControl, AsyncValidatorFn, Validator, Validators, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export interface ValidationResult {
  [validator: string]: string | boolean;
}

export type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;

export type ValidatorArray = Array<Validator | ValidatorFn>;


export function normalizeValidator(
  validator: Validator | ValidatorFn
): ValidatorFn | AsyncValidatorFn {
  const fn = (validator as Validator).validate.bind(validator);
  if (typeof fn === 'function') {
    return (ctrl: AbstractControl) => fn(ctrl);
  } else {
    return <ValidatorFn | AsyncValidatorFn> validator;
  }
}


export function composeValidators(
  validators: ValidatorArray
): AsyncValidatorFn | ValidatorFn {
  if (validators == null || validators.length === 0) {
    return null;
  }
  return Validators.compose(validators.map(normalizeValidator));
}


export function validate(
  validators: ValidatorArray,
  asyncValidators: AsyncValidatorArray
) {

  return (control: AbstractControl) => {
    const synchronousValid = () => composeValidators(validators)(control);

    if (asyncValidators) {
      const asyncValidator = composeValidators(asyncValidators);

      return asyncValidator(control).map(v => {
        const secondary = synchronousValid();
        if (secondary || v) { // compose async and sync validator results
          return Object.assign({}, secondary, v);
        }
      });
    }

    if (validators) {
      return of(synchronousValid());
    }

    return of(null);
  };

}


export function message(
  validator: ValidationResult,
  key: string
): string {

  switch (key) {
    case 'required':
      return 'Please enter a value';
    case 'pattern':
      return 'Value does not match required pattern';
    case 'minlength':
      return 'Value must be N characters';
    case 'maxlength':
      return 'Value must be a maximum of N characters';
  }

  switch (typeof validator[key]) {
    case 'string':
      return <string> validator[key];
    default:
      return `Validation failed: ${key}`;
  }

}
