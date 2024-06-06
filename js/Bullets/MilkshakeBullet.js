import Bullet from "./Bullet.js";

const img = new Image();

img.src = "/imgs/bullets/milkshake.png";

class MilkshakeBullet extends Bullet {
  constructor(ctx, x, y) {
    super(ctx, x, y, img);
  }
}

export default MilkshakeBullet;
