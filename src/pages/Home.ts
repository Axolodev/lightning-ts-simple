import { Lightning } from "@lightningjs/sdk";
import { Banner } from "../components";

interface HomeSpecs extends Lightning.Component.TemplateSpec {
  Banner1: typeof Banner;
  Banner2: typeof Banner;
}

class Home
  extends Lightning.Component<HomeSpecs>
  implements Lightning.Component.ImplementTemplateSpec<HomeSpecs>
{
  static override _template(): Lightning.Component.Template<HomeSpecs> {
    return {
      w: 1920,

      flex: {
        direction: "column",
      },

      Banner1: {
        type: Banner,
        backgroundColour: 0xff003300,
        title: "Hello,",
      },
      Banner2: {
        type: Banner,
        backgroundColour: 0xff220077,
        title: "World!",
      },
    };
  }
}

export default Home;
