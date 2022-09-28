var PLAY=2;
var END=4;
var WEL=0;
var RULE=1;
var WIN=3;
var STORY = 5;

var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var k = 0 ,b,nb;
var invisibleBlockGroup, invisibleBlock;
var button,no_button,AtiKey,key_p,key_port,key_inP,key_pic,key;
var spookySound,bgm,youWin,youLose,sigmaRule;  
var gameState = 0;  
var keyGroup; 


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  button = loadImage ("Button.png");
  no_button = loadImage ("No Button.png");
  key_pic = loadImage ("Key.png");
  key_port = loadAnimation ("Key_Port.png");
  key_inP = loadImage("Key2.png");

 spookySound = loadSound("mixkit-haunted-slow-orchestra-634.wav");
 sigmaRule = loadSound("Sigma Rule.mp3");
  bgm = loadSound("BGM.wav");
  youWin = loadSound("mixkit-medieval-show-fanfare-announcement-226.wav");
  youLose = loadSound ("mixkit-sad-game-over-trombone-471.wav");
}

function setup() {
  createCanvas(600,565);
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  text  ("Frames : " + frameCount,50,50)
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  keyGroup = new Group();

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  b = createSprite(300,500,50,50);
    b.addImage("b",button);
    b.scale=0.2
     b.visible=false;

     nb = createSprite(300,500,50,50);
    nb.addImage("nb",no_button);
    nb.scale=0.2
     nb.visible=false;

     bgm.loop();
}
  
   
function draw() {
  background("Red");

     
if(gameState === WEL){

  
  push();
  fill("White")
  textSize(30);    
  text("Welcome To 'Hell Or Heavan?'Game",75,200);
  
text("Only For Pc/Laptop",75,300);

text("Press Space To Continue",75,400);
pop();

  push();
  fill("Black")
  textSize(15);
  text("By Vasu",500,550);
  pop()
  if (keyDown("Space")){
    bgm.stop();
    sigmaRule.loop();
    gameState=RULE;
       }
}

 if (gameState===RULE){
  push()
  fill("Black")
  textSize(25);
  text("Rules",250,50);
pop()
  push()
  fill("")
  textSize(15);
  text("1 You Have To Press Space Key To Be In Game",50,150); 
  text("2 You Can Move AnyWhere Using Left And Right Arrow ",50,175);
  text("3 Game Will Over When You Will Touch Below Part Of Climber",50,200);
  text("4 Game Will Also Over When You Will Not Press Space For A Long Time!!!   ",50,225);
  text("5 Key Will Spawn In Every Few Seconds",50,250);
  textSize(10);
  text ("6 Main Agenda Of The Game Is Collect The Key And Use It When You Are On Climber By Pressing The Button Present On Screen ",15,275);
  textSize(15)
  text("7 You Can See That You Have Key Or Not On Far Right Corner",50,300);
  text("8 If You Don't Have Key You Will See Grey Button When You Are On Climber",50,325);
  text("9 When You Win Or Lose, To Play Again , Press Ctrl+R Or Refresh Your Broswer",20,350);
pop()
push()
fill("Yellow")
  textSize(35);
  text("Press Enter To Continue",100,500);
  
pop()
fill("Pink")
  textSize(20);
text("You Can Give FeedBack To",300,400);
fill("Blue") 
text("vasupanpalia@gmail.com",305,425);
push()
  if (keyDown("Enter")){
    gameState=STORY;
  }
}
if (gameState === STORY){
  push()
  fill("Black")
  textSize(25);
  text("Story",250,50);
pop()
push()
  fill("")
  textSize(15);
  text("Vasu: You Have Died In Car Accident, Now You Are Lod Ganesha's Court",50,90);
  text ("Lord: Player, As I See Your Life And Time Line.You Are In Hell!",50,115);
  text("Player(Between Lord's Talk) : But I Want To Be in Heaven!",50,140);
  text("Lord: Imposible My Child!!",50,165);
  text("Player: Please! You Can Do Anything And Nothing Is Impossible! ",50,190);
  textSize(12);
  text("Lord: Ok! But You Have To Go Inside That Tower And Collect Key And Use It To Open The Door Of Heaven",15,215);
  textSize(15);
  text("Lord:But If You Can't Collect The Key And Can't Open The Door,You Will Be In Hell!!",40,250)
text("Player: Oh Great!!",50,275);
textSize(25);
fill("Blue")
text("Now Decide You Have To Go In",150,350)
fill("Green")
text("Hell Or Heaven???",225,400)
fill("Yellow")
text("Press Space To Continue",170,450)
text("Good Luck!",200,550)

if (keyDown("Space")){
  sigmaRule.stop();
  spookySound.loop();
  gameState=PLAY;
     }
}

  if (gameState === PLAY) {    
    b.visible=false;
    nb.visible=false; 

    key_p = createSprite (550,50,00,0);
    key_p .addAnimation("Key In Port",key_port);
    key_p.scale = 0.2 
  

    if(keyDown("left")){
        ghost.x = ghost.x - 3;
         }
    if(keyDown("right")){
  
          ghost.x = ghost.x + 3;

      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;
    
    }

   if(ghost.isTouching(climbersGroup)){
     if (k === 50) {
       b.visible = true;
       if (mousePressedOver(b)) {
         gameState = WIN;
         spookySound.stop();
         youWin.loop();
       }
     }
     if (k >50 ) {
       nb.visible = true;
     }
   }

   if(k=== 50){
    AtiKey = createSprite (550,50,00,0);
    AtiKey.addImage(key_inP);
    AtiKey.scale = 0.2 
   }

      if(tower.y > 400 ){
        tower.y = 300
      } 
   
      spawnDoors();

if (frameCount % 100=== 0){
  var r = Math.round(random(100,500));
   key = createSprite(r,50,20,20);
  key.addImage("Key",key_pic);
  key.scale = 0.1
  keyGroup.add(key);
  key.depth=ghost.depth;
  
  //ghost.setCollider("rectangle",200,200,ghost.width,ghost.height);
key.setCollider("rectangle",0,0,400,key.height);

  if (ghost.collide(keyGroup)){

    k ++; 
    key.destroy();   
  }
  
  

//key.velocityY = key.velocityY+5;

 
//key.lifetime = 105;


ghost.debug = true;
key.debug = true;
}



ghost.velocityY = ghost.velocityY + 0.4

  
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
          spookySound.stop();
          youLose.loop();
           gameState = END;
    }
    
  
  drawSprites();
}
  if (gameState === END){



    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
    text("You Are In Hell Now!!!!!",150,300);

    fill("Pink")
  textSize(20);
text("You Can Give FeedBack To",300,400);
fill("Blue") 
text("vasupanpalia@gmail.com",305,425);
  }

function spawnDoors()
 {
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    door.x = Math.round(random(120,400));
    climber.x=door.x;
    invisibleBlock.x=door.x;

    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    
    
     
  ghost.depth = door.depth;
    ghost.depth = ghost.depth +1; 
    


    door.lifetime = 700-30;
   climber.lifetime = 700-30;
    invisibleBlock.lifetime = 700-30;
    
    
     doorsGroup.add(door);
    invisibleBlock.debug = false;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
  
  drawSprites();
}

if(gameState ===WIN ){
  //spookySound.stop();
  

  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("You Win", 230,250);
  text("You Are In Heaven Now!!!!!",150,300);

  fill("Pink")
textSize(20);
text("You Can Give FeedBack To",300,400);
fill("Blue") 
text("vasupanpalia@gmail.com",305,425);

}


}  
