import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ClassList } from '../../shared/class-list.interface';
import { PreferencesService } from '../preferences/preferences.service';
import { PreferenceKey } from '../preferences/preferences.interface';
import { Theme } from './theme.interface';
import { themes, ThemeKey } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private _themes = new Map<ThemeKey, Theme>(
    themes.map<[ThemeKey, Theme]>(theme => ([theme.slug, theme]))
  );

  private _theme: BehaviorSubject<Theme>;

  constructor(
    private preferencesService: PreferencesService
  ) {
    this.preferencesService.preferences.pipe(
        map(preferences => preferences[PreferenceKey.Theme])
      )
      .subscribe(themeKey => {
        const theme = this._themes.get(themeKey);
        if (this._theme) {
          this._theme.next(theme);
        } else {
          this._theme = new BehaviorSubject<Theme>(theme);
        }
      });
  }

  public get theme(): Observable<Theme> {
    return this._theme.asObservable();
  }

  public get themes(): Theme[] {
    return Array.from(this._themes.values());
  }

  public get themeClassList(): Observable<ClassList> {
    return this.theme.pipe(
      map(currentTheme => {
        return this.themes.reduce((classList, theme) => ({
          ...classList,
          [`theme--${theme.slug}`]: currentTheme.slug === theme.slug
        }), {});
      })
    );
  }

  public setTheme(slug: ThemeKey): void {
    const theme = this._themes.get(slug);
    if (theme) {
      this._theme.next(theme);
      this.preferencesService.set(PreferenceKey.Theme, theme.slug);
    }
  }

  public getTheme(slug: ThemeKey = null): Theme {
    if (slug === null) {
      return this._theme.getValue();
    }
    return this._themes.get(slug);
  }

}
