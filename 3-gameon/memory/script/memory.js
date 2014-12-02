"use strict"

var MemoryGame = {
    
    array: [],
    row: 2,
    col: 3,
    cardsFlipped: 0,
    flippedArr: [],
    pairs: 0,
    timeoutID: null,
    
    init: function(e){
        
        MemoryGame.array = RandomGenerator.getPictureArray(MemoryGame.row,MemoryGame.col);
        
        console.log(MemoryGame.array);
        
        MemoryGame.createTable();
    },
    
    createTable: function(){
        var div = document.querySelector("#table");
        console.log(div);
        
        var table = document.createElement("table");
        
        if((MemoryGame.row*MemoryGame.col)%2===1)
        {
            MemoryGame.row = 4;
            MemoryGame.col = 4;
        }
        
        for(var i = 0; i < MemoryGame.row; i++)
        {
            var tr = document.createElement("tr");
            
            for(var j = 0; j < MemoryGame.col; j++)
            {
                var data = document.createElement("td");
                var img = document.createElement("img");
                var a = document.createElement("a");
                
                img.setAttribute("src","pics/0.png");
                img.setAttribute("number",(i*MemoryGame.col)+j);
                
                a.setAttribute("href","#");
                
                a.addEventListener("click",MemoryGame.flipCard);
                
                a.appendChild(img);
                data.appendChild(a);
                
                tr.appendChild(data);
            }
            
            table.appendChild(tr);
        }
        
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","Reset");
        button.addEventListener("click",MemoryGame.reset);
        
        div.appendChild(table);
        div.appendChild(button);
    },
    
    flipCard: function(e){
    
        var node = e.target;
        var number = node.getAttribute("number");
        
        if(!(MemoryGame.flippedArr[0]&&number===MemoryGame.flippedArr[0].getAttribute("number")))
        {
            if(MemoryGame.cardsFlipped < 2)
            {
                node.src = "pics/"+MemoryGame.array[number]+".png";
                
                MemoryGame.flippedArr.push(node);
                MemoryGame.cardsFlipped++;
            }
            
            if(MemoryGame.cardsFlipped === 2)
            {
                if(MemoryGame.flippedArr[0].getAttribute("src") === MemoryGame.flippedArr[1].getAttribute("src"))
                {
                    MemoryGame.pairs++;
                    MemoryGame.cardsFlipped = 0;
                    MemoryGame.flippedArr = [];
                    
                    if(MemoryGame.pairs === (MemoryGame.row*MemoryGame.col)/2)
                    {
                        MemoryGame.winningMessage();
                        var button = document.querySelector("input");
                        button.setAttribute("value","Play Again?");
                    }
                }
                else
                {
                    if(!MemoryGame.timeoutID)
                    {
                        MemoryGame.timeoutID = window.setTimeout(MemoryGame.unflipCards,1000);
                    }
                }
            }
        }
    },
    
    unflipCards: function(){
        
        for(var i = 0;i < 2;i++)
        {
            var node = MemoryGame.flippedArr[i];
            node.setAttribute("src","pics/0.png");
        }
        
        window.clearTimeout(MemoryGame.timeoutID);
        MemoryGame.timeoutID = null;
        
        MemoryGame.cardsFlipped = 0;
        MemoryGame.flippedArr = [];
    },
    
    reset: function(){
        var node = document.querySelector("#table");
        while (node.firstChild)
        {
            node.removeChild(node.firstChild);
        }
        
        MemoryGame.cardsFlipped = 0;
        MemoryGame.pairs = 0;
        MemoryGame.flippedArr = [];
        
        if(document.querySelector(".text"))
        {
            node = document.getElementById("main");
            node.removeChild(node.lastChild);
        }
        
        MemoryGame.init();
        
        console.log("Reset engage!!!")
    },
    
    winningMessage: function(){
        
        var div = document.createElement("div");
        div.className = "text";
        
        var p = document.createElement("p");
        p.innerHTML = "Du vann!!";
        
        div.appendChild(p);
        
        document.querySelector("#main").appendChild(div);
        
    }
}



window.onload = MemoryGame.init;