var stage = new PIXI.Stage(0x336699);
var renderer = PIXI.autoDetectRenderer(800, 600);

document.getElementById("container").appendChild(renderer.view);

var seed;

function init () {
  seed = new PIXI.Graphics();
  seed.beginFill(0x00FF00);
  seed.moveTo(0, 0);
  seed.lineTo(-50, 100);
  seed.lineTo(50, 100);
  seed.endFill();
  stage.addChild(seed);

  requestAnimFrame(animate);
}

function animate () {
  requestAnimFrame(animate);

  seed.position.x += 0.1; 
  seed.position.y += 0.1; 

  renderer.render(stage);
}

init();
