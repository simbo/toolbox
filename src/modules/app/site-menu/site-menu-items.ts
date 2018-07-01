export interface MenuItem {
  label: string;
  link: string;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Hash Generator',
    link: '/hash'
  },
  {
    label: 'Color Namer',
    link: '/color-namer'
  }
];
