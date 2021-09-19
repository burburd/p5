const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine,world;

var button,ball ,blower,blowertop;                            
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.02,
    
  }
  ball = Bodies.circle(395,180,10,ball_options);
  World.add(world,ball);
  blowertop = new Blowertop(395, 205, 40, 40)
  blower = new Blower(350,220,50,10)
  button = createButton("click to blow")
  button.position(width / 2, height - 100)
  button.class("blowButton")
  button.mousePressed(blow);

 
  rectMode(CENTER);
  ellipseMode(RADIUS)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10)

  drawSprites();
  console.log(ball.y)
  blower.display()
  blowertop.display()
  
}

function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})

}