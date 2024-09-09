document.querySelector("div.container h1").style.color="red"

var dice=[1,2,3,4,5,6];
var randomIndexPlayer1=Math.floor(Math.random()*dice.length +1);
var randomIndexPlayer2=Math.floor(Math.random()*dice.length+1);



// Update the images based on the random numbers
document.querySelector(".img1").setAttribute("src", "/images/dice" + randomIndexPlayer1 + ".png");
document.querySelector(".img2").setAttribute("src", "/images/dice" + randomIndexPlayer2 + ".png");

if (randomIndexPlayer1 > randomIndexPlayer2) {
    document.querySelector("div.container h1").textContent=
    "Player 1 wins";
  

} else if (randomIndexPlayer1 < randomIndexPlayer2) {
    document.querySelector("div.container h1").textContent="Player 2 Wins"
} else {
   document.querySelector("div.container h1").textContent="It's a draw"
}