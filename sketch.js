
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree
var ground
var stone
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mnago9,mango10
var string
 var constraintStone
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree=new Tree(580,380,415,615)
	ground=new Ground(400,680,800,60)
	boy=createSprite(150,600,20,10)
	boy.addImage("boy",boyImg)
	boy.scale=0.11
	stone=new Stone(90,530,40)
	string=new String(stone.body,{x:90,y:530}) 
	constraintStone=new Stone(90,530,40)
	mango1=new Mangoes(580,200,30)//radius is actually 45 for all mangoes
	mango2=new Mangoes(630,280,30)
	mango3=new Mangoes(530,240,30)
	mango4=new Mangoes(700,300,30)
	mango5=new Mangoes(500,340,30)
	mango6=new Mangoes(460,290,30)
	mango7=new Mangoes(680,220,30)
	mango8=new Mangoes(550,160,30)
	mango9=new Mangoes(570,300,30)
	mango10=new Mangoes(650,165,30)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  tree.display()
  constraintStone.display()
  string.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}



