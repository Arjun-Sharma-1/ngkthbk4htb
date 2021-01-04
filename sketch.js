
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,boy,m1,m2,m3,m4,m5,chain,stone
var ground
function preload()
{
	tree=loadImage("image/tree.png")
	boy=loadImage("image/boy.png")


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground=new Ground(400,600,800,20)
  m1=new Ball(700,400,50,50)
  stone= new Stone(300,500,50,50)
  chain=new Chain(stone.body,{x:300,y:400})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(239);
  image(tree,650,350,200,300)
  image(boy,300,400,200,250)
  ground.display();
  m1.display();
  stone.display();
chain.display();
  
 
}



