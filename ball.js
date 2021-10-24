class BB
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pp=this.body.position;		

			push()
			translate(pp.x, pp.y);
			rectMode(CENTER)
			strokeWeight(10);
			fill(255,255,255);
			imageMode(CENTER);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}