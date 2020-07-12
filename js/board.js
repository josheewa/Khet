"use strict"

class Board{
	//configuration can be 1,2,3
  //1 = Classic
  //2 = IMHOTEP
  //3 = Dynasty
	constructor(configuration){
  	this.board = new Array(10);
    	this.board.fill(new Array(8));
    
    	this.board.forEach((x) => {
    		x.fill(0);
    	});
    	
    
    
    	this.selectedPiece = null;
    
    	this.selectedPieceX = null;
    	this.selectedPieceY = null;   
  }
  
  selectPiece(x,y){
  
	if(x < this.board.size() && x > -1){
    		return "X out of Bounds";//this should be a thrown exception
	}
	if(y < 9 && y > -1){
      		return "Y out of Bounds";
	}
    
	if(this.board[x][y] === 0){
        
               	return "No Piece on that Square";
    	}
    
    	this.selectedPiece = this.board[x][y];
    	this.selectedPieceX = x;
    	this.selectedPieceY = y;
    
    	return 0;
              
  }
  
  movePiece(x,y){
  	
	let pieceExceptionRow = null;
  	let pieceExceptionSquare1 = null;
  	let pieceExceptionSquare2 = null;
  
  	if(this.selectedPiece === null) return "Piece Not Selected";
    
    	if(x < this.board.size() && x > -1){
    		return "X out of Bounds";//this should be a thrown exception
    	}
	  
    	if(y < 9 && y > -1){
      		return "Y out of Bounds";
    	}
    	
    	if((x+ 1) !== this.selectedPieceX && (x - 1) !== this.selectedPieceX) return "Impossible Move"
    	if((y + 1) !== this.selectedPieceY && (y - 1) !== this.selectedPieceY) return "Impossible Move";
        	
          
    	if(this.selectedPiece.player === 2){
         	pieceExceptionRow = 0;
            
         	pieceExceptionSquare1 = [1,0];
         	pieceExceptionSquare2 = [1,7];
    	}
          
    	else if(this.selectedPiece.player === 1){
          	pieceExceptionRow = 9;
            
            	pieceExceptionSquare1 = [8,0];
            	pieceExceptionSquare2 = [8,7];
    	}
    //can be condensed to one if statement
    	if(pieceExceptionRow === x) return "Impossible Move";
    
    	if(JSON.stringify(pieceExceptionSquare1) === JSON.stringify([x,y])) return "Impossible Move";
    	if(JSON.stringify(pieceExceptionSquare2) === JSON.stringify([x,y])) return "Impossible Move";
    
    	if(this.selectedPiece instanceof Scarab){
    
    		if(this.board[x][y] != 0){
      		let tmpPiece = this.board[x][y];
        
        	this.board[x][y] = this.selectedPiece;
        	this.board[this.selectedPieceX][this.selectedPieceY] = tmpPiece;
        
        
        	return 0;
      		}
    	}
    
    	if(this.selectedPiece instanceof Sphinx) return "Impossible to Move";
    
    	if(this.board[x][y] === 0){
    		this.board[x][y] = this.selectedPiece;
      		this.board[this.selectedPieceX][this.selectedPieceY] = 0;
    	}
    
    	return 0;
           
      
  }
  
  rotatePiece(rotationIncrement){
  	
	if(this.selectedPiece === null) return "Piece Not Selected";
    
    	if(this.selectedPiece instanceof Sphinx){
    
    		let totalRotation = this.selectedPiece.rotation + rotationIncrement; 
      
    		if(this.selectedPiece.player === 1){
      
      			if(totalRotation === 0 || totalRotation === 270) return "Not Possible Rotation";
        
      		}
      
      		else if(this.selectedPiece.player === 2){
			
      		if(totalRotation === 90 || totalRotation === 180) return "Not Possible Rotation";
      		}
      
    	}
    
    	if(rotationIncrement === 90) this.selectedPiece.rotate90deg(false);
    
    	else if(rotationIncrement === -90) this.selectedPiece.rotate90deg(true);
    
    	else{
    		return "Impossible Rotation";
    	}
    
    	return 0;
    
    
    
  }
  

    
  
}
