<?php header("access-control-allow-origin: *"); ?>
<html>
	<head>
	 
	</head>
	<body>
		<p id="demo"></p>
		<video width="640" height="480" autoplay></video>
		<button onclick="vidvar = setInterval(snap_, 50)">START</button>
		<button onclick="clearTimeout(vidvar)">STOP</button>
		<canvas id="canvas" width="640" height="480"></canvas>
		<script src="js/main.js"></script>

	</body>
</html>