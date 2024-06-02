class Draw {
  static bullet() {
    for (let _ = 0; _ < 1; _++) {
      const number = randomNumber(1, 5);
      const x = keyboard.x - bullet.width / 2;
      const y = keyboard.y - player.height;

      if (number === 1) {
        return new BurguerBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      }

      if (number === 2) {
        return new CoxinhaBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      }

      if (number === 3) {
        return new DonutBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      }

      if (number === 4) {
        return new MilkshakeBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      }

      if (number === 5) {
        return new PizzaBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      }
    }
  }

  static enemy() {
    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (window.innerWidth - enemy.width);
      const y = -enemy.height;
      const speed = Math.random() * 2;

      return new Enemy(ctx, x, y, enemy.width, enemy.height, speed);
    }
  }

  static healthKit() {
    for (let _ = 0; _ < 1; _++) {
      const x = Math.random() * (window.innerWidth - enemy.width);
      const y = -enemy.height;
      const speed = Math.random() * 2.6;

      return new HealthKit(ctx, x, y, healthKit.width, healthKit.height, speed);
    }
  }
}
