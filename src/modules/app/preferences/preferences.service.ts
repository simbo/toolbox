import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { StorageService } from '../storage/storage.service';
import { ThemeKey } from '../themes/themes';
import { PreferenceKey, Preferences } from './preferences.interface';

const PREFERENCES_STORAGE_KEY = 'preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public static defaults: Preferences = {
    [PreferenceKey.Theme]: ThemeKey.Dark
  };

  private _preferences: BehaviorSubject<Preferences>;

  constructor(
    public storageService: StorageService
  ) {
    this.storageService.defaults(
      PREFERENCES_STORAGE_KEY,
      PreferencesService.defaults
    );
    this._preferences = new BehaviorSubject<Preferences>(
      this.getData()
    );
    this.storageService.observe(PREFERENCES_STORAGE_KEY)
      .subscribe((preferences) => {
        this._preferences.next(preferences);
      });
    window.addEventListener('storage', (event) => {
      if (event.key === PREFERENCES_STORAGE_KEY) {
        this._preferences.next(this.getData());
      }
    });
  }

  public get preferences(): Observable<Preferences> {
    return this._preferences.asObservable();
  }

  public get(key: PreferenceKey): any {
    const preferences = this._preferences.getValue();
    return preferences[key];
  }

  public set(key: PreferenceKey, value: any): void {
    const preferences = this._preferences.getValue();
    preferences[key] = value;
    this.storageService.set(PREFERENCES_STORAGE_KEY, preferences);
  }

  private getData(): Preferences {
    return this.storageService.get(PREFERENCES_STORAGE_KEY);
  }

}
