"use strict"

var DESKTOP = DESKTOP||{};

function Window(width,height){
    
    this.appMain = null;
    this.topbar = null;
    this.content = null;
    this.footer = null;
    this.appTitle = null;
    this.appIcon = null;
    this.width = width;
    this.height = height;
    
    this.createWindow = function(text,url){
        
        this.appMain = document.createElement("div");
        this.topbar = document.createElement("div");
        this.content = document.createElement("div");
        this.footer = document.createElement("div");
        this.appTitle = document.createElement("p");
        this.appIcon = document.createElement("img");
          
        this.appMain.style.width = this.width+"px"; 
        this.appMain.style.height = this.height+"px"; 
         
        this.appTitle.innerHTML = text;
        
        this.appIcon.setAttribute("src",url);
        
        this.topbar.className = "topbar";
        this.content.className = "content";
        this.appMain.className = "appWindow";
        this.footer.className = "footer";
        
        var img = document.createElement("img");
        img.setAttribute("src","img/x.jpg")
        img.className = "cross";
        
        var self = this;
        img.addEventListener("click",function(){
            self.removeWindow(self.appMain);
        });
        
        this.topbar.appendChild(img);
        
        this.content.style.height = (this.height-40)+"px";
        
        this.topbar.appendChild(this.appIcon);
        this.topbar.appendChild(this.appTitle);
        this.appMain.appendChild(this.topbar);
        this.appMain.appendChild(this.content);
        this.appMain.appendChild(this.footer);
    
        DESKTOP.Main.numberOfWindows += 1;
       
        if(DESKTOP.Main.lastX+this.height>window.innerHeight||DESKTOP.Main.lastX<0)DESKTOP.Main.directionX*=-1;
        
        this.appMain.style.left = DESKTOP.Main.numberOfWindows*15+"px";
        this.appMain.style.top = (DESKTOP.Main.lastX+DESKTOP.Main.directionX)+"px";
        DESKTOP.Main.lastX += DESKTOP.Main.directionX; 
        
        document.querySelector("body").appendChild(this.appMain);
           
        //console.log(document.querySelector("#focus"));
        
        this.appMain.addEventListener("click",function(e){
            var node = e.target;
            
            if(node.nodeName !== "IMG")
            {
                if(document.querySelector("#focus"))document.querySelector("#focus").removeAttribute("id");
                this.setAttribute("id","focus");
            }
        });
        
        //this.setFocus(); 
    };
    
    this.startLoading = function(){
        
        var img = document.createElement("img");
        img.setAttribute("src","img/load.gif");
        img.className = "gif";
        
        var p = document.createElement("p");
        p.innerHTML = "Loading";
        
        this.footer.appendChild(p);
        this.footer.appendChild(img);
    };
    
    this.setFocus = function(e){
            console.log(this.appMain);
            if(document.querySelector("#focus"))document.querySelector("#focus").removeAttribute("id");
            this.appMain.setAttribute("id","focus");
    };
    
    this.removeWindow = function(self){
        console.log(self);
        while(self.firstChild){
            self.removeChild(self.firstChild);
        }
        self.remove();
    };
}

/*
Window.prototype.createWindow = function(text,url){
    
        this.appMain = document.createElement("div");
        this.topbar = document.createElement("div");
        this.content = document.createElement("div");
        this.footer = document.createElement("div");
        this.appTitle = document.createElement("p");
        this.appIcon = document.createElement("img");
          
        this.appMain.style.width = this.width+"px"; 
        this.appMain.style.height = this.height+"px"; 
         
        this.appTitle.innerHTML = text;
        
        this.appIcon.setAttribute("src",url);
        
        this.topbar.className = "topbar";
        this.content.className = "content";
        this.appMain.className = "appWindow";
        this.footer.className = "footer";
        
        this.content.style.height = (this.height-40)+"px";
        
        this.topbar.appendChild(this.appIcon);
        this.topbar.appendChild(this.appTitle);
        this.appMain.appendChild(this.topbar);
        this.appMain.appendChild(this.content);
        this.appMain.appendChild(this.footer);
    
        DESKTOP.Main.numberOfWindows += 1;
        this.appMain.style.left = (DESKTOP.Main.numberOfWindows*15)+"px";
        this.appMain.style.top = (DESKTOP.Main.numberOfWindows*15)+"px";
        
        document.querySelector("body").appendChild(this.appMain);
};*/