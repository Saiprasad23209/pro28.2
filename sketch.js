
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var Ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	bobObject1 = new Bob(400,300,20)
	bobObject1.shapeColor=color(0,0,255)
	bobObject2 = new Bob(450,350,20)
	bobObject2.shapeColor=color(0,0,255)
	bobObject3 = new Bob(500,400,20)
	bobObject3.shapeColor=color(0,0,255)
	bobObject4= new Bob(550,450,20)
	bobObject5=new Bob(600,500,20)
	Ground = new Roof (400,200,400,20)
    rope1=new Rope(bobObject1.body,Ground.body,-80,0)
	rope2=new Rope(bobObject2.body,Ground.body,-40,0)
	rope3=new Rope(bobObject3.body,Ground.body,0,0)
	rope4=new Rope(bobObject4.body,Ground.body,40,0)
	rope5=new Rope(bobObject5.body,Ground.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
bobObject2.display() 
 bobObject3.display()
  bobObject4.display()
  bobObject5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  Ground.display()
  drawSprites();
 
}



