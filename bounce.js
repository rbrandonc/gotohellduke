//Configure the below three variables (BallSpeed from 1 to 50, larger is faster)
var ballWidth = 40;
var ballHeight = 40;
var BallSpeed = 1;

var xMax;
var yMax;
var xPos = 0;
var yPos = 0;
var xDir = 'right';
var yDir = 'down';
var superballRunning = true;

var bounce_object = {
	xPos: 0,
	yPos: 0,
	xDir: 'right',
	yDir: 'down',
	superballRunning: true
};

function stopit(){
	clearTimeout(doit)

	if (document.getElementById)
		document.getElementById("video").style.visibility="hidden"
	else if (document.all)
		document.all("video").style.visibility = "hidden";
	else
		document.layers["video"].visibility = "hide";
}

function initializeBall() {
	if (document.all) {
		xMax = document.body.clientWidth
		yMax = document.body.clientHeight
		document.all("video").style.visibility = "visible";
	}
	else if (document.layers||document.getElementById) {
		xMax = window.innerWidth-14;
		yMax = window.innerHeight;
		if (document.getElementById)
			document.getElementById("video").style.visibility="visible"
		else
			document.layers["video"].visibility = "show";
	}
	setTimeout('moveBall()',400);
}


function moveBall() {
	if (superballRunning == true) {
		calculatePosition();
	if (document.all) {
		document.all("video").style.left = xPos + document.body.scrollLeft;
		document.all("video").style.top = yPos + document.body.scrollTop;
	}
	else if (document.layers) {
		document.layers["video"].left = xPos + pageXOffset;
		document.layers["video"].top = yPos + pageYOffset;
	}
	else if (document.getElementById) {
		document.getElementById("video").style.left = xPos + pageXOffset;
		document.getElementById("video").style.top = yPos + pageYOffset;
	}
	doit=setTimeout('moveBall()',30);
	}
}

function calculatePosition() {
	if (xDir == "right") {
		if (xPos > (xMax - ballWidth - BallSpeed)) { 
			xDir = "left";
		}
	}
	else if (xDir == "left") {
		if (xPos < (0 + BallSpeed)) {
			xDir = "right";
		}
	}
	if (yDir == "down") {
		if (yPos > (yMax - ballHeight - BallSpeed)) {
			yDir = "up";
		}
	}
	else if (yDir == "up") {
		if (yPos < (0 + BallSpeed)) {
			yDir = "down";
		}
	}
	if (xDir == "right") {
		xPos = xPos + BallSpeed;
	}
	else if (xDir == "left") {
		xPos = xPos - BallSpeed;
	}
	else {
		xPos = xPos;
	}
	if (yDir == "down") {
		yPos = yPos + BallSpeed;
	}
	else if (yDir == "up") {
		yPos = yPos - BallSpeed;
	}
	else {
		yPos = yPos;
	}
}

if (document.all||document.layers||document.getElementById){
	window.onload = initializeBall;
	window.onresize = new Function("window.location.reload()");
}