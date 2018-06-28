import { Component, Vue, Provide } from 'vue-property-decorator';
import { menuItems } from './site-menu-items';

@Component({
  template: require('./site-menu.component.pug')
})
export class SiteMenuComponent extends Vue {
  public static tagName = 'site-menu';

  @Provide()
  public menuItems = menuItems;

}
