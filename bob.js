class bob {
    constructor(x, y, radius) {
      var options = {
        isStatic:false,
          'restitution':1.1,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
     // this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      ellipse(5, 26, 70);
      pop();
    }
  };