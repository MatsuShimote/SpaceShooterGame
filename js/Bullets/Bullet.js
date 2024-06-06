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

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(this.img, this.x, this.y, Bullet.width, Bullet.height);
  }

  update() {
    this.y -= this.speed;
    this.draw();
  }
}

const b = new Bullet();

export default Bullet;
