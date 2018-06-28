import { Component, Vue, Provide } from 'vue-property-decorator';
import * as Color from 'color';
import { rgb } from 'color';
import { namedColors, NamedColor } from '../../modules/colors/named-colors';
import { getColorDistance } from '../../modules/colors/color-distance';
import { randomColor } from '../../modules/colors/random-color';

@Component({
  template: require('./color-namer-page.component.pug')
})
export class ColorNamerPageComponent extends Vue {

  @Provide()
  public colorNames: {[key: string]: string} = {
    '': '#000',
    ...namedColors.reduce((colors, color) => ({[color.name]: color.hex}), {})
  };

  @Provide()
  public colorNameSelected: string = '';

  @Provide()
  public hexInput: string = '';

  @Provide()
  public get hex(): string {
    return this.hexInput
      .replace(/^#?([a-f0-9]{6}|[a-f0-9]{3})?.*$/ig, (match, group) => {
        return group ? `#${group.toLowerCase()}` : '#000';
      });
  }

  @Provide()
  public get color(): Color {
    return rgb(this.hex);
  }

  @Provide()
  public get rgb(): number[] {
    return this.color.array();
  }

  @Provide()
  public get closestColors(): NamedColor[] {
    return namedColors.sort((colorA, colorB) => {
      const distanceA = getColorDistance(colorA.rgb, this.rgb);
      const distanceB = getColorDistance(colorB.rgb, this.rgb);
      colorA.distance = distanceA;
      colorB.distance = distanceB;
      if (distanceA > distanceB) return 1;
      if (distanceA < distanceB) return -1;
      if (colorA.name > colorB.name) return 1;
      if (colorA.name < colorB.name) return -1;
      return 0;
    });
  }

  public mounted() {
    this.setRandomColor();
  }

  public setRandomColor() {
    this.hexInput = randomColor().hex();
  }

}
