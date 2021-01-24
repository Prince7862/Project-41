class Umbrella {
    constructor(x,y,r){
        var options = {
         isStatic:true
        }
        this.radius = 30
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        fill(0)
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,50,this.radius);
        pop();
    }
    }