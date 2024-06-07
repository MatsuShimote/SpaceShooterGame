class Enemy {
  static width = 32;
  static height = 32;

  constructor(ctx, x, y, speed, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = img;

    this.width = Enemy.width;
    this.height = Enemy.height;
  }

  /**
   * Atualiza a posição do inimigo
   */
  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(this.img, this.x, this.y);
  }

  update() {
    this.y += this.speed;
    this.draw();
  }
}

export default Enemy;
