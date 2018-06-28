import { Component, Prop, Provide, Model, Vue } from 'vue-property-decorator';

@Component({
  template: require('./readonly-textfield.component.pug')
})
export class ReadonlyTextfieldComponent extends Vue {
  public static tagName = 'readonly-textfield';

  @Model('input')
  public value: string;

  @Prop()
  public id: string;

  @Prop()
  public label: string;

  @Prop()
  public placeholder: string;

  @Prop()
  public multiline: boolean;

  @Provide()
  public isFocused: boolean = false;

  @Provide()
  public get listeners(): {[key: string]: (event: Event) => void} {
    return {
      ...this.$listeners,
      focus: () => {
        this.isFocused = true;
      },
      blur: () => {
        this.isFocused = false;
      }
    };
  }

  @Provide()
  public get classNames(): {[key: string]: boolean} {
    return {
      'is-focused': this.isFocused
    };
  }

}
