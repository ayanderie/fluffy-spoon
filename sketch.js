let img;

function preload () {
  img = loadImage ('water_stateOfPlay.jpg');
}

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(102, 178, 255);
  image (img,500,150,450,380);
  fill(255);

  textFont("Impact", 50);
  text("｡･:*˚:✧｡ Not everyone has access to clean water and sanitation｡･:*˚:✧｡", 380, 65);
  text ("Let's talk about it!!!",900,130);

  noStroke()
  rect(44, 99, 200, 100);
  fill(102, 178, 255);
  textSize(75);
  text("1 in 3", 70, 175);

  textSize(25);
  fill(255);
  textFont("times new roman");
  text("people globally do not have", 27, 240);
  text("access to safe drinking water", 20, 270);

}
