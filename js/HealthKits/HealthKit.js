const img = new Image();

img.src = "/imgs/healthkit.png";

class HealthKit {
  static width = 32;
  static height = 32;

  constructor(ctx, x, y, speed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.width = HealthKit.width;
    this.height = HealthKit.height;
  }

  /**
   * Atualiza a posição do health-kit
   */
  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(img, this.x, this.y);
  }

  update() {
    this.y += this.speed;
    this.draw();
  }
}

export default HealthKit;
