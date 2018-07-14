import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteLoadingBarService {

  private _loadingState = new BehaviorSubject<boolean>(false);

  constructor() {}

  public get loadingState(): Observable<boolean> {
    return this._loadingState.asObservable();
  }

  public startLoading(): void {
    this.setLoadingState(true);
  }

  public stopLoading(): void {
    this.setLoadingState(false);
  }

  public setLoadingState(state: boolean): void {
    this._loadingState.next(state);
  }

  public getLoadingState(): boolean {
    return this._loadingState.getValue();
  }

}
