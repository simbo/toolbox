import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClassList } from '../shared/class-list.interface';
import { AppRoutingService } from './app-routing/app-routing.service';
import { ThemesService } from './themes/themes.service';

export const SITE_TITLE = 'Toolbox';
export const SITE_TITLE_SEPARATOR = '•';

@Component({
  selector: 'c-app-root',
  templateUrl: './app.component.pug'
})
export class AppComponent implements OnInit, OnDestroy {

  public routeData: Data = {};

  private subscriptions: Subscription[] = [];

  constructor(
    public appRoutingService: AppRoutingService,
    public titleService: Title,
    public themesService: ThemesService
  ) {
    this.setSiteTitle();
  }

  public get displaySiteMenu(): boolean {
    return this.routeData.displaySiteMenu !== false;
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.appRoutingService.activatedRouteData.subscribe(routeData => {
        this.routeData = routeData;
        this.setSiteTitle();
      }),
      this.themesService.themeClassList.subscribe(
        classList => this.setHtmlClassList(classList)
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public setSiteTitle(title: string = this.routeData.title): void {
    const titleSeparator = ` ${SITE_TITLE_SEPARATOR} `;
    const titleParts = [SITE_TITLE];
    if (typeof title === 'string' && title.length) {
      titleParts.unshift(title);
    }
    this.titleService.setTitle(
      titleParts.join(titleSeparator)
    );
  }

  public setHtmlClassList(classList: ClassList): void {
    Object.entries(classList).forEach(
      ([className, classState]) => {
        const fn = classState ? 'add' : 'remove';
        document.documentElement.classList[fn](className);
      }
    );
  }

}
