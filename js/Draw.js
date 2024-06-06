import HealthKit from "./HealthKit.js";
import Enemy from "./Enemies/Enemy.js";
import BurguerBullet from "./Bullets/BurguerBullet.js";
import CoxinhaBullet from "./Bullets/CoxinhaBullet.js";
import DonutBullet from "./Bullets/DonutBullet.js";
import MilkshakeBullet from "./Bullets/MilkshakeBullet.js";
import PizzaBullet from "./Bullets/PizzaBullet.js";
import { randomNumber } from "./utils.js";
import Bullet from "./Bullets/Bullet.js";
import Player from "./Player.js";
import Keyboard from "./Keyboard.js";
import Cariri from "./Enemies/Cariri.js";
import Mamau from "./Enemies/Mamau.js";
import Xuliao from "./Enemies/Xuliao.js";

class Draw {
  static bullet(ctx) {
    const number = randomNumber(1, 5);
    const x = Keyboard.x - Bullet.width / 2;
    const y = Keyboard.y - Player.height;

    switch (number) {
      case 1:
        return new BurguerBullet(ctx, x, y);
      case 2:
        return new CoxinhaBullet(ctx, x, y);
      case 3:
        return new DonutBullet(ctx, x, y);
      case 4:
        return new MilkshakeBullet(ctx, x, y);
      case 5:
        return new PizzaBullet(ctx, x, y);
      default:
        // do nothing
        break;
    }
  }

  static enemy(ctx) {
    const number = randomNumber(1, 3);

    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (750 - Enemy.width);
      const y = -Enemy.height;
      const speed = Math.random() * 2;

      switch (number) {
        case 1:
          return new Cariri(ctx, x, y, speed);
        case 2:
          return new Mamau(ctx, x, y, speed);
        case 3:
          return new Xuliao(ctx, x, y, speed);
        default:
          // do nothing
          break;
      }
    }
  }

  static healthKit(ctx) {
    const x = Math.random() * (750 - Enemy.width);
    const y = -Enemy.height;
    const speed = Math.random() * 2.6;
    return new HealthKit(ctx, x, y, speed);
  }
}

export default Draw;
