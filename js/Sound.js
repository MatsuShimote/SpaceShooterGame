class Sound {
  #kill;
  #healthKit;
  #fire;
  #gameOver;
  #bg;

  constructor() {
    this.#healthKit = new Audio("audio/healthKit.mp3");
    this.#kill = new Audio("audio/kill.mp3");
    this.#fire = new Audio("audio/fire.mp3");
    this.#gameOver = new Audio("audio/gameOver.mp3");
    this.#bg = new Audio("audio/background.m4a");
  }

  startLoop() {
    this.#fire.play();
    this.#fire.loop = true;

    this.#bg.play();
    this.#bg.loop = true;

    this.#bg.volume = 0.5;
  }

  stopLoop() {
    this.#fire.pause();
    this.#bg.pause();
  }

  stopLoop() {
    this.#fire.pause();
    this.#bg.pause();
  }

  kill() {
    this.#kill.play();
  }

  healthKit() {
    this.#healthKit.play();
  }

  gameOver() {
    this.#gameOver.play();
  }
}

export default Sound;
