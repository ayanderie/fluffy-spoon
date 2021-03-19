let img;

function preload() {
  img = loadImage('water_stateOfPlay.jpg');
}

function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(43, 50, 76);

  image(img, 900, 150, 550, 400);
  fill(255);

  textFont("Impact", 50);

  text("Not everyone has access to clean water and sanitation", 450, 85);
  text(" ｡｡･:*˚✧｡Let's talk about it ｡｡･:*˚:✧｡", 600, 130);
  noStroke()
  fill(85, 118, 185);
  rect(430, 175, 280, 130);
  fill(43, 50, 76);
  textSize(95);
  text("1 in 3", 465, 280);

  textSize(25);
  fill(255);
  textFont("times new roman", 30);
  text("people globally do not have", 400, 340);
  text("access to safe drinking water", 400, 370);



}
