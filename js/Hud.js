class Hud {
  constructor(ctx, width) {
    this.width = width;
    this.ctx = ctx;
  }

  update({ health, score, level }) {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = "Black";
    this.ctx.fillText("Health: " + health, 5, 20);
    this.ctx.fillText("Score: " + score, this.width, 20);
    this.ctx.fillText("Level: " + level, this.width, 50);
  }
}

export default Hud;
