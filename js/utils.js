function collision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function fire(bullets) {
  for (let _ = 0; _ < 1; _++) {
    number = randomNumber(1, 6);
    const x = keyboard.x - bullet.width / 2;
    const y = keyboard.y - player.height;

    if(number == 1) {
      bullets.push(
        new BurguerBullet(ctx, x, y, bullet.width, bullet.height, bullet.speed));
    }else if(number == 2) {
      bullets.push(
        new CoxinhaBullet(ctx, x, y, bullet.width, bullet.height, bullet.speed));
    }else if(number == 3) {
      bullets.push(
        new DonutBullet(ctx, x, y, bullet.width, bullet.height, bullet.speed));
    }else if(number == 4) {
      bullets.push(
        new MilkshakeBullet(ctx, x, y, bullet.width, bullet.height, bullet.speed));
    }else if(number == 5) {
      bullets.push(
        new PizzaBullet(ctx, x, y, bullet.width, bullet.height, bullet.speed));
    }
  }
}

function drawEnemies(enemies) {
  for (let _ = 0; _ < 4; _++) {
    const x = Math.random() * (window.innerWidth - enemy.width);
    const y = -enemy.height;
    const speed = Math.random() * 2;

    enemies.push(new Enemy(ctx, x, y, enemy.width, enemy.height, speed));
  }
}

function drawHealthKits(healthKits) {
  for (let _ = 0; _ < 1; _++) {
    const x = Math.random() * (window.innerWidth - enemy.width);
    const y = -enemy.height;
    const speed = Math.random() * 2.6;

    healthKits.push(
      new HealthKit(ctx, x, y, healthKit.width, healthKit.height, speed)
    );
  }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
