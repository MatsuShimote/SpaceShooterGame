import Enemy from "./Enemy.js";

class Mamau extends Enemy {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/enemies/mamau.png";

    super(ctx, x, y, width, height, speed, img);
  }
}

export default Mamau;
