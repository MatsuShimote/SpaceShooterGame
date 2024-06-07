import Enemy from "./Enemy.js";

const img = new Image();
img.src = "/imgs/enemies/bodybuilder.png";

class Xuliao extends Enemy {
  constructor(ctx, x, y, speed) {
    super(ctx, x, y, speed, img);
  }

  scorePoint(){
    return 2;
  }

  dealDamage() {
    return 12;
  }
}

export default Xuliao;
