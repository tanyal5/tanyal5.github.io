var puppy = Math.floor(Math.random() * 12);
var poop = Math.floor(Math.random() * 12);
while (puppy === poop) {
    poop = Math.floor(Math.random() * 12);
}
var game = true;
//Change Characters
function changeChar(num) {
    if (game === false) {
        alert("Resart Game")
        return;
    }
    if (num === puppy) {
        document.getElementById(num).innerHTML = "🐶";
        document.getElementById("result").innerHTML = "You Found Your Puppy! You Win!";
        game = false;
    } else if (num === poop) {
        document.getElementById(num).innerHTML = "💩";
        document.getElementById("result").innerHTML = "EWWWWW You Stepped in Poop! You Lose!"
        game = false;
    } else {
        document.getElementById(num).innerHTML = "💔";
        document.getElementById("result").innerHTML = "No puppy here :("
        counter();
    }
}
//Counter
var count = 0;
function counter() {
        count++
        document.getElementById("counter").innerHTML = "Counter: " + count
        if (count > 4) {
            game = false;
        }
}
