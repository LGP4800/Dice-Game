var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

// Dice number 1: random face
if(randomNumber1 == 1)
{ document.querySelector(".img1").setAttribute("src", "images/dice1.png");}
else if(randomNumber1 == 2){document.querySelector(".img1").setAttribute("src", "images/dice2.png");}
else if (randomNumber1 == 3){document.querySelector(".img1").setAttribute("src", "images/dice3.png");}
else if (randomNumber1 == 4){document.querySelector(".img1").setAttribute("src", "images/dice4.png");}
else if (randomNumber1 == 5){document.querySelector(".img1").setAttribute("src", "images/dice5.png");}
else{document.querySelector(".img1").setAttribute("src", "images/dice6.png");}


// Dice number 2: random face
if(randomNumber2 == 1)
{ document.querySelector(".img2").setAttribute("src", "images/dice1.png");}
else if(randomNumber2 == 2){document.querySelector(".img2").setAttribute("src", "images/dice2.png");}
else if (randomNumber2 == 3){document.querySelector(".img2").setAttribute("src", "images/dice3.png");}
else if (randomNumber2 == 4){document.querySelector(".img2").setAttribute("src", "images/dice4.png");}
else if (randomNumber2 == 5){document.querySelector(".img2").setAttribute("src", "images/dice5.png");}
else{document.querySelector(".img2").setAttribute("src", "images/dice6.png");}


//Result display
if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw";
}
else if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=" &#128681 Player 1 wins";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 wins &#128681";
}


//Refrsh button
const refreshButton = document.querySelector(".refresh-button");
const refreshPage=() => {
location.reload();
}
refreshButton.addEventListener('click', refreshPage);


//Restart button
const restartButton = document.querySelector(".restart-button");
const restartGame=() => {

document.querySelector("h1").innerHTML="Refresh Me";
document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

}
restartButton.addEventListener('click', restartGame);
