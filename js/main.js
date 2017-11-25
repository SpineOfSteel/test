'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};
var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);


var canvas = document.getElementById("canvas");//.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
var ctx = canvas.getContext('2d');

function snap_() {	
	
	if(canvas)
	{		
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);		
		var data = canvas.toDataURL();		
		post(data);
		//$.post("process.php", {			imageData : data	});
		
	}
}


var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


function post(params)
{
	var http = new XMLHttpRequest();	
	var params = "lorem=ipsum&name=binny";
	http.open("POST", "https://tlc.iiitdm.ac.in/live/test.php", true);	
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send(params);
	
	 http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			alert(http.responseText);
		}
	} 
	
}
