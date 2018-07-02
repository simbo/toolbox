import { Component, Input, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.pug',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewChecked {

  @Input() public name: string = 'unicorn';

  @Input() public svgFilter: string;

  private symbolChecked: boolean;

  public get svgSymbolLink(): string {
    return `#icon-symbol--${this.name}`;
  }

  public get svgFilterUrl(): string|false {
    return this.svgFilter ? `url(#${this.svgFilter})` : false;
  }

  constructor(
    private elementRef: ElementRef
  ) {}

  public ngAfterViewChecked(): void {
    if (this.symbolChecked === undefined) {
      this.symbolChecked = (
        this.elementRef.nativeElement as HTMLElement
      ).querySelector(this.svgSymbolLink) ? true : false;
      if (!this.symbolChecked) {
        throw new Error(`'${this.name}' is not a valid icon name`);
      }
    }
  }

}
