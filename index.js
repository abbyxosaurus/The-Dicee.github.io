var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImages1 = "images/"+randomDiceImage1;
var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomImages1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImages2 = "images/"+randomDiceImage2;
var image2 = document.querySelector(".img2").setAttribute("src",randomImages2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Tie!";
}
