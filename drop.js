class Drop{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle=this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
      update(){
        if(this.body.position.y>height){
     Matter.Body .setPosition(this.body,{x:ranbom(0,400),y:ranbom(0,400)})  }
      }
}