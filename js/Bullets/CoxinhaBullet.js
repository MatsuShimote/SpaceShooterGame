import Bullet from "./Bullet.js";

const img = new Image();

img.src = "/imgs/bullets/coxinha.png";

class CoxinhaBullet extends Bullet {
  constructor(ctx, x, y) {
    super(ctx, x, y, img);
  }
}

export default CoxinhaBullet;
