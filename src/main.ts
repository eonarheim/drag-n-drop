import { Engine, vec } from "excalibur";
import { Icon } from "./icon";
import { loader } from "./resources";
import { Slot } from "./slot";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 600});
    }

    initialize() {
      const slot = new Slot(vec(300, 300));
      this.add(slot);


      const icon = new Icon([slot]);
      this.add(icon);

      const otherIcon = new Icon([slot]);
      this.add(otherIcon);

      


      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();