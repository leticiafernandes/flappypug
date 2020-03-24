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

  if(frameCount % 100 == 0) { // a cada 100 frames coloca um pipe
    pipes.push(new Pipe());
  }

  for(var i=0; i < pipes.length; i++){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].offscreen()) {
      pipes.splice(i, 1); // delete pipe[i] from array pipes
      i--;
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    pug.up();
  }
}