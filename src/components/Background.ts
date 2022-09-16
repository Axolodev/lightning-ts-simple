import Lightning from "@lightningjs/core";

interface BackgroundTemplateSpec extends Lightning.Component.TemplateSpec {
  colour: number;
}

class Background
  extends Lightning.Component<BackgroundTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<BackgroundTemplateSpec>
{
  static override _template(): Lightning.Component.Template<BackgroundTemplateSpec> {
    return {
      w: (w: number) => w,
      h: (h: number) => h,
      rect: true,
      color: 0xff000000,
    };
  }

  private _colour = 0xff000000;

  get colour() {
    return this._colour;
  }

  set colour(colour: number) {
    this._colour = colour;
    this.patch({
      color: colour,
    });
  }
}

export default Background;
