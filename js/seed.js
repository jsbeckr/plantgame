var Entity = require("./entity.js");

function Seed(x, y) {
  Entity.call(this, x, y);

  this.graphics.beginFill(0x00FF00);
  this.graphics.lineStyle(4, 0x996633, 1);
  this.graphics.drawCircle(0, 0, 20);
  this.graphics.endFill();
}

Seed.prototype.constructor = Seed;
Seed.prototype = Object.create(Entity.prototype);

Seed.prototype.update = function () {
};

module.exports = Seed;
