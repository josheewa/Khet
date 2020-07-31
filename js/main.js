//"use strict"

function main(){
let yCoord1 = 9;
        
        var player1 = document.getElementById("player1");
        var player2 = document.getElementById("player2");
        
        var player1Tiles = player1.getElementsByTagName("div");
        var player2Tiles = player2.getElementsByClassName("square");
        
        player1Tiles.forEach((item,index) =>{
                if(index % 10 === 0 ) yCoord1--;  
                item.setAttribute('X', 9 - (index % 10)); 
                item.setAttribute('Y', (yCoord1 % 9) - 1);   
        });
        
        yCoord1 = 0;

        
        player2Tiles.forEach((item,index) =>{
                if(index % 10 === 0 ) yCoord1++;  
                item.setAttribute('X', index % 10); 
                item.setAttribute('Y', (yCoord1 % 9) - 1);   
        });

        var khetBoard = new Board(1);
        
}

window.onload = main();








