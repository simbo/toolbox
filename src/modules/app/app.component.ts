import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClassList } from '../shared/class-list.interface';
import { AppRoutingService } from './app-routing/app-routing.service';
import { ThemesService } from './themes/themes.service';

export const SITE_BASE_TITLE = 'Toolbox';
export const SITE_TITLE_SEPARATOR = '•';

@Component({
  selector: 'c-app-root',
  templateUrl: './app.component.pug'
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions = new Set<Subscription>();

  constructor(
    public appRoutingService: AppRoutingService,
    public siteTitleService: Title,
    public themesService: ThemesService
  ) {
    this.setSiteTitle();
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.appRoutingService.activatedRouteData.subscribe(
        (routeData: Data) =>
          this.setSiteTitle(routeData.title || '')
      )
    );
    this.subscriptions.add(
      this.themesService.themeClassList.subscribe(
        classList => this.setHtmlClassList(classList)
      )
    );
  }

  public ngOnDestroy(): void {
    Array.from(this.subscriptions).forEach(
      subscription => subscription.unsubscribe()
    );
  }

  public setSiteTitle(title: string = ''): void {
    const titleSeparator = ` ${SITE_TITLE_SEPARATOR} `;
    const titleParts = [SITE_BASE_TITLE];
    if (typeof title === 'string' && title.length) {
      titleParts.unshift(title);
    }
    this.siteTitleService.setTitle(
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
