function Pipe(){
  this.top = random(height/2); // random quantity between top and middle of the screen
  this.bottom = random(height/2);
  this.vertical = width;
  this.w = 20;
  this.speed = 5;

  this.show = function() {
    fill(255);
    rect(this.vertical, 0, this.w, this.top); // 0 starts from top
    rect(this.vertical, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.vertical -= this.speed;
  }

}