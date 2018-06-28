import Vue, { VueConstructor } from 'vue';
import { TextfieldComponent } from './textfield/textfield.component';
import { ReadonlyTextfieldComponent } from './readonly-textfield/readonly-textfield.component';
import { SelectorComponent } from './selector/selector.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';

export const componentsCollection = [
  TextfieldComponent,
  ReadonlyTextfieldComponent,
  SelectorComponent,
  SiteMenuComponent
];

export const components = {
  install(vue: VueConstructor<Vue>) {
    componentsCollection.forEach(
      component => vue.component(component.tagName, component)
    );
  }
};
