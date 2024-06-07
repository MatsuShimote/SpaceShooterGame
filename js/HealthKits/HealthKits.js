import Enemy from "../Enemies/Enemy.js";
import HealthKit from "./HealthKit.js";

class HealthKits {
  #healthKits;
  #ctx;

  constructor(ctx) {
    this.#ctx = ctx;
    this.#healthKits = [];
  }

  get items() {
    return this.#healthKits;
  }

  get(index) {
    return this.#healthKits[index];
  }

  add(healthKit) {
    this.#healthKits.push(healthKit);
  }

  update() {
    for (const healthKit of this.#healthKits) {
      healthKit.update();
    }
  }

  remove(index) {
    this.#healthKits.splice(index, 1);
  }

  create() {
    const x = Math.random() * (750 - Enemy.width);
    const y = -Enemy.height;
    const speed = Math.random() * 2.6;

    this.#healthKits.push(new HealthKit(this.#ctx, x, y, speed));
  }
}

export default HealthKits;
