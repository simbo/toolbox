import { ControlValueAccessor, NgModel } from '@angular/forms';
import { ViewChild, Input } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

export abstract class ControlValueAccessorBase<T> implements ControlValueAccessor {

  @ViewChild(NgModel) public model: NgModel;

  public rxModelSubscription: Subscription;

  @Input() public set rxModel(model: BehaviorSubject<T>|Observable<T>) {
    if (!this.rxModelSubscription) {
      this.rxModelSubscription = model.subscribe((value) => {
        this.value = value;
      });
      this.registerOnChange(value => {
        if (model
          && typeof (model as BehaviorSubject<T>).getValue === 'function'
          && (model as BehaviorSubject<T>).getValue() !== value
        ) {
          (model as BehaviorSubject<T>).next(value);
        }
      });
    }
  }

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
