var canvas = document.querySelector("#playground");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var MAX_PARTICLES = 1000;


var ctx = canvas.getContext('2d');

var particles = [];

var create = function(options) {

	options = options || {
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height
	};

	if(particles.length > MAX_PARTICLES){
		particles.shift();
	}

	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var alpha = Math.random();

	var dot = {
		x: options.x,
		y: options.y,
		xVel: (Math.random() - 0.5),
		yVel: (Math.random() - 0.5),
		radius: Math.random() * 20,
		color: "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")"
	};

	particles.push(dot);
};

var draw = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particles.forEach(function (dot) {
		ctx.beginPath();
		ctx.arc(dot.x, dot.y, dot.radius , 0, Math.PI * 2);
		ctx.fillStyle = dot.color;
		ctx.fill();
	});
};

var fade = function() {
	particles.forEach(function (dot) {
		dot.radius += 0.01;
	});
};

var move = function () {
	particles.forEach(function (dot) {
		dot.x += dot.xVel;
		dot.y += dot.yVel;
	});
};

var loop = function() {
	create();
	fade();
	move();
	draw();
	window.requestAnimationFrame(loop);
};

canvas.addEventListener("click", function(ev) {
	for(var i = 0; i < 150; i++){
		create({
			x: ev.clientX,
			y: ev.clientY
		});
	}
}, false);

loop();