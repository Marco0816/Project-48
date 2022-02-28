const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
//var player1, player2;
var gameState = "PLAY";
var gun1, gun2;
var gun1_img, gun2_img;
var floatfloor;
var engine,world;
var rect;
var rect2y;
var rect1y;
var bullet1;
var bullet1img;
var gameState;
var bulletGroup;

function preload() {
  //car1_img = loadImage("../assets/car1.png");
  //gun1_img = loadImage("../assets/Gun1_img.png")
 // bullet1img = loadImage("../assets/bullet_img.png")
  gun2_img = loadImage("../assets/Gun2_img.png")
}

function setup() {


  canvas = createCanvas(1500, 700);

  engine = Engine.create();
  world =  engine.world;
 // ground = new Ground (750,height,1200,40)
  rect1y = 300
  rect1x = 1130
  rect2y = 300
  rect2x = 400
  rect1 = new Rectangle(1130,300,100,30)
  rect2 = new Rectangle2(400,300,100,30)


  gun1 = new Gun(1100,300)



  gun2 = new Gun2(430,300)

  bullet1 = new Bullet(1130,300,20,20)
 // bullet1.setCollider("rectangle",0,0,10,10);

  bulletGroup =  new Group();



 // bullet1 = createSprite(rect1x-40,rect1y-10,20,20);
  //bullet1.addImage(bullet1img);
  //bullet1.scale = 0.03


}

function draw() {
  background("white");

 // ground.display();
  //keyPressed();
  gun1.display();
  gun2.display();
  rect1.display();
  rect2.display();
  bullet1.display();
  
  if(gameState === "PLAY"){

    //jump when the space key is pressed
    if(keyDown("space")) {
        bullet1.velocityY = -12;
    }
    


    
    if(bulletGroup.isTouching(rect2)){
        //trex.velocityY = -12;
        gameState = END;
      
    }
  }
   else if (gameState === END) {
     
      bullet1.velocityY = 0
  


  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 120 === 0) {


    bullet1.setCollider("rectangle",0,0,200,200)
    bulletGroup.add(bullet1);
    
  }
}
//function keyPressed(){
 // if (keyDown("LEFT_ARROW")){
   // bullet.position.x -= 30
   // bullet.visibile = true;
   // bullet.x = gun1.x
    //bullet.y = gun1.y
}
