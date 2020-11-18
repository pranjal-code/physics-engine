const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ball; 
var opt2;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  var options = 
  {
   isStatic:true
  }

  var opt2 = 
  {
    restitution : 1.0
   
  }

  object = Bodies.rectangle(500,300,50,50,options);
  World.add(world,object);
  
  ball = Bodies.circle(50,50,3,opt2);
  World.add(world,ball);
  


  console.log(object.position.x);
}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(object.position.x,object.position.y,5000,60);
  ellipse(ball.position.x,ball.position.y,20);
}