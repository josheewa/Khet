"use strict"
let yCoord1 = 9;
        
var player1Tiles = document.getElementById("player1").querySelectorAll(".square");
var player2Tiles = document.getElementById("player2").querySelectorAll(".square");
        
player1Tiles.forEach((item,index) =>{
    if(index % 10 === 0 ) yCoord1--;  
    item.setAttribute('X', 9 - (index % 10)); 
    item.setAttribute('Y', (yCoord1 % 9) - 1);   
});
        
yCoord = 0;

        
player2Tiles.forEach((item,index) =>{
  if(index % 10 === 0 ) yCoord1++;  
    item.setAttribute('X', index % 10); 
    item.setAttribute('Y', (yCoord1 % 9) - 1);   
});

var khetBoard = new Board(1);








