function Entity(x, y) {
  this.graphics = new PIXI.Graphics();
  this.graphics.position.x = x;
  this.graphics.position.y = y;
  this.graphics.setInteractive(true);
}

Entity.prototype.getGraphics = function () {
  return this.graphics;
};

module.exports = Entity;
