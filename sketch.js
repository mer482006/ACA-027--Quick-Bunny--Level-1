
function setup() {
  createCanvas(600,600);

  edges=createEdgeSprites();

  rabbit=createSprite(60,540,12,12);
  carrot=createSprite(540,60,30,60);
  brick1=createSprite(280,280,80,20);
  brick2=createSprite(220,320,80,20);
  brick3=createSprite(380,280,80,20);
  brick4=createSprite(320,320,80,20);
  brick5=createSprite(480,280,80,20);
  brick6=createSprite(420,320,80,20);
  brick7=createSprite(580,280,80,20);
  brick8=createSprite(520,320,80,20);
  brick9=createSprite(120,320,80,20);
  brick10=createSprite(180,280,80,20);
  brick11=createSprite(20,320,80,20);
  brick12=createSprite(80,280,80,20);
  brick13=createSprite(620,320,80,20);
  brick14=createSprite(-20,280,80,20)

}

function draw() {
  background("midnightBlue");  

  rabbit.shapeColor="darkSeaGreen"
  carrot.shapeColor="lightSalmon"
  brick1.shapeColor="silver"
  brick2.shapeColor="silver"
  brick3.shapeColor="silver"
  brick4.shapeColor="silver"
  brick5.shapeColor="silver"
  brick6.shapeColor="silver"
  brick7.shapeColor="silver"
  brick8.shapeColor="silver"
  brick9.shapeColor="silver"
  brick10.shapeColor="silver"
  brick11.shapeColor="silver"
  brick12.shapeColor="silver"
  brick13.shapeColor="silver"
  brick14.shapeColor="silver"

  if(keyDown("up")){
    rabbit.y=rabbit.y-4;
  }
  if(keyDown("down")){
    rabbit.y=rabbit.y+4;
  }
  if(keyDown("left")){
    rabbit.x=rabbit.x-4;
  }
  if(keyDown("right")){
    rabbit.x=rabbit.x+4;
  }

  if(rabbit.isTouching(carrot)){
    text("You win!",300,50);
  }
  if(rabbit.isTouching(brick1)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }
  if(rabbit.isTouching(brick2)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }
  if(rabbit.isTouching(brick3)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick4)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick5)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick6)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick7)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick8)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick9)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick10)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick11)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick12)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick13)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  if(rabbit.isTouching(brick14)){
    text("You lose!",300,50);
    rabbit.x=60;
    rabbit.y=540;
  }

  drawSprites()
}
