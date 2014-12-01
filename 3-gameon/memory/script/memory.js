"use strict"

var MemoryGame = {
    
    array: [],
    row: 4,
    column: 3,
    
    init: function(e){
        
        MemoryGame.array = RandomGenerator.getPictureArray(MemoryGame.row,MemoryGame.column);
        
        console.log(MemoryGame.array);
        
        MemoryGame.createTable();
    },
    
    createTable: function(){
        var div = document.querySelector("#table");
        console.log(div);
        
        var table = document.createElement("table");
        
        for(var i = 0; i < MemoryGame.row; i++)
        {
            var tr = document.createElement("tr");
            
            for(var j = 0; j < MemoryGame.column; j++)
            {
                var data = document.createElement("td");
                var img = document.createElement("img");
                
                img.setAttribute("src","pics/0.png");
                
                data.appendChild(img);
                
                tr.appendChild(data);
            }
            
            table.appendChild(tr);
        }
        
        div.appendChild(table);
    }
}



window.onload = MemoryGame.init;