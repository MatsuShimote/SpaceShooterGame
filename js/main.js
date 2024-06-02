const keyboard = {
  x: window.innerWidth / 2,
  y: window.innerHeight - 33,
};

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight - 33,
};

const bullet = {
  width: 30,
  height: 30,
  speed: 10,
  img: new Image(),
};
const enemy = {
  width: 32,
  height: 32,
  img: new Image(),
};
const player = {
  height: 32,
  width: 32,
  img: new Image(),
};
const healthKit = {
  width: 32,
  height: 32,
  img: new Image(),
};

healthKit.img.src = "imgs/healthkit.png";
enemy.img.src = "imgs/bodybuilder.png";
player.img.src = "imgs/hero.png";

window.onerror = () => {
  return true;
};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 750;
canvas.height = window.innerHeight;

ctx.font = "1em Arial";

const playerMinX = 0;
const playerMaxX = canvas.width - player.width;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    keyboard.x += 20;
  } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
    keyboard.x -= 20;
  }

  if (keyboard.x < playerMinX) {
    keyboard.x = playerMinX;
  } else if (keyboard.x > playerMaxX) {
    keyboard.x = playerMaxX;
  }
});

function startGame() {
  let score = 0;
  let health = 100;

  const enemies = [];
  const healthKits = [];
  const bullets = [];

  const __player = new Player(
    ctx,
    mouse.x,
    mouse.y,
    player.width,
    player.height
  );

  setInterval(() => {
    enemies.push(Draw.enemy());
  }, 1234);

  setInterval(() => {
    healthKits.push(Draw.healthKit());
  }, 15000);

  setInterval(() => {
    bullets.push(Draw.bullet());
  }, 200);

  function animate() {
    requestAnimationFrame(animate);

    ctx.beginPath();
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "Black";
    ctx.fillText("Health: " + health, 5, 20);
    ctx.fillText("Score: " + score, window.innerWidth - 100, 20);

    __player.update();

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
          alert("You DIED!\nYour score was " + score);
          startGame();
        }
      }
    }

    for (let j = enemies.length - 1; j >= 0; j--) {
      for (let l = bullets.length - 1; l >= 0; l--) {
        if (collision(enemies[j], bullets[l])) {
          enemies.splice(j, 1);
          bullets.splice(l, 1);
          score++;
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
          health += 10;
        }
      }
    }
  }

  animate();
}

window.onload = startGame;
