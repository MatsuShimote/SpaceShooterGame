import Keyboard from "./Keyboard.js";

const img = new Image();
img.src = "imgs/hero.png";

class Player {
  static height = 32;
  static width = 32;

  constructor(ctx) {
    this.ctx = ctx;
    this.x = Keyboard.x;
    this.y = Keyboard.y;

    this.height = Player.height;
    this.width = Player.width;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(
      img,
      Keyboard.x - Player.width,
      Keyboard.y - Player.height
    );
  }

  update() {
    this.draw();
  }
}

export default Player;
