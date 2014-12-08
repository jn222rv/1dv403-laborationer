"use stict"

function quizStart(){
  var form = document.querySelector("form");
  
  var answer = form.elements["answer"];
  answer.focus();
  
  
  form.onsubmit = function(e){
      console.log(form.firstChild.nodeValue);
      return false;
  }
  
};





window.onload = quizStart();