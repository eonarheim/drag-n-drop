import { Actor, CollisionType, Color, Engine, Vector, vec } from "excalibur";
import { Resources } from "./resources";
import { Slot } from "./slot";

export class Icon extends Actor {
  preSelectedPos: Vector;
  selected = false;
  constructor(private slots: Slot[]) {
    super({
      pos: vec(150, 150),
      radius: 50,
      collisionType: CollisionType.Active
    });
    this.preSelectedPos = this.pos.clone();
  }

  onInitialize(engine: Engine) {
    this.graphics.add(Resources.Sword.toSprite());

    this.on('pointerdown', evt => {
      this.selected = true;
      this.preSelectedPos = this.pos.clone();
    });

    this.on('pointerup', evt => {
      this.selected = false;
      for (const slot of this.slots) {
        if (slot.collider.get().contains(evt.worldPos)) {
          this.pos = slot.pos.clone();
        }
      }
    })

    engine.input.pointers.primary.on('move', (evt) => {
      if (this.selected) {
        this.pos = evt.worldPos;
      }
    });
  }
}
