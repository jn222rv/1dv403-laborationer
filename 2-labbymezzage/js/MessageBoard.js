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
                var newMessage = new Message(text.value,new Date());
                MessageBoard.messages.push(newMessage);
                
                var newElement = document.createElement("p");
                var dateElement = document.createElement("p");
                var divElement = document.createElement("div");
                var div = document.getElementById("messageArea");
                
                dateElement.className = "date";
                
                var currentMessage = MessageBoard.messages[MessageBoard.messages.length-1];
                
                newElement.appendChild(document.createTextNode(MessageBoard.messages[MessageBoard.messages.length-1].getText()));
                dateElement.appendChild(document.createTextNode(MessageBoard.messages[MessageBoard.messages.length-1].getDateText()));
                divElement.appendChild(newElement);
                divElement.appendChild(dateElement);
                divElement.className = "message";
                
                div.appendChild(divElement);
                
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