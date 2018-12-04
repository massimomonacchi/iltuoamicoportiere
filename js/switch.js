 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'css/style-menu-bar-mobile.css';
			document.head.appendChild(link);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
			document.head.appendChild(script);
			var link2 = document.createElement('link');
			link2.rel = 'stylesheet';
			link2.href = 'https://fonts.googleapis.com/css?family=Gloria+Hallelujah';
			document.head.appendChild(link2);	
			var link3 = document.createElement('link');
			link3.rel = 'stylesheet';
			link3.href = 'https://fonts.googleapis.com/css?family=Mali|Patua+One';
			document.head.appendChild(link3);						
						
			var script2 = document.createElement('script');
			script2.type = 'text/javascript';
			script2.src ="js/Mobile-js/menu-resize.js";
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
			var link2 = document.createElement('link');
			link2.rel = 'stylesheet';
			link2.href = 'https://fonts.googleapis.com/css?family=Gloria+Hallelujah';
			document.head.appendChild(link2);			
			var link3 = document.createElement('link');
			link3.rel = 'stylesheet';
			link3.href = 'https://fonts.googleapis.com/css?family=Mali|Patua+One';
			document.head.appendChild(link3);			
			
			
			var script2 = document.createElement('script');
			script2.type = 'text/javascript';
			script2.src ="js/Desktop-js/menu-resize.js";
			document.body.append(script2);
}