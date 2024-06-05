class Draw {
  static bullet() {
    const number = randomNumber(1, 5);
    const x = keyboard.x - bullet.width / 2;
    const y = keyboard.y - player.height;

    switch (number) {
      case 1:
        return new BurguerBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      case 2:
        return new CoxinhaBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      case 3:
        return new DonutBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      case 4:
        return new MilkshakeBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      case 5:
        return new PizzaBullet(
          ctx,
          x,
          y,
          bullet.width,
          bullet.height,
          bullet.speed
        );
      default:
        // do nothing
        break;
    }
  }

  static enemy() {
    const number = randomNumber(1, 3);

    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (750 - enemy.width);
      const y = -enemy.height;
      const speed = Math.random() * 2;

      switch (number) {
        case 1:
          return new Cariri(ctx, x, y, enemy.width, enemy.height, speed);
        case 2:
          return new Mamau(ctx, x, y, enemy.width, enemy.height, speed);
        case 3:
          return new Xuliao(ctx, x, y, enemy.width, enemy.height, speed);

        default:
          // do nothing
          break;
      }
    }
  }

  static healthKit() {
    const x = Math.random() * (750 - enemy.width);
    const y = -enemy.height;
    const speed = Math.random() * 2.6;

    return new HealthKit(x, y, healthKit.width, healthKit.height, speed);
  }
}
