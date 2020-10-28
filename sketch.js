
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinSide1,dustbinSide2,dustbinSide3,ball,ground,

function preload(){

	
}

function setup() {
	createCanvas(800, 700);
     dustbinSide1=createSprite(550,450,20,100);
     dustbinSide2=createSprite(600,500,100,20);
     dustbinSide3=createSprite(650,450,20,100);
     
     ground=createSprite(300,620,800,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.circle(300, 620 , 800 , { isStatic:true});
	World.add(world, ground);
	
	dustbinSide1 = Bodies.circle(550,450,20,{isStatic:true});
	World.add(world,dustbinSide1);

	dustbinSide2 = Bodies.circle(600,500,100,{isStatic:true});
	World.add(world,dustbinSide2);

	dustbinSide3 = Bodies.circle(650,450,20,{isStatic:true});
	World.add(world,dustbinSide3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



