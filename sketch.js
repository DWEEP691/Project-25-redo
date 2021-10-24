
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  G = new Ground(width/2,670,width,20);
  SP = new BB(200,450,70);
  D1 = new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  G.display();
  SP.display();
  D1.display();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(SP.body,SP.body.position,{x:140,y:-170});
  }
}



