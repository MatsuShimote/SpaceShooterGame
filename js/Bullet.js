class Bullet {
  constructor(ctx, x, y, width, height, speed, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.img = img;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  update() {
    this.y -= this.speed;
    this.draw();
  }
}
