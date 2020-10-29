const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundoptions ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,370,400,10,groundoptions);
  World.add(world,ground);
  var balloptions = {
    restitution:2
  }
  ball = Bodies.circle(200,200,40,balloptions);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,10);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
  



























 