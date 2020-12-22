var board = null;
var game = null;
function load(){
	var end_banner = document.getElementById("end-banner");
	var ending = document.createElement("h1");		//Add the end of game message to the top
	ending.id = "ending-banner";
	ending.style.display = "none";					//Initially hidden
	end_banner.appendChild(ending);
	board = Chessboard('board', {		//Create the board GUI
		draggable : true,			//Allow the pieces to be moved
		position : 'start',			//Create the board in starting position
		onDrop : onDrop,				//Run the onDrop function after letting go of a piece on the GUI
		onChange : onChange
	});
	game = new Chess();					//Create the game logic
	var button_container = document.getElementById("btn-container");	//Buttons for actions
	var clear = document.createElement("button");		//Clears the board
	clear.id = "btn-clear";
	clear.textContent = "Clear Board";
	clear.onclick = function() {
		board.clear();
		newGame();
	}
	var start = document.createElement("button");		//Resets back to start positions
	start.id = "btn-start";
	start.textContent = "Start Position";
	start.onclick = function() {
		board.start();
		newGame();
	}
	button_container.appendChild(clear);
	button_container.appendChild(start);
	var fen_btn = document.createElement("button");		//temporary to send fen to server
	fen_btn.textContent = "Send Fen to Server"
	fen_btn.onclick = sendFen;
	button_container.appendChild(fen_btn);
}

function newGame(){
	document.getElementById("PGN-banner").textContent = '';
	ending.style.display = "none";					//Initially hidden
	game = new Chess();

}

function sendFen(){
	var temp = game.fen();								//Gets the FEN from game instance
	var data = {'fen' : temp };							//Package data
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', '/fen');
	httpRequest.setRequestHeader('Content-Type', 'application/json');
	httpRequest.send(JSON.stringify(data));				//Send the data to the server
}

function onDrop(source, target){

	var move = game.move({		//returns an array of possible moves
		from: source,
		to: target,
		promotion: 'q' 			//Promote pawns to Queens
	})
	
	if (move === null) return 'snapback'	//If null, no possible moves
}

function onChange(oldPos, newPos){
	var pgn_banner = document.getElementById("PGN-banner");
	pgn_banner.textContent = game.pgn();
	if (game.game_over()){
		var ending = document.getElementById("ending-banner");
		ending.style.display = "inherit";
		if (game.in_checkmate()){
			if (game.turn() === 'b'){
				ending.textContent = "White wins by checkmate!";
			} else {
				ending.textContent = "Black wins by checkmate!";
			}
		} else {
			ending.textContent = "Game is a draw!";
		}
	}

}

window.addEventListener("load", load, true);			//Initialize after page finishes loading