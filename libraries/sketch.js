let pug;
let pipes = [];

function setup() {
  createCanvas(400, 600);
  pug = new Pug();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  pug.update();
  pug.show();

  for(var i=0; i < pipes.length; i++){
    pipes[i].show();
    pipes[i].update();
  }
}

function keyPressed() {
  if (key == ' ') {
    pug.up();
  }
}