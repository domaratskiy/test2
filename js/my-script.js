var tabButtons=document.querySelectorAll(".portfolioProdject .p-btnContainer button");
var tabPanels=document.querySelectorAll(".portfolioProdject .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    

    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0, '#e84c3d');

$('.r-watch__video').parent().click(function () {

    if(	$(this).children(".r-watch__video").get(0).paused){       
 		$(this).children(".r-watch__video").get(0).play();   
		$(this).children(".playpause").fadeOut();
    }
    else{      
		$(this).children(".r-watch__video").get(0).pause();
    	$(this).children(".playpause").fadeIn();
    }
});