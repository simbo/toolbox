import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c-spoiler',
  templateUrl: './spoiler.component.pug'
})
export class SpoilerComponent {

  @Input() public label: string = 'Spoiler';

  @Output('change') public changeEmitter = new EventEmitter<boolean>();

  private _openedLabel: string;
  private _closedLabel: string;

  private _opened: boolean = false;

  public get closedLabel(): string {
    return this._closedLabel || this.label;
  }

  @Input() public set closedLabel(value: string) {
    this._closedLabel = value;
  }

  public get openedLabel(): string {
    return this._openedLabel || this.label;
  }

  @Input() public set openedLabel(value: string) {
    this._openedLabel = value;
  }

  constructor() {}

  public get opened(): boolean {
    return this._opened;
  }

  public set opened(value: boolean) {
    this._opened = value;
    this.changeEmitter.emit(value);
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
  }

  public toggle(): void {
    this.opened = !this.opened;
  }

}
