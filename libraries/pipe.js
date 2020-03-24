function Pipe(){
  this.top = random(height/2); // random quantity between top and middle of the screen
  this.bottom = random(height/2);
  this.vertical = width;
  this.pipeWidth = 25;
  this.speed = 2;

  this.show = function() {
    fill(255);
    rect(this.vertical, 0, this.pipeWidth, this.top); // 0 starts from top
    rect(this.vertical, height-this.bottom, this.pipeWidth, this.bottom);
  }

  this.update = function() {
    this.vertical -= this.speed;
  }

  this.offscreen = function() {
    return this.vertical < -this.pipeWidth; // if vertical minor than pipe width
  }

}