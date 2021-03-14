
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bobl,bob2,bob3, bob4,bob5, world,engine,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 470);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,height/4,200,20);
bob1 = new Bob(320,320,20);
bob2 = new Bob(360,320,20);
bob3 = new Bob(400,320,20);
bob4 = new Bob(440,320,20);
bob5 = new Bob(480,320,20);

rope1 = new Rope(bob1.body,roof.body,-80,0);

rope2 = new Rope(bob2.body,roof.body,-40,0);
rope3 = new Rope(bob3.body,roof.body,0,0);
rope4 = new Rope(bob4.body,roof.body,40,0);
rope5 = new Rope(bob5.body,roof.body,80,0);
	Engine.run(engine);
  
}


function draw() {
    background("black");
    textSize(35);
    strokeWeight(3);
    stroke(236)
    fill("red");
    text("Newtons Craddle",100,80);
    textSize(25);
    fill("yellow");
    text("Press up arrow to start",100,100);

    //if(keyCode ===UP_ARROW){
    //  gameState = "play"
    //}
  
  //if(gameState ==="play"){
    rectMode(CENTER);
    //background(0);
    roof.display();
    
    bob1.display();
    bob2.display();
    bob3.display(); 
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
   //}
  }
 

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40});
  }
}



