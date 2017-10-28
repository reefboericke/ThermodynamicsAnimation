
var canvas_x = 400;
var canvas_y = 400;
var dpxr = 0;
var dpxl = 0;
var dpyb = 0;
var dpyt = 0;
var mass = 10000;
var startTime = new Date();
var pxl = 0;
var pxr = 0;
var pyt = 0;
var pyb = 0;
var particles = new Array();
var startTime = new Date();
var radius = 20;
var collided = new Array();

class particle {
		constructor(x, y, dx, dy){
			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
		}
}

function addParticle(){
	particles.push(new particle(canvas_x/2, canvas_y/2, Math.floor(Math.random()*21)-10, Math.floor(Math.random()*21)-10));
}

function distance(par1, par2){
		return Math.sqrt((par2.x - par1.x)**2 + (par2.y - par1.y)**2);
}

function setup() {
	createCanvas(canvas_x, canvas_y);
}

function draw() {
	var time = new Date();
	background(220);
	for (var i = 0; i < particles.length; i++) {
		par = particles[i];
		if(par.x >= canvas_x - 10){
			par.x = canvas_x - 11;
			dpxr += mass * par.dx;
			par.dx = -par.dx;
		} else if (par.x <= 10) {
			par.x = 11;
			dpxl += mass * -par.dx;
			par.dx = -par.dx;
		} else if (par.y >= canvas_y - 10){
			par.y = canvas_y - 11;
			dpyb += mass * par.dy;
			par.dy = -par.dy;
		} else if (par.y <= 10){
			par.y = 11;
			dpyt += mass * -par.dy;
			par.dy = -par.dy;
		}
		for (var j =0; j < particles.length; j++){
				par2 = particles[j];
				if(j != i){
					if(distance(par2, par) < radius*2){
						var kinEng = par.dx**2 + par.dy**2 + par2.dx**2 + par2.dy**2;
						var ke1 = Math.random()*kinEng*0.75;
						var pardist = Math.random()*ke1*2 - ke1;
						par.dx = Math.sqrt(pardist);
						par.dy = Math.sqrt(ke1 - pardist);
						var ke2 = kinEng - ke1;
						var par2dist = Math.random()*ke2*2 - ke2;
						par2.dx = Math.sqrt(pardist);
						par2.dy = Math.sqrt(ke2 - pardist);
					}
				}
		}
		par.x = par.x + par.dx;
		par.y = par.y + par.dy;
		ellipse(par.x, par.y, radius*2, radius*2);
	}
	var elapsedTime = time - startTime;
	document.getElementById("pt").innerHTML=Math.floor(dpyt*100/(elapsedTime*canvas_x))/100;
	document.getElementById("pb").innerHTML=Math.floor(dpyb*100/(elapsedTime*canvas_x))/100;
	document.getElementById("pl").innerHTML=Math.floor(dpxl*100/(elapsedTime*canvas_y))/100;
	document.getElementById("pr").innerHTML=Math.floor(dpxr*100/(elapsedTime*canvas_y))/100;
	document.getElementById('pressure').innerHTML=(Math.floor(dpyt*100/(elapsedTime*canvas_x))/100+Math.floor(dpyb*100/(elapsedTime*canvas_x))/100+Math.floor(dpxl*100/(elapsedTime*canvas_y))/100+Math.floor(dpxr*100/(elapsedTime*canvas_y))/100)/4
}