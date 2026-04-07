class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(2, 5), random(2, 5));
    this.lifespan = 75.0;
    this.lifespanStart = 75.0;
  }

run() {
    let gravity = createVector(0.01,0.01);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

 applyForce(force) {
    this.acceleration.add(force);
  }

update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }
show() {
    stroke(0, this.lifespan);
    if(this.lifespan < this.lifespanStart /2){
      fill(240, 240, 60, this.lifespan);
    }else{
      fill(240, 240, 60);
    }
    circle(this.position.x, this.position.y, 8);
  }
isDead() {
    return (this.lifespan < 0.0);
  }
}
