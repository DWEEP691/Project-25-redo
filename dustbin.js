class Dustbin  {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.dw = 200;
        this.dh = 213;
        this.wt = 20;

        this.width = width;
        this.height = height;
        this.image = loadImage("sImages/dustbingreen.png");
        this.bb = Bodies.rectangle(this.x,this.y,this.dw,this.wt,options);
        this.lb = Bodies.rectangle(this.x-this.dw/2,this.y-this.dh/2,this.wt,this.dh,options);
        this.rb = Bodies.rectangle(this.x+this.dw/2,this.y-this.dh/2,this.wt,this.dh,options)
        World.add(world,this.bb);
        World.add(world,this.lb);
        World.add(world,this.rb);
    }
    display() {
        var pb = this.bb.position;
        var pl = this.lb.position;
        var pr = this.rb.position;

        push();
        translate(pl.x,pl.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        //rect(pos.x,pos.y,this.width,this.height);
        pop();

        push();
        translate(pr.x,pr.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle);
        //rect(pos.x,pos.y,this.width,this.height);
        pop();

        push()
			translate(pb.x, pb.y+10);
			rectMode(CENTER)
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.dh/2,this.dw, this.dh);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }
};