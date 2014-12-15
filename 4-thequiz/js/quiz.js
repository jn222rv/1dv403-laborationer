"use strict"

function Quiz()
{
    var url = "http://vhost3.lnu.se:20080/question/1";
    var xhr = null;
    var object = null;
    var numberOfGuesses = 0;
  
    this.init = function(){
      
        xhr = new XMLHttpRequest();
      
        var form = document.querySelector("form");
      
        var answer = form.elements["answer"];
        answer.focus();
        
        var div = document.getElementById("main");
        var p = document.getElementById("question");
        var message = document.createElement("p");
        p.innerHTML = "";
        message.innerHTML = "";
        div.appendChild(message);
        document.querySelector("body").appendChild(div);
        
        var a = document.createElement("a");
        var img = document.createElement("img");
        img.src = "img/refresh.png";
        a.setAttribute("href","#");
        img.className = "unactive";
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
                    drawQuestion(p);
                }
                else
                {
                    numberOfGuesses += 1;
                    checkIfCorrect(answer,p,message);
                }
            }
            else if(xhr.status === 400)
            {
                message.innerHTML = answer.value+" var fel!";
                answer.value = null;
                answer.focus();
                message.className = "wrong";
                numberOfGuesses += 1;
            }
        }
            
          
        };
        
        xhr.open("GET",url,true);
        xhr.send(null);
    };

    function drawQuestion(p){
        p.innerHTML = object["question"];
    };
    
    function checkIfCorrect(answer,p,message){
        
        if(object.hasOwnProperty("nextURL"))
        {
            if(/Correct/.test(object["message"]))
            {
                answer.value = "";
                answer.focus();
                xhr.open("GET",object["nextURL"],true);
                xhr.send(null);
                message.innerHTML = "Det var korrekt";
                message.className = "right";
            }
        }
        else
        {
            message.innerHTML = "";
            p.innerHTML = "Det tog totalt " + numberOfGuesses + " antal gissnignar";
            document.querySelector("form").elements["button"].disabled = true;
            answer.value = null;
            answer.disabled = true;
            document.querySelector(".unactive").className = "active";
        }
    };
    
    function restart(){
        numberOfGuesses = 0;
        var answer = document.querySelector("form").elements["answer"];
        var button = document.querySelector("form").elements["button"];
        answer.disabled = false;
        button.disabled = false;
        answer.focus();
        
        document.querySelector(".active").className = "unactive";
        
        xhr.open("GET",url,true);
        xhr.send(null);
    };
  
};