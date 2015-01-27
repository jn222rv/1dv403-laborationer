"use strict"

var DESKTOP = DESKTOP||{};

DESKTOP.Main = new Desktop();

function Desktop(){
    
    this.numberOfWindows = 0;
    this.lastX = 0;
    this.directionX = 15;
    
    this.init =  function(){
        document.getElementById("imageViewer").addEventListener("click",function(){
            var myImageViewer = new ImageViewerWindow();
        });
        document.getElementById("memory").addEventListener("click",function(){
            var myMemory = new MemoryWindow();
        });
        document.getElementById("rss").addEventListener("click",function(){
            var myRss = new RssWindow();
        });
    }
}

window.onload = DESKTOP.Main.init; 