import {ControlValueAccessor} from '@angular/forms';

export class ControlValueAccessorBase<T> implements ControlValueAccessor {

  private onChangeCallbacks = new Array<(value: T) => void>();
  private onTouchedCallbacks = new Array<() => void>();

  private _value: T;

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    if (this._value !== value) {
      this._value = value;
      this.onChangeCallbacks.forEach(fn => fn(value));
    }
  }

  touch() {
    this.onTouchedCallbacks.forEach(fn => fn());
  }

  writeValue(value: T) {
    this._value = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.onChangeCallbacks.push(fn);
  }

  registerOnTouched(fn: () => void) {
    this.onChangeCallbacks.push(fn);
  }

}
