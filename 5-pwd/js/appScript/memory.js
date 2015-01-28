"use strict"

function MemoryWindow(){
    
    Window.call(this, 300,300); 
    
    this.createMemoryWindow();
}

MemoryWindow.prototype.createMemoryWindow = function(){
    
        this.createWindow("Memory Title","img/pic2.jpg");
        
        var memory = new MemoryGame(this.content);
        memory.createMemory();
    
};

function MemoryGame(Node){
    
    var array = [];
    var row = 4;
    var col = 4;
    var cardsFlipped = 0;
    var flippedArr = [];
    var completePairs = [];
    var pairs = 0;
    var timeoutID = null;
    var node = Node;
    var random = new RandomGenerator();
    
    this.createMemory = function(){
        
        console.log("done");
        createTable(node);
    };
    
    function createTable(){
        
        array = random.getPictureArray(row,col);
        
        var div = node;
        
        var table = document.createElement("table");
        
        if((row*col)%2===1)
        {
            row = 4;
            col = 4;
        }
        
        for(var i = 0; i < row; i++)
        {
            var tr = document.createElement("tr");
            
            for(var j = 0; j < col; j++)
            {
                var data = document.createElement("td");
                var img = document.createElement("img");
                var a = document.createElement("a");
                
                img.setAttribute("src","img/MemoryPics/"+array[(i*col+j)]+".jpg");
                img.className = "hidden";
                
                a.setAttribute("href","#");
                
                a.appendChild(img);
                data.appendChild(a);
                
                tr.appendChild(data);
            }
            
            table.appendChild(tr);
        }
        
                
        table.addEventListener("click",flipCard);
        table.addEventListener("keypress",flipCard);
                
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","Reset");
        button.addEventListener("click",reset);
        
        div.appendChild(table);
        div.appendChild(button);
    }
    
    function flipCard(e){
    
        var node = e.target;
        
        if(node.nodeName === "A")
        {
            node = node.firstChild;
        }
                
        if(node.nodeName === "IMG")
        {
            if(!(flippedArr[0]&&node===flippedArr[0]))
            {
                if(cardsFlipped < 2&&checkForComplete(node))
                {
                    node.className = "normal";
                    
                    flippedArr.push(node);
                    cardsFlipped++;
                }
                
                if(cardsFlipped === 2)       
                {
                    checkMatch();
                }
            }
        }
    }
    
    function checkForComplete(node){
        for(var i = 0; i < completePairs.length;i++)
        {
            if(node.getAttribute("src")===completePairs[i])
            {
                return false;
            }
        }
        
        return true;
    }
    
    function checkMatch(){
        
        if(flippedArr[0].getAttribute("src") === flippedArr[1].getAttribute("src"))
        {
            completePairs.push(flippedArr[0].getAttribute("src"));
            pairs++;
            cardsFlipped = 0;
            flippedArr = [];
            
            if(pairs === (row*col)/2)
            {
                winningMessage();
                var button = document.querySelector("input");
                button.setAttribute("value","Play Again?");
            }
        }
        else
        {
            if(!timeoutID)
            {
                timeoutID = window.setTimeout(unflipCards,1000);
            }
        }
    }
    
    function unflipCards(){
        
        for(var i = 0;i < flippedArr.length;i++)
        {
            var node = flippedArr[i];
            node.className = "hidden";
        }
        
        window.clearTimeout(timeoutID);
        timeoutID = null;
        
        cardsFlipped -= 2;
        flippedArr.splice(0,2);
    }
    
    function reset(){
        while (node.firstChild)
        {
            node.removeChild(node.firstChild);
        }
        
        console.log("reset");
        
        cardsFlipped = 0;
        pairs = 0;
        flippedArr = [];
        completePairs = [];
        
        window.clearTimeout(timeoutID);
        timeoutID = null;
        
        if(document.querySelector(".text"))
        {
            node.removeChild(node.lastChild);
        }
        
        createTable();
    }
    
    function winningMessage(){
        
        var div = document.createElement("div");
        div.className = "text";
        
        var p = document.createElement("p");
        p.innerHTML = "Du vann!!";
        
        div.appendChild(p);
        
        node.appendChild(div);
    }
}

function RandomGenerator(){

	
	this.getPictureArray = function(rows, cols)
	{
		var numberOfImages = rows*cols;
		var maxImageNumber = numberOfImages/2;
	
	   	var imgPlace = [];
	
	   for(var i=0; i<numberOfImages; i++)
		  imgPlace[i] = 0;
	
		for(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)
		{		
			var imageOneOK = false;
			var imageTwoOK = false;
			
			do
			{
				if(imageOneOK == false)
				{
					var randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
					if( imgPlace[randomOne] == 0 )
					{
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}
				
				if(imageTwoOK == false)
				{
					var randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
					if( imgPlace[randomTwo] == 0 )
					{
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}			
			}
			while(imageOneOK == false || imageTwoOK == false);		
		}
		
		return imgPlace;
	};
}
