import { Component, Input, ViewChild, Optional, Inject, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
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

  @Input() public placeholder: string = '';
  @Input() public multiline: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public autocorrect: boolean = false;
  @Input() public autocomplete: boolean = false;
  @Input() public autocapitalize: boolean = false;
  @Input() public autosize: boolean = false;
  @Input() public size: string = 'auto';

  @ViewChild('textfield') public textfieldRef: ElementRef;
  public textfieldElement: HTMLElement;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
    this.registerOnChange(() => this.autosizeUpdate());
  }

  public get classList(): ClassList {
    return {
      [`is-size--${this.size}`]: true,
      'has-autosize': this.hasAutosizeSupport
    };
  }

  public get hasAutosizeSupport(): boolean {
    return this.multiline && this.autosize && !!this.textfieldElement;
  }

  public ngOnInit(): void {
    if (!this.id || !this.id.length) {
      this.id = `textfield_${shortid.generate()}`;
    }
  }

  public ngAfterViewInit(): void {
    this.textfieldElement = this.textfieldRef.nativeElement;
    if (this.hasAutosizeSupport) {
      setTimeout(() => autosize(this.textfieldElement), 0);
    }
  }

  public autosizeUpdate(): void {
    if (this.hasAutosizeSupport) {
      setTimeout(() => autosize.update(this.textfieldElement), 0);
    }
  }

}
