"use strict"

function Quiz()
{
    var xhr = null;
    var url = "http://vhost3.lnu.se:20080/question/1";
    var object = null;
    var p = null;
    var wrongMessage = null;
    var numberOfGuesses = 0;
    var answer = null;
  
    this.init = function(){
      
        xhr = new XMLHttpRequest();
      
        var form = document.querySelector("form");
      
        answer = form.elements["answer"];
        answer.focus();
        
        var div = document.createElement("div");
        p = document.getElementById("question");
        wrongMessage = document.createElement("p");
        p.innerHTML = "";
        wrongMessage.innerHTML = "";
        div.appendChild(wrongMessage);
        document.querySelector("body").appendChild(div);
        
        var a = document.createElement("a");
        var img = document.createElement("img");
        img.src = "img/refresh.png"
        a.setAttribute("href","#");
        a.appendChild(img);
        div.appendChild(a);
        
        a.addEventListener("click",restart);
        
        form.onsubmit = function(e){
            xhr.open("POST",object["nextURL"],true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({answer:answer.value}));
            return false;
        };
        
        xhr.onreadystatechange = function(){
      
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200)
            {
                object = JSON.parse(xhr.responseText);
                if(object.hasOwnProperty("question"))
                {
                    drawQuestion();
                }
                else
                {
                    numberOfGuesses += 1;
                    checkIfCorrect();
                }
            }
            else if(xhr.status === 400)
            {
                wrongMessage.innerHTML = "Det var fel!";
                numberOfGuesses += 1;
            }
        }
            
          
        };
        
        xhr.open("GET",url,true);
        xhr.send(null);
    };

    function drawQuestion(){
        p.innerHTML = object["question"];
    };
    
    function checkIfCorrect(){
        
        if(object.hasOwnProperty("nextURL"))
        {
            if(/Correct/.test(object["message"]))
            {
                answer.value = "";
                answer.focus();
                xhr.open("GET",object["nextURL"],true);
                xhr.send(null);
                wrongMessage.innerHTML = "";
            }
        }
        else
        {
            wrongMessage.innerHTML = "";
            p.innerHTML = "Det tog totalt " + numberOfGuesses + " antal gissnignar";
            document.querySelector("form").elements["button"].disabled = true;
            answer.value = null;
            answer.disabled = true;
        }
    };
    
    function restart(){
        console.log("restart engae");  
    };
  
};