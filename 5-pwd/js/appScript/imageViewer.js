"use strict"

function ImageViewerWindow(){
    
    this.pictureWidth = [];
    this.pictureHeight = [];
    
    Window.call(this, 400,350); 
    
    this.createImageViewerWindow();
};

ImageViewerWindow.prototype.createImageViewerWindow = function(){
    
        this.createWindow("ImageViwer","img/pic2.jpg");
        
        this.startLoading();
        
        this.loadImages(this);
        
        var array = this.pictureHeight;
        var self = this;
        
        this.content.addEventListener("click",function(event){
            self.showPicture(event,array);
        });
};

ImageViewerWindow.prototype.loadImages = function(myWindow){
    
        var content = myWindow.content;
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
      
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                myWindow.footer.innerHTML = "";
                
                var imgArr = JSON.parse(xhr.responseText);
                
                var width = [], height = [];
                
                for(var i = 0; i < imgArr.length;i++)
                {
                    width.push(imgArr[i].thumbWidth);
                    height.push(imgArr[i].thumbHeight);
                    
                    myWindow.pictureWidth.push(imgArr[i].width);
                    myWindow.pictureHeight.push(imgArr[i].height);
                    
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
                    img.setAttribute("id",i);
                    
                    imgBox.appendChild(img);
                    content.appendChild(imgBox);
                }
            }
        };
        
        xhr.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",true);
        xhr.send(null);
};

ImageViewerWindow.prototype.showPicture = function(e,array){
    
    var node = e.target;
    
    if(node.nodeName === "IMG" && node.className !== "cross")
    {
        var id = node.getAttribute("id");
        //console.log(array[id]);
        var myWindow = new Window(array[id],array[id]);
        myWindow.createWindow("ImageViwer","img/pic2.jpg");
        
        
        //console.log(myWindow.appMain);
        myWindow.setFocus();
    }
};