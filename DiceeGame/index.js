var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


var imageString1 = "images/dice" + randomNumber1 + ".png";

var imageString2 = "images/dice" + randomNumber2 + ".png";

var heading = document.querySelector(".RefreshHeading");

var imgs = document.querySelectorAll("img");

imgs[0].setAttribute("src",imageString1);
imgs[1].setAttribute("src",imageString2);


if(randomNumber1 > randomNumber2){
  heading.innerText = "Player 1 Won!";
}
else if(randomNumber2 > randomNumber1){
  heading.innerText = "Player 2 Won!";
}
else {
  heading.innerText = "Draw!";
}
