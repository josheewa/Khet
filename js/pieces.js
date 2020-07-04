/*
          Piece 
	  
0 deg      side 1     90 deg
	_____________
       |             |
side 4 |             | side 2
       |             |
        _____________
270 deg     side 3    180 deg
*/


class Piece{
//specify the starting position, rotation(0,90,180,270) of the Piece.
//the sides parameter is supposed to get an array of size 4 filled with booleans true or false that represent 
//if a laser can hit that side without the piece getting destroyed.
	constructor(startingRotation,coordX,coordY,sides){
  
  		this.rot = startingRotation % 360;
    		this.coordX = coordX;
    		this.coordY = coordY;
    
    		//the true in the sides array represent the sides that can be hit with
    		//a laser without the piece being destroyed
    		this.sides = sides;
    
    		//rotates the array to the right so the sides faced there starting rotation
   		 for(let i = this.rot;i > 0;i-=90){
    			this.sides.unshift(this.sides.pop());
    		 }
  	}
  	//rotates the peice 90 degrees. If negative eqauls true , rotates the Piece -90 degrees
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
