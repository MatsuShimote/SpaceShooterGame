class Level {
  #level;

  constructor() {
    this.#level = 0;
  }

  getLevel() {
    return this.#level;
  }

  toNextLevel() {
    this.#level++;
  }

  isWin() {
    return this.#level === 13;
  }

  getCeilScore() {
    return this.#level * 50;
  }

  getEnemiesIntervalInMs() {
    return 1234 - this.#level * 100;
  }
}

export default Level;
