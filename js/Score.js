class Score {
  #score;

  constructor() {
    this.#score = 0;
  }

  get value() {
    return this.#score;
  }

  add(value) {
    this.#score += value;
  }
}

export default Score;
