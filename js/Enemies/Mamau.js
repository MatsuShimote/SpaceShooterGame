import Enemy from "./Enemy.js";

const img = new Image();
img.src = "/imgs/enemies/mamau.png";

class Mamau extends Enemy {
  constructor(ctx, x, y, speed) {
    super(ctx, x, y, speed, img);
  }
}

export default Mamau;
