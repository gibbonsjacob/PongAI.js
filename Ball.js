class Ball{
  
  constructor(x, y, r, xSpeed, ySpeed){
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    
    
  }
  
  
  show(){
    
    circle(this.x, this.y, this.r)
    
  }
  
  update(){
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    
  }
  
  collide(aiX, playerX){
    
    if (this.x - this.r / 2 < aiX || this.x + this.r / 2 > playerX){
      this.xSpeed *= -1;      
    }
    
    
  }
  
  edges(){
    
    if (this.y - this.r / 2 < 0 || this.y + this.r / 2 > height){
      this.ySpeed *= -1;      
    }
    
  }
  
}