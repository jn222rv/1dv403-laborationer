"use strict"

var MemoryGame = {
    
    array: [],
    
    init: function(e){
        
        MemoryGame.array = RandomGenerator.getPictureArray(2,2);
        
        //MemoryGame.random = new MemoryGame.RandomGenerator();
        //MemoryGame.array = MemoryGame.random.getPictureArray(2,2);
        console.log(MemoryGame.array);
    }
}



window.onload = MemoryGame.init;