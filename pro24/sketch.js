
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	plane1 = new Plane(400,690);
	hammer = new Hammer(250,250);
	rubber1 = new Rubber(650,70,37);
    stone1 = new Stone(200,300);

     ball1= new Sand(500,650,7);
	 ball2= new Sand(510,650,7);
	 ball3= new Sand(520,650,7);
	 ball4= new Sand(530,650,7);
	 ball5= new Sand(540,650,7);
	 ball6= new Sand(550,650,7);
	 ball7= new Sand(560,650,7);

	//Create the Bodies Here.



  
}


function draw() {
  background("#add8e6");
  Engine.update(engine);

  drawSprites();
ball1.display(); 
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
plane1.display();
stone1.display();
rubber1.display();
hammer.display();
}



