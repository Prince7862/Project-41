class Rain {
    constructor(x,y,r) {
        var options ={
            isStatic: false,
            restitution: 0.5,
            friction:0.8
        }
        this.r=r;
      
        this.body = Bodies.circle(x,y,r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        noStroke();
        fill(18,0,180)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};