// [WIP]: DON'T TOUCH THIS SHIT!

import Bullets from "./Bullets/Bullets";
import Enemies from "./Enemies/Enemies";
import Health from "./Health";
import HealthKits from "./HealthKits/HealthKits";
import Hud from "./Hud";
import Level from "./Level";
import Player from "./Player";
import Score from "./Score";
import Sound from "./Sound";

let ctx;
let canvas;

function createEnemyFactory(enemies) {
  let intervalId;

  return (interval) => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      enemies.create();
    }, interval);
  };
}

class Menu {
  #el;

  constructor() {
    this.#el = document.querySelector(".menu");
  }

  open() {
    this.#el.style.display = "flex";
  }

  close() {
    this.#el.style.display = "none";
  }
}

const menu = new Menu();
const game = new Game();

document.addEventListener("click", () => {
  menu.close();
  // game.play();
});

class Game {
  #score;
  #level;
  #health;
  #enemies;
  #healthKits;
  #bullets;
  #hud;
  #player;
  #sound;

  constructor() {
    this.reset();
  }

  play() {}

  animate() {
    setInterval(() => {
      this.#healthKits.create();
    }, 15000);

    setInterval(() => {
      this.#bullets.create();
    }, 200);
  }

  pause() {
    this.#sound.stopLoop();
  }

  reset() {
    menu.open();
    this.#score = new Score();
    this.#level = new Level();
    this.#health = new Health();
    this.#enemies = new Enemies();
    this.#healthKits = new HealthKits(ctx);
    this.#bullets = new Bullets(ctx);
    this.#hud = new Hud(ctx, canvas.width - 100);
    this.#player = new Player(ctx);
    this.#sound = new Sound();
  }

  // TODO: create this once
  // createEnemy() {
  //   return createEnemyFactory(this.#enemies);
  // }
}

// export default Game;
