class Health {
  #health;

  constructor() {
    this.#health = 100;
  }

  get value() {
    return this.#health;
  }

  hit(enemyHit) {
    this.#health -= enemyHit;
  }

  bump() {
    this.#health += 20;
  }

  isDead() {
    return this.#health === 0;
  }
}

export default Health;
