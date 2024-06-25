import { Actor, Color, Vector, vec } from "excalibur";

export class Slot extends Actor {
    constructor(pos: Vector) {
        super({
            pos,
            z: -1,
            width: 120,
            height: 120,
            color: Color.Black
        });
    }
}