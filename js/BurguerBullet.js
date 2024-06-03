class BurguerBullet extends Bullet {
  constructor(ctx, x, y, width, height, speed) {
    const img = new Image();
    img.src = "imgs/bullets/burguer.png";

    super(ctx, x, y, width, height, speed, img);
  }
}
