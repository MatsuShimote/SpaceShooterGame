import Enemy from "./Enemy.js";
import Cariri from "./Cariri.js";
import Xuliao from "./Xuliao.js";
import Mamau from "./Mamau.js";
import { randomNumber } from "../utils.js";

class Enemies {
  #enemies;
  #ctx;

  constructor(ctx) {
    this.#ctx = ctx;
    this.#enemies = [];
  }

  get items() {
    return this.#enemies;
  }

  add(enemy) {
    this.#enemies.push(enemy);
  }

  get(index) {
    return this.#enemies[index];
  }

  remove(index) {
    this.#enemies.splice(index, 1);
  }

  update() {
    for (const enemy of this.#enemies) {
      enemy.update();
    }
  }

  create() {
    const number = randomNumber(1, 3);

    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (750 - Enemy.width);
      const y = -Enemy.height;
      const speed = Math.random() * 2;

      let enemy;

      switch (number) {
        case 1:
          enemy = new Cariri(this.#ctx, x, y, speed);
          break;
        case 2:
          enemy = new Mamau(this.#ctx, x, y, speed);
          break;
        case 3:
          enemy = new Xuliao(this.#ctx, x, y, speed);
          break;
        default:
          // do nothing
          break;
      }

      this.#enemies.push(enemy);
    }
  }
}

export default Enemies;
