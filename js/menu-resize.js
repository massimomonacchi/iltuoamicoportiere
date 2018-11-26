
var x,y;

var newCodes = function() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	
	return {
        x: x,
        y: y
    };
};


function menu_none(){
	
		  document.getElementById("logo").style.left ="0px";
		  document.getElementById("nav").style.display ="none";
		  document.getElementById("logo").style.width = "100%";
		  document.getElementById("logo").style.textAlign = "center";
}

function menu_inline(){
		  document.getElementById("nav").style.display ="inline";
		  document.getElementById("logo").style.left ='90px';
		  document.getElementById("logo").style.display = "inline";
		  document.getElementById("logo").style.textAlign = "left";
}


//funzione controllo all'apertura della pagina
function page_load(){
	if( x < 1099){
		menu_none();
	}
	else{
		menu_inline();
	}
}




//code MAIN sstart here
var codes = newCodes();
 x =codes.x;
 y =codes.y;

page_load();

$(window).on('resize', function(){
      var win = $(this); //this = window
	  var amb = win.width();
      if (amb>1099){
		  menu_inline();
	  }
	  else{
		  menu_none();
	  }
	  x = amb;
});



