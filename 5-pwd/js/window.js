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
};

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
};