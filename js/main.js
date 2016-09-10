var canvas = document.querySelector("#playground");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var ctx = canvas.getContext('2d');
ctx.fillStyle = "red";

var particles = [];

var create = function() {
	var dot = {
		x: Math.random() * 250,
		y: Math.random() * 150,
		xVel: 10,
		yVel: 10,
		radius: 5
	};

	particles.push(dot);
};

var draw = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.heigh);
	particles.forEach(function (dot) {
		ctx.beginPath();
		ctx.arc(dot.x, dot.y, dot.radius , 0, Math.PI *2);
		ctx.fill();
	});
}

var loop = function() {
	create();
	draw();
	window.requestAnimationFrame(loop);
};

loop();