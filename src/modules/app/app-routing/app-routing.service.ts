import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppRoutingService {

  constructor(
    private router: Router,
    private activatedRouteStatus: ActivatedRoute
  ) {}

  public get navigationEnd(): Observable<NavigationEnd> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  public get activatedRoute(): Observable<ActivatedRoute> {
    return this.navigationEnd.pipe(
      map(() => {
        let route = this.activatedRouteStatus;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary')
    );
  }

  public get activatedRouteData(): Observable<Data> {
    return this.activatedRoute.pipe(
      mergeMap((route) => route.data)
    );
  }

}
