class Piece{
//specify the starting position and rotation(0,90,180,270) of the pyramid
	constructor(startingRotation,coordX,coordY){
  
  	this.rot = startingRotation % 360;
    this.coordX = coordX;
    this.coordY = coordY;
    
    //the true in the sides array represent the sides that can be hit with
    //a laser without the piece being destroyed
    this.sides = [true,false,false,true];
    
    //rotates the array to the right so the sides faced there starting rotation
    for(let i = this.rot;i > 0;i-=90){
    	this.sides.unshift(this.sides.pop());
    }
  }
  //rotates the peice 90 degrees. If negative eqauls true , rotates the pyramid -90 degrees
  rotate90deg(bNegative){
  
  	if(!bNegative){
    //rotates the array to the right
    	this.sides.unshift(this.sides.pop());
      
      this.rot = (this.rot + 90) % 360;
    }
    
    else if(bNegative){
    	//rotates the array to the left
    	this.sides.push(this.sides.shift());
      
      this.rot = this.rot === 0 ? 270 : this.rot - 90;
    }
    
    //console.log(this.rot);
    //console.log(this.sides);
  }
  
  
  get x(){
  	return this.coordX;
  }
  
  get y(){
  	return this.coordY;
  }
  
  set x(increment){
  	this.coordX += increment;
  }
  
  set y(increment){
  	this.coordY += increment;
  }
  
}
