import { ThemeKey } from '../themes/themes';

export enum PreferenceKey {
  Theme = 'theme'
}

export interface Preferences {
  [PreferenceKey.Theme]: ThemeKey;
}

