class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(10, 12), random(7, 10));
    this.lifespan = 255;
  }

run() {
    let gravity = createVector(0,0.1);
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
    if (this.lifespan<0.5){
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 8);
    } else {
      fill(127)
    }
  }
isDead() {
    return (this.lifespan < 0.0);
  }
}
