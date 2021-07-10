// Declaring variables ----------------------------------------
var canvasWidth = 650;
var canvasHeight = 350;
var spriteWidth = 864;
var spriteHeight = 280;
var row = 2;
var column = 8;
var width = spriteWidth / column; //864÷8=108
var height = spriteHeight / row; //280÷2=140

var trackRight = 0;
var trackLeft = 1;

var curFrame = 0;
var totalFrame = 8;

var x = 0;
var y = 0;

var srcX = 0;
var srcY = 0;

var left = false;
var right = true;

var speed = 12;

// canvas ----------------------------------------------------
var canvas = document.getElementById("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var context = canvas.getContext("2d");

// character -------------------------------------------------
var character = new Image();
character.src = "character.png";

// frames and draw -------------------------------------------
setInterval(draw, 100);

function draw() {
  updateFrame();
  context.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

function updateFrame() {
  curFrame = ++curFrame % totalFrame;
  srcX = curFrame * width;
  context.clearRect(x, y, width, height);
  if (left && x > 0) {
    srcY = trackLeft * height;
    x -= speed;
  }

  if (right && x < canvasWidth - width) {
    srcY = trackRight * height;
    x += speed;
  }
}

// controls  ------------------------------------------------
function moveLeft() {
  left = true;
  right = false;
}

function moveRight() {
  left = false;
  right = true;
}
