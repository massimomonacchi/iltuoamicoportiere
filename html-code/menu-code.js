
var div = document.createElement('div');
div.className = 'header';
div.setAttribute("id", "header");div.innerHTML = '<div class="logo" id="logo"><img id="log" class="log" src="img/logo.jpg"/><h1 id="title">	IL TUO AMICO PORTIERE</h1></div><div class="nav" id="nav"><ul class="ul1"><li class="nav1"><a href="chisiamo.html">Chi siamo</a></li><li class="nav1"><a href="servizi.html">I nostri servizi</a>	</li><li class="nav1"><a>Lavora con noi</a></li></ul></div>'
var ele = document.querySelector('.content');
ele.parentNode.insertBefore(div, ele);