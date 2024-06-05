import Enemy from "./Enemy.js";

class Cariri extends Enemy {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/enemies/cariri.png";

    super(ctx, x, y, width, height, speed, img);
  }
}

export default Cariri;
