class Piece{
	constructor(){
  	this.rot = null;
     
  }
  
  get rotation(){
  	return this.rot;
  }
  
  set rotation(degree){
    
    if(degree % 90 === 0){
    	degree %= 360;
      this.rot = degree;
    } 
  }
  
  isDestroyed(laserAngle){
  
  }
}
