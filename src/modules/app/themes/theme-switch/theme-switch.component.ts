import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SelectChoices } from '../../../controls/select/select.component';
import { ThemesService } from '../themes.service';
import { ThemeKey } from '../themes';


@Component({
  selector: 'c-theme-switch',
  templateUrl: './theme-switch.component.pug'
})
export class ThemeSwitchComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  public themeChoices: SelectChoices = this.themesService.themes
    .map(({ name, slug}) => ({
      label: name,
      value: slug
    }));

  public themeChoice: string = this.themesService.getTheme().slug;

  constructor(
    public themesService: ThemesService
  ) {}

  public ngOnInit() {
    this.subscriptions.push(
      this.themesService.theme.subscribe((theme) => {
        this.themeChoice = theme.slug;
      })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public onChange(event: Event): void {
    this.themesService.setTheme(this.themeChoice as ThemeKey);
  }

}
