import Lightning from "@lightningjs/core";
import Background from "./Background";

interface BannerTemplateSpec extends Lightning.Component.TemplateSpec {
  title: string;
  backgroundColour: number;

  Background: typeof Background;
  Title: object;
}

class Banner
  extends Lightning.Component<BannerTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<BannerTemplateSpec>
{
  static override _template(): Lightning.Component.Template<BannerTemplateSpec> {
    return {
      w: 1920,
      h: 540,
      flex: {
        alignItems: "center",
        justifyContent: "center",
      },
      Background: {
        // Lightning's Type system isn't completely developed yet. For this reason, we need to
        // expect an error on the following line.
        // @ts-expect-error
        flexItem: false,

        type: Background,
      },
      Title: {
        text: {
          textColor: 0xffffffff,
          fontSize: 84,
        },
      },
    };
  }

  set backgroundColour(v: number) {
    this.tag("Background")?.patch({
      colour: v,
    });
  }

  private _title = "";

  get title() {
    return this._title;
  }

  set title(v: string) {
    this._title = v;
    this.tag("Title")?.patch({
      text: {
        text: v,
      },
    });
  }
}

export default Banner;
