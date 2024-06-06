import Player from "./Player.js";
import Draw from "./Draw.js";
import Keyboard from "./Keyboard.js";
import { collision } from "./utils.js";
import Sound from "./Sound.js";
import Hud from "./Hud.js";

const sound = new Sound();

window.onerror = () => {
  return true;
};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 750;
canvas.height = window.innerHeight;

ctx.font = "1em Arial";

const keyboard = new Keyboard(0 + Player.width, canvas.width - Player.width);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    keyboard.toRight();
  }

  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    keyboard.toLeft();
  }
});

function startGame() {
  let score = 0;
  let health = 100;
  let level = 0;

  let enemyIntervalId = null; // Store the interval ID
  let constScore = 5;
  let constInterval = 1234;

  sound.startLoop();

  const enemies = [];
  const healthKits = [];
  const bullets = [];

  const hud = new Hud(ctx, canvas.width - 100);
  const player = new Player(ctx);

  function createEnemyInterval(interval) {
    clearInterval(enemyIntervalId); // Clear any existing interval
    enemyIntervalId = setInterval(() => {
      enemies.push(Draw.enemy(ctx));
    }, interval); // Adjust the interval time as needed
  }

  createEnemyInterval(constInterval);

  setInterval(() => {
    healthKits.push(Draw.healthKit(ctx));
  }, 15000);

  setInterval(() => {
    bullets.push(Draw.bullet(ctx));
  }, 200);

  function animate() {
    requestAnimationFrame(animate);

    hud.update({ health, level, score });
    player.update();

    if (score >= constScore && enemyIntervalId && constInterval > 0) {
      constInterval = constInterval - 100;
      clearInterval(enemyIntervalId);
      createEnemyInterval(constInterval);
      constScore += 5;
      level++;
    }

    for (let i = 0; i < bullets.length; i++) {
      bullets[i].update();

      if (bullets[i].y < 0) {
        bullets.splice(i, 1);
      }
    }

    for (let k = 0; k < enemies.length; k++) {
      enemies[k].update();

      if (enemies[k].y > innerHeight) {
        enemies.splice(k, 1);
        health -= 5;

        if (health <= 0) {
          sound.gameOver();
          alert("You DIED!\nYour score was " + score);
          startGame();
        }
      }
    }

    for (let j = enemies.length - 1; j >= 0; j--) {
      for (let l = bullets.length - 1; l >= 0; l--) {
        if (collision(enemies[j], bullets[l])) {
          score += enemies[j].scorePoint();

          enemies.splice(j, 1);
          bullets.splice(l, 1);

          sound.kill();
        }
      }
    }

    for (let h = 0; h < healthKits.length; h++) {
      healthKits[h].update();
    }

    for (let hh = healthKits.length - 1; hh >= 0; hh--) {
      for (let hhh = bullets.length - 1; hhh >= 0; hhh--) {
        if (collision(healthKits[hh], bullets[hhh])) {
          healthKits.splice(hh, 1);
          bullets.splice(hhh, 1);
          sound.healthKit();
          health += 10;
        }
      }
    }
  }

  animate();
}

document.addEventListener(
  "click",
  () => {
    const menu = document.querySelector(".menu");

    menu.remove();
    startGame();
  },
  false
);
