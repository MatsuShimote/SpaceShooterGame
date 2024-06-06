import Bullet from "./Bullet.js";

const img = new Image();

img.src = "/imgs/bullets/pizza.png";

class PizzaBullet extends Bullet {
  constructor(ctx, x, y) {
    super(ctx, x, y, img);
  }
}

export default PizzaBullet;
