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

function create_menu(){
	var div = document.createElement('div');
	div.className = 'menu';
	div.setAttribute("id", "menu");
	div.innerHTML = "<a id='prova12'> chi siamo</a> <a style='padding-left:80px;padding-right:80px;'> i nostri servizi</a> <a> lavora con noi</a>"
	var ele = document.querySelector('.content');
	ele.parentNode.insertBefore(div, ele);
	div.style.position = "fixed";
	div.style.top = document.getElementById('header').offsetHeight+"px";
	div.style.display = "none";
	div.style.width = "100%";
	div.style.textAlign = "center";
	div.style.display = "inline";
	div.style.fontSize= "20px";
	div.style.height = document.getElementById("prova12").offsetHeight+"px";
}


function menu_none(){
	document.getElementById("logo").style.left ="0px";
	document.getElementById("nav").style.display ="none";
	document.getElementById("logo").style.width = "100%";
	document.getElementById("logo").style.textAlign = "center";
	document.getElementById("menu").style.display = "inline";
	document.getElementById("menu").style.top =  document.getElementById('header').offsetHeight+"px";
	document.getElementById("content").style.top = document.getElementById('header').offsetHeight + document.getElementById('menu').offsetHeight +"px";
}

function menu_inline(){
	document.getElementById("menu").style.display = "none";
	document.getElementById("nav").style.display ="inline";
	document.getElementById("logo").style.display="inline-block";
	document.getElementById("title").style.display="inline-block";
	document.getElementById("title").style.paddingBottom="0px";
	document.getElementById("content").style.top = document.getElementById('header').offsetHeight  +"px";
}


//funzione controllo all'apertura della pagina
function page_load(){
	create_menu();
	
	document.getElementById("menu").style.display = "none";
	document.getElementById("nav").style.display ="inline";
	document.getElementById("logo").style.display="inline-block";
	document.getElementById("logo").style.height="100px";
	document.getElementById("title").style.display="inline-block";
	document.getElementById("title").style.paddingBottom="0px";
	document.getElementById("title").style.paddingtop="0px";
	document.getElementById("title").style.position="absolute";
	document.getElementById("title").style.top="0px";
	document.getElementById("nav").style.height = document.getElementById("logo").offsetHeight+"px";
	document.getElementById("nav").style.textAlign= "center";
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

window.onresize = function() {
   var win = $(this); //this = window
	  var amb = win.width();
      if (amb>1099){
		  menu_inline();
	  }
	  else{
		  menu_none();
	  }
	  x = amb;
};
