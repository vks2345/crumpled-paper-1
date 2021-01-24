
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
	paper= new Paper(280,300,30,30);
	dustbin1= new Dustbin(900,380,200,20);
	dustbin2= new Dustbin(800,330,20,100);
	dustbin3= new Dustbin(990,330,20,100);
	ground= new Ground(600,height,1200,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:38,y:-38});
	}
}



