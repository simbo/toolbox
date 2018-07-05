import { Theme } from './theme.interface';

export enum ThemeKey {
  Dark = 'dark',
  Light = 'light'
}

export const themes: Theme[] = [
  {
    name: 'Dark',
    slug: ThemeKey.Dark
  },
  {
    name: 'Light',
    slug: ThemeKey.Light
  }
];
