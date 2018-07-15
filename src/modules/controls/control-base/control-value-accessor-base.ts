import {ControlValueAccessor} from '@angular/forms';

export class ControlValueAccessorBase<T> implements ControlValueAccessor {

  protected onChangeCallbacks = new Array<(value: T) => void>();
  protected onTouchedCallbacks = new Array<() => void>();

  protected _value: T;

  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    if (this._value !== value) {
      this._value = value;
      this.onChangeCallbacks.forEach(fn => fn(value));
    }
  }

  public touch() {
    this.onTouchedCallbacks.forEach(fn => fn());
  }

  public writeValue(value: T) {
    this._value = value;
  }

  public registerOnChange(fn: (value: T) => void) {
    this.onChangeCallbacks.push(fn);
  }

  public registerOnTouched(fn: () => void) {
    this.onChangeCallbacks.push(fn);
  }

}
