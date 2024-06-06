import Bullet from "./Bullet.js";

const img = new Image();

img.src = "/imgs/bullets/donut.png";

class DonutBullet extends Bullet {
  constructor(ctx, x, y) {
    super(ctx, x, y, img);
  }
}

export default DonutBullet;
