import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Theme } from './theme.interface';
import { themes } from './themes';
import { map } from 'rxjs/operators';

export const SITE_DEFAULT_THEME = 'dark';
import { ClassList } from '../../shared/class-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private _themes = new Map<string, Theme>(
    themes.map<[string, Theme]>(theme => ([theme.slug, theme]))
  );

  private _theme = new BehaviorSubject<Theme>(
    this._themes.get(SITE_DEFAULT_THEME)
  );

  constructor() {}

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

  public setTheme(slug: string): void {
    const theme = this._themes.get(slug);
    if (theme) {
      this._theme.next(theme);
    }
  }

  public getTheme(slug: string = null): Theme {
    if (slug === null) {
      return this._theme.getValue();
    }
    return this._themes.get(slug);
  }

}
