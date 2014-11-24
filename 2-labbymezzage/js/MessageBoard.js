"use strict"

    
var MessageBoard = {
    
    messages: [],
    
    init:function(e){
         
        var node = document.querySelector("#button");
        
        node.addEventListener("click", function(){
                
            var text = node.parentNode.querySelector("input");    
            MessageBoard.messages.push(text.value);
            console.log(MessageBoard.messages);
            
        });
        
        
        console.log("init() is done");
    }
}


window.onload = MessageBoard.init;