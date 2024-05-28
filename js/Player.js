class Player {
  constructor(ctx, x, y, width, height, keyboard) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.keyboard = keyboard;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(
      player.img,
      keyboard.x - player.width,
      keyboard.y - player.height
    );
  }

  update() {
    this.draw();
  }
}
