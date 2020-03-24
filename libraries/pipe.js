function Pipe(){
  this.top = random(height/2); // random quantity between top and middle of the screen
  this.bottom = random(height/2);
  this.x = width;
  this.pipeWidth = 20;
  this.speed = 2;

  this.highlight = false;

  this.show = function() {
    fill(255);
    
    if(this.highlight) {
      fill(2555,0,0);
    }
    
    rect(this.x, 0, this.pipeWidth, this.top); // 0 starts from top
    rect(this.x, height-this.bottom, this.pipeWidth, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.hits = function(pug) {
    let isInferiorThanPipeTop = pug.y < this.top;
    let isSuperiorThanPipeBottom = pug.y > height - this.bottom;

    // check if between the x position of the pipe
    let isXSuperior = pug.x > this.x;
    let isXInferiorPlusPipeWidth = pug.x < this.x + this.pipeWidth;

    if(isInferiorThanPipeTop || isSuperiorThanPipeBottom) {
      if(isXSuperior && isXInferiorPlusPipeWidth) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.offscreen = function() {
    return this.x < -this.pipeWidth; // if vertical minor than pipe width
  }

}