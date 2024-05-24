class Enemy {
  constructor(ctx, x, y, width, height, speed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(enemy.img, this.x, this.y);
  }

  update() {
    this.y += this.speed;
    this.draw();
  }
}
