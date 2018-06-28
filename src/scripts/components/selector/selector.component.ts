import { Component, Model, Prop, Vue } from 'vue-property-decorator';

@Component({
  template: require('./selector.component.pug')
})
export class SelectorComponent extends Vue {
  public static tagName = 'selector';

  @Model('change')
  public value: string;

  @Prop({
    type: [Object, Array],
    required: true
  })
  public choices: {[key: string]: string} | string[];

  @Prop()
  public id: string;

  @Prop()
  public label: string;

  @Prop()
  public readonly: boolean | 'readonly';

}
