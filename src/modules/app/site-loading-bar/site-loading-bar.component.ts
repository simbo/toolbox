import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Styles } from '../../shared/styles.interface';
import { ClassList } from '../../shared/class-list.interface';
import { AppRoutingService } from '../app-routing/app-routing.service';
import { SiteLoadingBarService } from './site-loading-bar.service';

@Component({
  selector: 'c-site-loading-bar',
  templateUrl: './site-loading-bar.component.pug'
})
export class SiteLoadingBarComponent implements OnInit, OnDestroy {

  public loadingState: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public siteLoadingBarService: SiteLoadingBarService,
    public appRoutingService: AppRoutingService
  ) { }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.siteLoadingBarService.loadingState.subscribe((state) => {
        this.loadingState = state;
      }),
      this.appRoutingService.loadStart.subscribe(() => {
        this.siteLoadingBarService.startLoading();
      }),
      this.appRoutingService.loadEnd.subscribe(() => {
        this.siteLoadingBarService.stopLoading();
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public get barIsVisible(): boolean {
    return this.loadingState;
  }

}
