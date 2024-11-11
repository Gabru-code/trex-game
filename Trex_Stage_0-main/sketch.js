var groundImg;
function preload(){
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg=loadImage("ground2.png");


}


function setup(){
  createCanvas(920,300);
  trex=createSprite(60,245,10,10);
  trex.addAnimation("running",trexRunning);
  ground=createSprite(0,298,1880,15);
  ground.addImage(groundImg);
  ground.scale=2;
}

function draw(){
  background("red");
  
 ground.velocityX=-8;
 if (ground.x<0) {
   ground.x=ground.width/2
 } 
 if (keyDown("space")){

 
 trex.velocityY=-1;
 }
 drawSprites();

  
}
