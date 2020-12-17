const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	polygonimg = loadImage("sprites/polygon.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.    
    Polygon1 = new Polygon(200,200)
    
    box1 = new Box(320,235)
    box2 = new Box(350,235)
    box3 = new Box(380,235)
    box4 = new Box(410,235)
    box5 = new Box(440,235)
    box6 = new Box(470,235)
    box7 = new Box(500,235)

    box8 = new Box(350,195)
    box9 = new Box(380,195)
    box10 = new Box(410,195)
    box11 = new Box(440,195)
    box12 = new Box(470,195)

    box13 = new Box(380,146)
    box14 = new Box(410,146)
    box15 = new Box(440,146)

    box16 = new Box(410,105)

    box17 = new Box(610,160)
    box18 = new Box(640,160)
    box19 = new Box(670,160)
    box20 = new Box(700,160) 
    box21 = new Box(730,160)

    box22 = new Box(640,120)
    box23 = new Box(670,120)
    box24 = new Box(700,120)
    
    box25 = new Box(670,80)

    rope1 = new Rope(Polygon1.body,{x:110,y:200})

    Ground1=new Ground(450,650,900,10)
    Ground2=new Ground(410,330,250,10)
    Ground3=new Ground(670,250,200,10)
    Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background("black");
   
    Polygon1.display();
   
fill("red");
box1.display(); 
  box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill("#35ED28")
    box13.display();
    box14.display();
    box15.display();
    fill("#28EDE6")
    box16.display();

   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
fill("#C8B1FF")
   box22.display();
   box23.display();
   box24.display();
fill("#FF5733")
   box25.display();
fill("white")
Ground1.display();
Ground2.display();
Ground3.display();



fill("#0069FF")
text("Press Enter to get second Chance to play!!!",230,100)
stroke("red")
        
rope1.display();

}
function mouseDragged(){
    Matter.Body.setPosition(Polygon1.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
    rope1.fly();
    
  }  
  
  


function keyPressed(){
  if(keyCode === 13){
    Matter.Body.setPosition(Polygon1.body,{x:200,y:200})
    rope1.attach(Polygon1.body);
  }
}

