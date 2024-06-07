class Health {
  #health;

  constructor() {
    this.#health = 100;
  }

  get value() {
    return this.#health;
  }

  hit(enemyHit) {
    if(this.#health < enemyHit) {
      this.#health = 0;
    }else {
      this.#health -= enemyHit;
    }
  }

  bump() {
    this.#health += 20;
  }

  isDead() {
    return this.#health === 0;
  }
}

export default Health;
