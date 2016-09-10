var canvas = document.querySelector("#playground");

var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = "red";

var loop = function() {
	ctx.arc(Math.random() * 100, Math.random() * 100, 50, 0, Math.PI *2);
	ctx.fill();
	window.requestAnimationFrame(loop);
}

loop();