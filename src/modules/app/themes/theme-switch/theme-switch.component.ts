import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SelectChoices } from '../../../controls/select/select.component';
import { ThemesService } from '../themes.service';


@Component({
  selector: 'c-theme-switch',
  templateUrl: './theme-switch.component.pug'
})
export class ThemeSwitchComponent implements OnInit {

  private subscriptions = new Set<Subscription>();

  public themeChoices: SelectChoices = this.themesService.themes
    .map(({ name, slug}) => ({
      label: name,
      value: slug
    }));

  public themeChoice: string = this.themesService.getTheme().slug;

  constructor(
    public themesService: ThemesService
  ) {}

  ngOnInit() {

    this.subscriptions.add(
      this.themesService.theme.subscribe((theme) => {
        this.themeChoice = theme.slug;
      })
    );

  }

}
