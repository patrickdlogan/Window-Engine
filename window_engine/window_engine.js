// DISPLAYING WINDOWS

//////////////
// WINDOW 1 //
//////////////

var isOut;

$(document).on("click", "#closeButton", function () {
	$("#mydiv").fadeOut(500, "swing");
	isOut = true;
});

$(document).on("click", "#button1", function () {
	if (isOut) {
		document.getElementById("mydiv").style = "position: absolute";
		document.getElementById("mydiv").style = "top: 80px;";
	}
	isOut = false;
	$("#mydiv").fadeIn(500, "swing");
});

dragElement(document.getElementById("mydiv"));

//////////////
// WINDOW 2 //
//////////////

var isOut2;

$(document).on("click", "#closeButton2", function () {
	$("#mydiv2").fadeOut(500, "swing");
	isOut2 = true;
});

$(document).on("click", "#button2", function () {
	if (isOut2) {
		document.getElementById("mydiv2").style = "position: absolute";
		document.getElementById("mydiv2").style = "top: 80px;";
	}
	isOut2 = false;
	$("#mydiv2").fadeIn(500, "swing");
});

dragElement(document.getElementById("mydiv2"));



// DRAGGABLE WINDOWS

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
