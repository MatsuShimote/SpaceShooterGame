class Keyboard {
  static x = 750 / 2;
  static y = window.innerHeight - 33;

  constructor(minX, maxX) {
    this.minX = minX;
    this.maxX = maxX;
  }

  toLeft() {
    Keyboard.x -= 20;

    if (Keyboard.x < this.minX) {
      Keyboard.x = this.minX;
    }
  }

  toRight() {
    Keyboard.x += 20;

    if (Keyboard.x > this.maxX) {
      Keyboard.x = this.maxX;
    }
  }
}

export default Keyboard;
