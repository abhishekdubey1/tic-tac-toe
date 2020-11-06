var a = 10;
var Turns = 0;

function startGame() {//1st
    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "0";
    }
    setMessage(document.turn + " gets to start.");//calling setMessage
}

function setMessage(msg) {//2nd
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {//3rd
    if (a != 10) {
        setMessage("GAME OVER :(")
    }
    else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("The square is already used.")
    }
}

function switchTurn() {//4th fn

    if (checkForWinner(document.turn)) {
        setMessage("Congratulation, " + document.turn + "! You Win!")
        a++;
    }
    else if (document.turn == "X") {
        document.turn = "0"
        Turns++;
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X"
        Turns++;
        setMessage("It's " + document.turn + "'s turn!");
    }
    if (Turns>=9) {
        setMessage("Game Tied");
        setTimeout(setMessage, 3000, "Play Again");        
    }
}

function checkForWinner(move) {//5th fn
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {//6th fn
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {//7th fn
    return document.getElementById("s" + number).innerText;
}

// function clearBox(number) {
//     document.getElementById("s" + number).innerText = "";
// }
