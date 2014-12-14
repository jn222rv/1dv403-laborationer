function Quiz()
{
    var xhr = null;
    var url = "http://vhost3.lnu.se:20080/question/1";
    var object = null;
    var p = null;
  
    this.init = function(){
      
        xhr = new XMLHttpRequest();
      
        var form = document.querySelector("form");
      
        var answer = form.elements["answer"];
        answer.focus();
        
        var div = document.createElement("div");
        p = document.createElement("p");
        p.innerHTML = "";
        div.appendChild(p);
        document.querySelector("body").appendChild(div);
      
        form.onsubmit = function(e){
            xhr.open("POST",object["nextURL"],true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({answer:"2"}));
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
                    checkIfCorrect();
                }
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
        if(/Correct/.test(object["message"]))
        {
            console.log("jag var fcoreett");
            xhr.open("GET",object["nextURL"],true);
            xhr.send(null);
        }
    };
  
};