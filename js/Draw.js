class Draw {
  static bullet() {
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

  static enemy() {
    const number = randomNumber(1, 3);

    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (750 - enemy.width);
      const y = -enemy.height;
      const speed = Math.random() * 2;

      if (number === 1) {
        return new Cariri(ctx, x, y, enemy.width, enemy.height, speed);
      }

      if (number === 2) {
        return new Mamau(ctx, x, y, enemy.width, enemy.height, speed);
      }

      if (number === 3) {
        return new Xuliao(ctx, x, y, enemy.width, enemy.height, speed);
      }
    }
  }

  static healthKit() {
    const x = Math.random() * (750 - enemy.width);
    const y = -enemy.height;
    const speed = Math.random() * 2.6;

    return new HealthKit(ctx, x, y, healthKit.width, healthKit.height, speed);
  }
}
