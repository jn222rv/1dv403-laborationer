"use strict"

    
var MessageBoard = {
    
    messages: [],
    numberOfMessages: 0,
    
    init:function(e){
         
        var node = document.querySelector("#button");
        
        var textField = node.parentNode.querySelector("input");
        
        var addMessage = function(){
             
            if(/\S/.test(textField.value))
            {
                var newMessage = new Message(textField.value,new Date());
                MessageBoard.messages.push(newMessage);
                
                MessageBoard.renderMessages();
            }
            
        };
        
        textField.addEventListener("keypress",function(e){
             if(!e) e = window.event;
             
             if(e.keyCode===13)
             {
                 addMessage();
             }
        });
        
        node.addEventListener("click", addMessage);
        
        MessageBoard.renderNumberOfMessages();
                
        console.log("init() is done");
    },
    
    renderNumberOfMessages:function(){
        var numberDiv = document.querySelector("#numberOfMessages p");
        numberDiv.innerHTML = "Antal meddelanden: "+MessageBoard.numberOfMessages;
    },
    
    renderMessages: function(){
        document.getElementById("messageArea").innerHTML = "";
        
        for(var i = 0; i < MessageBoard.messages.length; i++)
        {
            MessageBoard.renderMessage(i);
        }
        
        MessageBoard.numberOfMessages = MessageBoard.messages.length;
        MessageBoard.renderNumberOfMessages();
    },
    
    renderMessage: function(messageID){
        
        var div = document.getElementById("messageArea");
        var p = document.createElement("p");
        var date = document.createElement("p");
        var newDiv = document.createElement("div");
        var closeImg = document.createElement("img");
        var timeImg = document.createElement("img");
        
        closeImg.alt="Close";
        closeImg.setAttribute("src","img/close.jpg");
        closeImg.addEventListener("click",function(){
            MessageBoard.removeMessages(messageID);
        });
        
        timeImg.alt="Time";
        timeImg.setAttribute("src","img/time.jpg");
        timeImg.addEventListener("click",function(){
            alert("Inlägget skapades "+MessageBoard.messages[messageID].getDateText()+" klockan "+MessageBoard.messages[messageID].getTimeText());
        });
        
        
        newDiv.appendChild(closeImg);
        newDiv.appendChild(timeImg);
        
        
        newDiv.className = "message";
        
        p.appendChild(document.createTextNode(MessageBoard.messages[messageID].getText()));
        newDiv.appendChild(p);
        
        
        date.appendChild(document.createTextNode(MessageBoard.messages[messageID].getTimeText()));
        newDiv.appendChild(date);
        
        date.className = "date";
        
        div.appendChild(newDiv);
    },
    
    removeMessages: function(messageID){
        MessageBoard.messages.splice(messageID,1);
        MessageBoard.renderMessages();
    }
}


window.onload = MessageBoard.init;