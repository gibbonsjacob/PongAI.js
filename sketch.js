let player;
let AI;
let ball;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  player = new Player(width - 20, height/2);
  AI = new Player(20, height/2)
  ball = new Ball(width/2, height/2, 25, 5, 2)

}

function draw() {
  background(0);


  
  
  player.update(ball.y);
  AI.update(ball.y);
  ball.update();
  // console.log(AI.x, player.x)
  ball.collide(AI.x, player.x)
  ball.edges()
  
  player.show();
  AI.show();
  ball.show();
  
  if (CheckWin(ball.x) == true){
    noLoop();
    
  }
  
  
}



function CheckWin(ballx){
  if (ballx <= 0 || ballx >= width){
    return true;
  } else{
    return false;
  }  
}