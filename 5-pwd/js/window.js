"use strict"

var DESKTOP = DESKTOP||{};

function Window(){
    
    this.createWindow = function(){
          
        var appMain = document.createElement("div");
        var topbar = document.createElement("div");
        var content = document.createElement("div");
        var footer = document.createElement("div");
        var p = document.createElement("p");  
          
        p.innerHTML = "Test";
        
        topbar.appendChild(p);
        
        topbar.className = "topbar";
        content.className = "content";
        appMain.className = "appWindow";
        footer.className = "footer";
        
        appMain.appendChild(topbar);
        appMain.appendChild(content);
        appMain.appendChild(footer);
    
        DESKTOP.Main.numberOfWindows += 1;
        appMain.style.left = (DESKTOP.Main.numberOfWindows*15)+"px";
        appMain.style.top = (DESKTOP.Main.numberOfWindows*15)+"px";
        
        document.querySelector("body").appendChild(appMain);
        
    };
};