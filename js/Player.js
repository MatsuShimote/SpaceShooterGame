class Player {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(
      player.img,
      mouse.x - player.width,
      mouse.y - player.height
    );
  }

  update() {
    this.draw();
  }
}
