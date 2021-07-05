var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(bg_red);
  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(bg_green);
}

function draw() {
  background(r,g,b);
}

function bg_red(){
  r = 255;
  g = 0;
  b = 0;
}

function bg_green(){
  r = 0;
  g = 255;
  b = 0;
}
