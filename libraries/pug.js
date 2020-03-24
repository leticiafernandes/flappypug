function Pug() {
  this.vertical = height/2;
  this.horizontal = 25;

  this.gravity = 1;
  this.velocity = 0;

  this.show = function () {
    fill(255);
    ellipse(this.horizontal, this.vertical, 20, 20);
  }

  this.up = function () {
    this.velocity += -this.gravity;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.vertical += this.velocity; 

    if(this.vertical > height){
      this.vertical = height;
      this.velocity = 0;
    }

    if(this.vertical < 0){
      this.vertical = 0;
      this.velocity = 0;
    }
  }
};