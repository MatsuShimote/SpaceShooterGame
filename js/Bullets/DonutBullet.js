import Bullet from "./Bullet.js";

class DonutBullet extends Bullet {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/bullets/donut.png";
    super(ctx, x, y, width, height, speed, img);
  }
}

export default DonutBullet;
