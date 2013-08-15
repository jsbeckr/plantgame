var Seed = require("./seed.js");

var WIDTH = 800;
var HEIGHT = 600;
var SCROLL_FACTOR = 30;
var ZOOM_FACTOR = 0.01;

var stage = new PIXI.Stage(0x336699, true);
var mainContainer = new PIXI.DisplayObjectContainer();
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
document.getElementById("container").appendChild(renderer.view);

var entities = [];
var seed;

KeyboardJS.on("w", function() {
  console.log("w");
  mainContainer.position.y += SCROLL_FACTOR;
});

KeyboardJS.on("s", function() {
  console.log("s");
  mainContainer.position.y -= SCROLL_FACTOR;
});

function init () {
  stage.click = function (data) {
    //console.log(data);
    //var pos = data.getLocalPosition(stage);
    //seed = new Seed(pos.x, pos.y);
    //entities.push(seed);
    //stage.addChild(seed.getGraphics());
  };

  var backgroundTexture = PIXI.Texture.fromImage("img/background.png");
  var background = new PIXI.Sprite(backgroundTexture);

  mainContainer.position.y = -600;
  mainContainer.addChild(background);
  initSoil();
  
  stage.addChild(mainContainer);

  requestAnimFrame(animate);
}

function initSoil() {
  var soilImage = new Image();
  soilImage.src = "img/tile.png";
  var tintedSoilImage = dyeImageWithColor(soilImage, "#5a290f", 0.8);
  var soilTexture = PIXI.Texture.fromCanvas(tintedSoilImage);
  var foo = PIXI.Texture.fromImage("img/tile.png");
  var soilTile = new PIXI.Sprite(foo);

  for (var i=0; i < 40 * 10; i++) {
    var newSoilTile = new PIXI.Sprite(foo);
    newSoilTile.position.x = 20 * (i % 40);
    newSoilTile.position.y = 938 + 20 * Math.floor((i / 40));
    mainContainer.addChild(newSoilTile);
  } 
}

function animate () {
  for (var i = 0; i < entities.length; i++) {
    entities[i].update();
  }

  renderer.render(stage);
  requestAnimFrame(animate);
}

function handleMouseWheel(event) {
  mainContainer.scale.y += event.wheelDeltaY / 120 * ZOOM_FACTOR;
  mainContainer.scale.x += event.wheelDeltaY / 120 * ZOOM_FACTOR;

  if (mainContainer.scale.x < 1.0) {
    mainContainer.scale.x = 1;
    mainContainer.scale.y = 1;
  }

  //mainContainer.position.x *= mainContainer.scale.x;
  //mainContainer.position.y *= mainContainer.scale.y;
};

window.addEventListener("wheel", handleMouseWheel);
window.addEventListener("mousewheel", handleMouseWheel);

init();
