import { Component } from '@angular/core';

import { menuItems } from './site-menu-items';

@Component({
  selector: 'c-site-menu',
  templateUrl: './site-menu.component.pug',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent {

  public menuItems = menuItems;

}
