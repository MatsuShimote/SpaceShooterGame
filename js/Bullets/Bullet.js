class Bullet {
  static width = 30;
  static height = 30;

  constructor(ctx, x, y, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.img = img;
    this.speed = 10;

    this.width = Bullet.width;
    this.height = Bullet.height;
  }

  /**
   * Atualiza a posição da bala
   */
  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(this.img, this.x, this.y, Bullet.width, Bullet.height);
  }

  update() {
    this.y -= this.speed;
    this.draw();
  }

  /**
   * Verifica se a bala colidiu com algo
   */
  collide(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}

const b = new Bullet();

export default Bullet;
