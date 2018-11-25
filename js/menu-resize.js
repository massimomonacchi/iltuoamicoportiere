
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

var codes = newCodes();
	var x=codes.x;
	var y=codes.y;

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
		console.log("piccolo");
		check_if_not_menu();
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};


addEvent(window, "resize", function(event) {
	
	var codes = newCodes();
	var width=codes.x;
	var height=codes.y;
	
	if(width>x){/*
		console.log("ciao");
		document.getElementById("logo").style.left = (document.getElementById("logo").getClientRects().left + 2) + "px";
		x = width;*/
		if(codes.x < 1125){
			document.getElementById("nav").style.display ="none";
			console.log("fatto");
		}	
	}
  
});



function check_if_not_menu(){
	console.log("prova");
	var codes = newCodes();
	var width=codes.x;
	var height=codes.y;
	
	if(width>x){
		if(width < 1125){
			document.getElementById("nav").style.display ="none";
			console.log("fatto");
		}	
	}
};