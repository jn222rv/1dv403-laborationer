"use strict"

    
var MessageBoard = {
    
    messages: [],
    numberOfMessages: 0,
    
    init:function(e){
         
        var node = document.querySelector("#button");
        
        node.addEventListener("click", function(){
                
            var text = node.parentNode.querySelector("input");   
            
            if(/\S/.test(text.value))
            {
                
                MessageBoard.messages.push(text.value);
                
                console.log(MessageBoard.messages);
                
                var newElement = document.createElement("p");
                var div = document.getElementById("messageArea");
                
                newElement.appendChild(document.createTextNode(MessageBoard.messages[MessageBoard.messages.length-1]));
                div.appendChild(newElement);
                
                document.innerHTML = div;
                
                MessageBoard.numberOfMessages += 1;
                MessageBoard.increment();
            }
            
        });
        
        MessageBoard.increment();
                
        console.log("init() is done");
    },
    
    increment:function(){
        var numberDiv = document.querySelector("#numberOfMessages p");
        numberDiv.innerHTML = "Antal meddelanden: "+MessageBoard.numberOfMessages;
    }
}


window.onload = MessageBoard.init;