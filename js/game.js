var Seed = require("./seed.js");

var stage = new PIXI.Stage(0x336699, true);
var renderer = PIXI.autoDetectRenderer(800, 600);
document.getElementById("container").appendChild(renderer.view);

var entities = [];
var seed;

function init () {
  stage.click = function (data) {
    console.log(data);
    var pos = data.getLocalPosition(stage);
    seed = new Seed(pos.x, pos.y);
    entities.push(seed);
    stage.addChild(seed.getGraphics());
  };

  requestAnimFrame(animate);
}

function animate () {
  for (var i = 0; i < entities.length; i++) {
    entities[i].update();
  }

  renderer.render(stage);
  requestAnimFrame(animate);
}

init();
