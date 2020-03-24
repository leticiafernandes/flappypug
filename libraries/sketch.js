let pug;
let pipes = [];

function setup() {
  createCanvas(400, 600);
  pug = new Pug();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(pug)) {
      console.log('ouch');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1); // delete pipes that got of the
    }
  }

  pug.update();
  pug.show();

  if (frameCount % 100 == 0) { // a cada 100 frames coloca um pipe
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    pug.up();
  }
}