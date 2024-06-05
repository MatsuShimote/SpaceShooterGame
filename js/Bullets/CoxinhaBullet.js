import Bullet from "./Bullet.js";

class CoxinhaBullet extends Bullet {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/bullets/coxinha.png";
    super(ctx, x, y, width, height, speed, img);
  }
}

export default CoxinhaBullet;
