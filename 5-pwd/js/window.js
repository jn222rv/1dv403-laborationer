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
          
        //this.appMain.style.width = this.width+"px"; 
        //this.appMain.style.height = this.height+"px"; 
         
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
        
        this.content.style.width = this.width+"px"; 
        this.content.style.height = (this.height)+"px";
        
        this.topbar.appendChild(this.appIcon);
        this.topbar.appendChild(this.appTitle);
        this.appMain.appendChild(this.topbar);
        this.appMain.appendChild(this.content);
        this.appMain.appendChild(this.footer);
    
        DESKTOP.Main.numberOfWindows += 1;
       
        
        this.appMain.style.left = (DESKTOP.Main.lastY+DESKTOP.Main.directionY)+"px";
        this.appMain.style.top = (DESKTOP.Main.lastX+DESKTOP.Main.directionX)+"px";
        DESKTOP.Main.lastX += DESKTOP.Main.directionX; 
        DESKTOP.Main.lastY += DESKTOP.Main.directionY; 
        
        if(DESKTOP.Main.lastX+this.height>window.innerHeight-100||(DESKTOP.Main.lastX<0+50&&DESKTOP.Main.directionX<0))DESKTOP.Main.directionX*=-1;
        if(DESKTOP.Main.lastY+this.width>window.innerWidth-100||(DESKTOP.Main.lastY<0+50&&DESKTOP.Main.directionY<0))DESKTOP.Main.directionY*=-1;
        
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
        
        this.appMain.addEventListener("mousedown",function doSomething(e) {
        	var posx = 0;
        	var posy = 0;
        	if (!eg) var eg = window.event;
        	if (eg.pageX || eg.pageY) 	{
        		posx = eg.pageX;
        		posy = eg.pageY;
        	}
        	else if (eg.clientX || eg.clientY) 	{
        		posx = eg.clientX + document.body.scrollLeft
        			+ document.documentElement.scrollLeft;
        		posy = eg.clientY + document.body.scrollTop
        			+ document.documentElement.scrollTop;
        	}
        	// posx and posy contain the mouse position relative to the document
        	// Do something with this information
        	
        	console.log(posx);
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