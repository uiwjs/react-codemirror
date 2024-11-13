export const originalCode = `// The player has a position, a size, and a current speed.
class Player {
  size = new Vec(0.8, 1.5);

  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}

// Lava block. When you touch it, you die.
class Lava {
  size = new Vec(1, 1)

  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
  }

  static horizontal(pos) {
    return new Lava(pos, new Vec(2, 0));
  }

  static vertical(pos) {
    return new Lava(pos, new Vec(0, 2));
  }

  static drip(pos) {
    return new Lava(pos, new Vec(0, 3), pos);
  }
}
`;

export const modifiedCode = `class Player {
  get type() { return "player" }

  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}

class Lava {
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
  }

  get type() { return "lava"; }

  static create(pos, ch) {
    if (ch == "=") {
      return new Lava(pos, new Vec(2, 0));
    } else if (ch == "|") {
      return new Lava(pos, new Vec(0, 2));
    } else if (ch == "v") {
      return new Lava(pos, new Vec(0, 3), pos);
    }
  }
}

Player.prototype.size = new Vec(0.8, 1.5);
Lava.prototype.size = new Vec(1, 1);
`;
