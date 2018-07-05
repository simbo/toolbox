import { ThemeKey } from './themes';

export interface Theme {
  name: string;
  slug: ThemeKey;
  className?: string;
}
