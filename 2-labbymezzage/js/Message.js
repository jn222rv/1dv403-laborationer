"use strict"

function Message(message,date){
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(_text){
        message = _text;
    }
    
    this.getDate = function(){
        return date;
    }
    
    this.setDate = function(_date){
        date = _date;
    }
    
};

Message.prototype.getDateText = function(){
    var date = this.getDate();
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}