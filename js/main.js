import Player from "./Player.js";
import Draw from "./Draw.js";
import Keyboard from "./Keyboard.js";
import { collision } from "./utils.js";

const kitAudio = new Audio("audio/healthKit.mp3");
const killAudio = new Audio("audio/kill.mp3");
const fireAudio = new Audio("audio/fire.mp3");
const gameOver = new Audio("audio/gameOver.mp3");
// const bckgMusic = new Audio("audio/background.m4a");

window.onerror = () => {
  return true;
};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 750;
canvas.height = window.innerHeight;

ctx.font = "1em Arial";

const k = new Keyboard(0 + Player.width, canvas.width - Player.width);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    k.toRight();
  }

  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    k.toLeft();
  }
});

function startGame() {
  let score = 0;
  let health = 100;
  let level = 0;
  
  
  let enemyIntervalId = null; // Store the interval ID
  var constScore = 50;
  var constInterval = 1234;

  fireAudio.play();
  fireAudio.loop = true;

  const enemies = [];
  const healthKits = [];
  const bullets = [];

  const __player = new Player(ctx);
  

  function createEnemyInterval(interval) {
    clearInterval(enemyIntervalId); // Clear any existing interval
    enemyIntervalId = setInterval(() => {
      enemies.push(Draw.enemy(ctx));
    }, interval); // Adjust the interval time as needed
  }

  createEnemyInterval(constInterval);


  // setInterval(() => {
  //   enemies.push(Draw.enemy(ctx));
  // }, 1234);

  setInterval(() => {
    healthKits.push(Draw.healthKit(ctx));
  }, 15000);

  setInterval(() => {
    bullets.push(Draw.bullet(ctx));
  }, 200);

  function animate() {
    requestAnimationFrame(animate);

    ctx.beginPath();
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "Black";
    ctx.fillText("Health: " + health, 5, 20);
    ctx.fillText("Score: " + score, canvas.width - 100, 20);
    ctx.fillText("Level: " + level, canvas.width - 100, 50);

    __player.update();

    if (score >= constScore && enemyIntervalId && constInterval > 0) {
      constInterval = constInterval - 100;
      clearInterval(enemyIntervalId);
      createEnemyInterval(constInterval);
      constScore += 50;
      level ++;
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
          gameOver.play();
          alert("You DIED!\nYour score was " + score);
          startGame();
        }
      }
    }

    for (let j = enemies.length - 1; j >= 0; j--) {
      for (let l = bullets.length - 1; l >= 0; l--) {
        if (collision(enemies[j], bullets[l])) {
          killAudio.play();
          score += enemies[j].scorePoint();

          enemies.splice(j, 1);
          bullets.splice(l, 1);
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
          kitAudio.play();
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
