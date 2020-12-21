var board = Chessboard('board', {
	draggable : true,
	position : 'start'
});

var button_container = document.getElementById("btn-container");
var clear = document.createElement("button");
clear.id = "btn-clear";
clear.textContent = "Clear Board";
clear.onclick = board.clear;
var start = document.createElement("button");
start.id = "btn-start";
start.textContent = "Start Position";
start.onclick = board.start;
button_container.appendChild(clear);
button_container.appendChild(start);

var curr_position = board.position('fen');
console.log(curr_position);