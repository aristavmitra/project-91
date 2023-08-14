player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1nam").innerHTML = player1name
document.getElementById("player2nam").innerHTML = player2name

document.getElementById("score1").innerHTML = player1score
document.getElementById("score2").innerHTML = player2score

document.getElementById("nametag1").innerHTML ="Question Turn"+player1name 
document.getElementById("nametag2").innerHTML = "Answer Turn"+player2name 
