import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createStore } from 'store/src/store-engine';
import * as StoreLocalStorage from 'store/storages/localStorage';
import * as StoreDefaultsPlugin from 'store/plugins/defaults';

import { Data } from '../../shared/data.interface';
import { observableStorePlugin } from './observable-store-plugin';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private defaultData: Data = {};

  private store: any;

  constructor() {
    this.store = createStore(
      [StoreLocalStorage],
      [StoreDefaultsPlugin, observableStorePlugin]
    );
  }

  public defaults(key: string, value: any): void {
    this.defaultData = {
      ...this.defaultData,
      [key]: value
    };
    this.store.defaults(this.defaultData);
  }

  public observe(key: string): Observable<any> {
    return this.store.observe(key);
  }

  public get(key: string): any {
    return this.store.get(key);
  }

  public set(key: string, value: any) {
    return this.store.set(key, value);
  }

}
