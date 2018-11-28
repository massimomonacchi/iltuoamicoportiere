 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'css/style-menu-bar2.css';
			document.head.appendChild(link);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
			document.head.appendChild(script);
			var script2 = document.createElement('script');
			script2.type = 'text/javascript';
			script2.src ="js/Desktop-js/menu-resize.js";
			document.body.append(script2);
 } else {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'css/style-menu-bar.css';
			document.head.appendChild(link);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
			document.head.appendChild(script);
			var script2 = document.createElement('script');
			script2.type = 'text/javascript';
			script2.src ="js/Desktop-js/menu-resize.js";
			document.body.append(script2);
}