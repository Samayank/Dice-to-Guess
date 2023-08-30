// window.onload = function() {
//     // Get the value from localStorage
//     var player1 = localStorage.getItem('p1');
//     var player2 = localStorage.getItem('p2');
// }

const player1 = localStorage.getItem('player-1');
const player2 = localStorage.getItem('player-2');

document.getElementById('one').textContent = player1;
document.getElementById('two').textContent = player2;

var random1 = Math.floor((Math.random())*6) + 1;
var random2 = Math.floor((Math.random())*6) + 1;

document.getElementById("one").innerHTML = player1;
document.getElementById("two").innerHTML = player2;

var randImg1 = "https://github.com/Samayank/Dice-to-Guess/blob/main/dice" + random1 + ".png?raw=true";
document.querySelectorAll("img")[0].setAttribute("src", randImg1);

var randImg2 = "https://github.com/Samayank/Dice-to-Guess/blob/main/dice" + random2 + ".png?raw=true";
document.querySelectorAll("img")[1].setAttribute("src", randImg2);

if(random1 > random2){
    document.getElementsByClassName("top")[0].innerHTML = player1 + " Wins 🏅";
}

else if(random1 < random2){
    document.getElementsByClassName("top")[0].innerHTML = player2 + " Wins 🏅";
}

else{
    document.getElementsByClassName("top")[0].innerHTML = "Draw 😮‍💨";
}


