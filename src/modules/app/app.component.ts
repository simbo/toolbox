import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { AppRoutingService } from './app-routing/app-routing.service';

export const SITE_BASE_TITLE = 'Toolbox';
export const SITE_TITLE_SEPARATOR = '•';

@Component({
  selector: 'c-app-root',
  templateUrl: './app.component.pug'
})
export class AppComponent implements OnInit, OnDestroy {

  public siteBaseTitle = 'Toolbox';

  private subscriptions = new Set<Subscription>();

  constructor(
    public appRoutingService: AppRoutingService,
    public siteTitleService: Title
  ) {
    this.setSiteTitle();
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.appRoutingService.activatedRouteData
        .subscribe((routeData: {[key: string]: any}) => {
          if (routeData && routeData.title) {
            this.setSiteTitle(routeData.title);
          }
        })
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

}
