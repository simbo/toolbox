import { Component, Prop, Provide, Model, Vue } from 'vue-property-decorator';

@Component({
  template: require('./textfield.component.pug')
})
export class TextfieldComponent extends Vue {
  public static tagName = 'textfield';

  @Model('input')
  public value: string;

  @Prop()
  public id: string;

  @Prop()
  public label: string;

  @Prop()
  public placeholder: string;

  @Prop()
  public readonly: boolean | 'readonly';

  @Prop()
  public autocomplete: boolean | 'on' | 'off';

  @Prop()
  public autocorrect: boolean | 'on' | 'off';

  @Prop()
  public autocapitalize: boolean | 'on' | 'off';

  @Prop()
  public multiline: boolean;

  @Prop()
  public filter: (val: string) => string;

  @Provide()
  public isFocused: boolean = false;

  @Provide()
  public get listeners(): {[key: string]: (event: Event) => void} {
    return {
      ...this.$listeners,
      input: (event) => {
        let value = event.target['value'];
        if (typeof this.filter === 'function') {
          value = this.filter(value);
          this.$refs.input['value'] = value;
        }
        this.$emit('input', value);
      },
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
