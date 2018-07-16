import { Component, Input, ViewChild, Optional, Inject, OnInit, HostBinding, AfterViewInit, ElementRef } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import * as shortid from 'shortid';
import autosize from 'autosize';

import { ClassList } from '../../shared/class-list.interface';
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
  implements OnInit, AfterViewInit {

  @Input() public id: string;
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public multiline: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public autocorrect: boolean = false;
  @Input() public autocomplete: boolean = false;
  @Input() public autocapitalize: boolean = false;
  @Input() public autosize: boolean = false;
  @Input() public size: string = 'auto';

  @HostBinding('id') public hostId: string = '';

  @ViewChild(NgModel) public model: NgModel;

  @ViewChild('textfield') public textfieldRef: ElementRef;
  public textfieldElement: HTMLElement;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  public get classList(): ClassList {
    return {
      [`is-size--${this.size}`]: true,
      'has-autosize': this.hasAutosize
    };
  }

  public get hasAutosize(): boolean {
    return this.multiline && this.autosize && !!this.textfieldElement;
  }

  public ngOnInit(): void {
    if (!this.id || !this.id.length) {
      this.id = `textfield_${shortid.generate()}`;
    }
  }

  public ngAfterViewInit(): void {
    this.textfieldElement = this.textfieldRef.nativeElement;
    if (this.hasAutosize) {
      autosize(this.textfieldElement);
    }
  }

  public autosizeUpdate(): void {
    if (this.hasAutosize) {
      autosize.update(this.textfieldElement);
    }
  }

  public writeValue(value: string) {
    this._value = value;
    setTimeout(() => this.autosizeUpdate(), 0);
  }

}
