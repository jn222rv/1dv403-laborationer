"use strict"

function RssWindow(){
    
    Window.call(this, 300,350); 
    
    this.createRssWindow();
}

RssWindow.prototype.createRssWindow = function(){
        
        this.createWindow("Rss Winow","img/pic3.jpg");
        
        this.startLoading();
        
        this.setFeed(this);
};

RssWindow.prototype.setFeed = function(myWindow){
    
    
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
      
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                myWindow.footer.innerHTML = "";
                myWindow.content.innerHTML = this.responseText;
            }
        };
        
        xhr.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"),true);
        xhr.send(null);
    
};