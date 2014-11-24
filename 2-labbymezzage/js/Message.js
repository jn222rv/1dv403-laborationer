"use strict"

function Message(message,date){
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(_text){
        message = _text;
    }
    
};