//Sabrina Oliver
//
//
//

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var score;
var lives;


function setup() {
    createCanvas(600, 500);
    paddle_h = 16;
    paddle_w = 8 * paddle_h;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 13;
    score = 0;
    lives = 3;
    reset();
}

function draw() {
    background(125,0,150,50);

    // move paddle
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = paddle_x + paddle_step;

    // is the ball hitting the right or left wall?
    if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }

    // hitting the top?
    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }

    // hitting the paddle?
    if (ball_y + ball_r > paddle_y) {
	if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
	    ball_y_step = -ball_y_step;
	    ball_y = paddle_y - ball_r;
	}
	else if (ball_y + ball_r > paddle_y){
	    reset();
	}
    }

    // move ball by ball_x_step and ball_y_step
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;

    //draw ball
    noStroke();
    fill(random(200), random(25), random(255));
    ellipse(ball_x, ball_y, ball_r * 3, ball_r * 3);
    fill(random(255), random(25), random(200));
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

    // draw paddle
    stroke(255);
    fill(255);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
    
    
    //score amount
    if (frameCount==60*5){
    score=5;
  }
  
  if (frameCount==120*5){
    score=10;
  }
  
  if (frameCount==180*5){
    score=15;
  }
  
  if (frameCount==240*5){
    score=20;
  }
  
  if (frameCount==300*5){
    score=25;
  }
  
  if (frameCount==360*5){
    score=30;
  }
  
  if (frameCount==420*5){
    score=35;
  }
  
   if (frameCount==480*5){
    score=40;
  }
  
   if (frameCount==540*5){
    score=45;
  }
  
   if (frameCount==600*5){
    score=50;
  }
    
   //score 
    
 color(255);
    
     if (score==0){
    text("0", 30, 30);
  }
  
  if (score==5){
    text("5", 30, 30);
  }
  
  if (score==10){
    text("10", 30, 30);
  }
  
  if (score==15){
    text("15", 30, 30);
  }
  
  if (score==20){
    text("20", 30, 30);
  }
  
    if (score==25){
    text("25", 30, 30);
  }
  
   if (score==30){
    text("30", 30, 30);
  }
  
    if (score==35){
    text("35", 30, 30);
  }
    if (score==40){
    text("40", 30, 30);
  }
    if (score==45){
    text("45", 30, 30);
  }
    if (score==50){
    text("50", 30, 30);
  }
    
    //lives amount
    
    if (ball_y + ball_r > paddle_y) {
        if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
            ball_y_step = -ball_y_step;
            ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      lives=lives-1;;
    }
    
 }
    //lives
           
     if (lives==3){
    noStroke();
    color(255);
    text("✰✰✰", 540, 30);
  }
  
    if (lives==2){
    noStroke();
    text("✰✰", 540, 30);
  }
  
    if (lives==1){
    noStroke();
    text("✰", 540, 30);
  }
           
    //dead
           
    if (lives==0){
    stroke(0);
    fill(255, 0, 0);
    background(0,0,255,100);
    text("U R DEAD. GAME OVER.", 220, 250);
    reset();
  }

  
  if (ball_y + ball_r > paddle_y){
    noStroke();
    lives==3
    
  }
}



function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height/2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -4;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 4;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}