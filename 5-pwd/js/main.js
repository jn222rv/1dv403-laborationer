"use strict"

var DESKTOP = DESKTOP||{};

DESKTOP.Main = new Desktop();

function Desktop(){
    
    this.numberOfWindows = 0;
    
    this.init =  function(){
        document.getElementById("imageViewer").addEventListener("click",function(){
            var myApp = new ImageViewer();
            myApp.createImgWindow();
        });
    }
}

window.onload = DESKTOP.Main.init(); 