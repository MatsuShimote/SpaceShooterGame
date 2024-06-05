class HealthKit {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(healthKit.img, this.x, this.y);
  }

  update() {
    this.y += this.speed;
    this.draw();
  }
}

export default HealthKit;
