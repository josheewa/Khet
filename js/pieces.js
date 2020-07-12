class Piece{
//specify the starting position, rotation(0,90,180,270) of the Piece.
//the sides parameter is supposed to get an array of size 4 filled with booleans true or false that represent 
//if a laser can hit that side without the piece getting destroyed.
	constructor(startingRotation,player,sides){
  
  		this.rot = startingRotation % 360;
    		
    
    		//the true in the sides array represent the sides that can be hit with
    		//a laser without the piece being destroyed
    		this.sides = sides;
		
		//Which players piece
		this.player = player;
    
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
  
	
	get player(){
		return this.player;
	}
  
}


class Pyramid extends Piece {
	
	constructor(startingRotation,player) {

    		super(startingRotation, player ,[true, false, false, true]);

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
}

class Anubis extends Piece{
	constructor(startingRotation,player){
  		super(startingRotation, player ,[true,false,false,false]);
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
	
	constructor(startingRotation,player){
  		super(startingRotation,player,[false,false,false,false]);
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
	
	constructor(startingRotation,coordX,coordY,player){
  		super(startingRotation,player,[true,true,true,true]);
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

class Sphinx extends Piece{

	constructor(startingRotation,player){
  		super(startingRotation,player,[false,false,false,false]);
  	}
  
  	isDestroyed(laserDirection){
  		return false;
  	}
  
  	reflectLaser(laserDirection){
  		return 0;
  	}
}
