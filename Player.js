class Player {
  
  constructor(x, y){
  
  this.x = x;
  this.y = y;
  
  }
  
  show() {
    
    rect(this.x, this.y, 10, 100);
    
  }
  
  update(ballY){
    
    if (this.x > width/2){
      this.y = mouseY;
      
    } else{
      
      this.y = ballY;
      
    }
    
  }
  
  
}