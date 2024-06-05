import Enemy from "./Enemy.js";

class Xuliao extends Enemy {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/enemies/bodybuilder.png";

    super(ctx, x, y, width, height, speed, img);
  }
}

export default Xuliao;
