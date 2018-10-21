export interface MenuItem {
  label: string;
  link: string;
}

export const menuItems: MenuItem[] = [
  // {
  //   label: 'Home',
  //   link: '/'
  // },
  {
    label: 'Random String',
    link: '/strings/random-string'
  },
  {
    label: 'Hash Generator',
    link: '/strings/hash-generator'
  },
  {
    label: 'Color Namer',
    link: '/colors/color-namer'
  }
];
