
const PointerStub = require('./PointerStub');

class GameStub {

  constructor() {
    this.phaserGame = {
      add: {
        sprite: () => new SpriteStub(),
        tileSprite: () => new TileSpriteStub()
      },
      load: {
        image: () => {}
      },
      physics: {
        startSystem: () => {}
      },
      scale: {
        forceOrientation: () => {}
      },
      world: {
        setBounds: () => {}
      },
      input: {
        mousePointer: new PointerStub(),
        pointers: [
          new PointerStub()
        ]
      }
    };
  }

  start() {}
  reset() {}
}

module.exports = new GameStub();
