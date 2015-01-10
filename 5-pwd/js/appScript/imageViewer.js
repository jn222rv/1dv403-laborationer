"use strict"

function ImageViewer(){
    
    var myWindow = null;
    
    this.createImgWindow = function(){
        myWindow = new Window(400,350);
        myWindow.createWindow("Img Title","img/pic1.jpg");
        
        var img = document.createElement("img");
        img.setAttribute("src","img/load.gif");
        img.className = "gif";
        
        myWindow.footer.appendChild(img);
        
        loadImages();
    }
    
    function loadImages(){
        var content = myWindow.content;
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
      
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                var imgArr = JSON.parse(xhr.responseText);
                
                var width = [], height = [];
                
                for(var i = 0; i < imgArr.length;i++)
                {
                    width.push(imgArr[i].thumbWidth);
                    height.push(imgArr[i].thumbHeight);
                    
                    var maxWidth = Math.max.apply(Math, width);
                    var maxHeight = Math.max.apply(Math, height);
                    
                    var imgBox = document.createElement("div");
                    imgBox.className = "imgBox";
                    imgBox.style.width = maxWidth+"px";
                    imgBox.style.height = maxHeight+"px";
                    
                    var img = document.createElement("img");
                    img.setAttribute("src",imgArr[i].thumbURL);
                    img.setAttribute("width",imgArr[i].thumbWidth+"px");
                    img.setAttribute("height",imgArr[i].thumbHeight+"px");
                    
                    imgBox.appendChild(img);
                    content.appendChild(imgBox);
                }
            }
        };
        
        xhr.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",true);
        xhr.send(null);
    };
    
};