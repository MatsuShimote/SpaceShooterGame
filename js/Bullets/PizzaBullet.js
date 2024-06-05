import Bullet from "./Bullet.js";

class PizzaBullet extends Bullet {
  constructor(ctx, x, y, width, height, speed, img) {
    img = new Image();
    img.src = "imgs/bullets/pizza.png";
    super(ctx, x, y, width, height, speed, img);
  }
}

export default PizzaBullet;
