import Enemy from "./Enemy.js";

const img = new Image();
img.src = "/imgs/enemies/cariri.png";

class Cariri extends Enemy {
  constructor(ctx, x, y, speed) {
    super(ctx, x, y, speed, img,);
  }


  scorePoint() {
    console.log("cariri");
    return 1;
  }
}

export default Cariri;
