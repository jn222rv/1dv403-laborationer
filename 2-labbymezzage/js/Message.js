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

Message.prototype.getTimeText = function(){
    var date = this.getDate();
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
};

Message.prototype.getDateText = function(){
    var date = this.getDate();
    
    var months = ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"];
    
    return "den "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
};

Message.prototype.getHTMLText = function(){
    var currentMessage = this.getText();
    
    console.log(currentMessage.replace(/[\n\r]/g, "<br/>"));
    
    return currentMessage.replace(/[\n\r]/g, "<br>");
};