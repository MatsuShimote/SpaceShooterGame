class Draw {
  static enemy() {
    for (let _ = 0; _ < 4; _++) {
      const x = Math.random() * (window.innerWidth - enemy.width);
      const y = -enemy.height;
      const speed = Math.random() * 2;

      return new Enemy(ctx, x, y, enemy.width, enemy.height, speed);
    }
  }

  static fire() {
    for (let _ = 0; _ < 1; _++) {
      const x = mouse.x - bullet.width / 2;
      const y = mouse.y - player.height;

      return new Bullet(ctx, x, y, bullet.width, bullet.height, bullet.speed);
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
