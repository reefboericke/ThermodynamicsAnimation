
var canvas_x = 400;
var canvas_y = 400;
var dpxr = 0;
var dpxl = 0;
var dpyb = 0;
var dpyt = 0;
var mass = 100;
var startTime = new Date();
var pxl = 0;
var pxr = 0;
var pyt = 0;
var pyb = 0;
var particles = new Array();

class particle {
		constructor(x, y, dx, dy){
			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
		}
}

function setup() {
	createCanvas(canvas_x, canvas_y);
	particles.push(new particle(50, 50, 20, 5));
}

function draw() {
	for (var i = 0; i < particles.length; i++) {
		par = particles[i];
		if(par.x >= canvas_x - 10){
			par.dx = -par.dx;
		} else if (par.x <= 10) {
			par.dx = -par.dx;
		} else if (par.y >= canvas_y - 10){
			par.dy = -par.dy;
		} else if (par.y <= 10){
			par.dy = -par.dy;
		}
		par.x = par.x + par.dx;
		par.y = par.y + par.dy;
		background(220);
		ellipse(par.x, par.y, 5, 5);
	}
}