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


class Pyramid extends Piece {
	
	constructor(startingRotation, coordX, coordY) {

    		super(startingRotation, coordX, coordY, [true, false, false, true]);

  	}

  	//the laser direction represents which side the laser is hitting(sides:1,2,3,4).
  	//returns true if the peice is destroyed
  	isDestroyed(laserDirection) {

    		laserDirection -= 1;
    		if (this.sides[laserDirection]) return false;

    		else return true;

  }
//returns the direction the laser will continue to project after it bounces of the mirror 
  reflectLaser(laserDirection) {
  	let index = laserDirection - 1;
    
    	if (!this.isDestroyed(laserDirection)) {
      
		if(this.sides[(index + 1) % 4]) return ((index + 1) % 4) + 1;
      
      		else return  index - 1 === -1 ? 4 : index;    
    }
  }

class Anubis extends Piece{
	constructor(startingRotation,coordX,coordY){
  		super(startingRotation,coordX,coordY,[true,false,false,false]);
  	}
  
 	isDestroyed(laserDirection) {

    		laserDirection -= 1;
    		if (this.sides[laserDirection]) return false;

    		else return true;

  	}
  
  	reflectLaser(laserDirection){
  		if(!this.isDestroyed(laserDirection)){
    		//0 represents that the laser just stops, and does not reflect anywhere.
    		return 0;
    		}
  	}
}

class Pharaoh extends Piece{
	constructor(startingRotation,coordX,coordY){
  		super(startingRotation,coordX,coordY,[false,false,false,false]);
  	}
  	//Pharaoh is always destroyed if hit by the laser
  	isDestroyed(laserDirection){
  		return true;
  	}
  
  	reflectLaser(laserDirection){
  		return 0;
  	}
}

class Scarab extends Piece{
	constructor(startingRotation,coordX,coordY){
  	super(startingRotation,coordX,coordY,[true,true,true,true]);
  	}
  
  	isDestroy(laserDirection){
  		return false;
  	}
  
  	reflectLaser(laserDirection){
  		laserDirection -= 1;
    		let mirrors = null;
		
  		if(this.rot === 0 || this.rot === 180){
    			mirrors = [[1,4],[3,2],[3,2],[1,4]];
      
    	
    		}
    
    		else if(this.rot === 90 || this.rot === 270){
    			mirrors = [[1,2],[1,2],[3,4],[3,4]];
    
    		}
    
    	return mirrors[laserDirection][(laserDirection + 1) % 2]
  }
}
