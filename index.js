document.body.addEventListener("click", function(){
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var diceLeftImage = "images/dice" + randomNumber1 + ".png";
  var leftImg = document.querySelectorAll("img")[0];
  leftImg.setAttribute("src", diceLeftImage);

  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceRightImage = "images/dice" + randomNumber2 + ".png";
  var rightImg = document.querySelectorAll("img")[1];
  rightImg.setAttribute("src", diceRightImage);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
  }else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
  }else{
    document.querySelector("h1").innerHTML="Draw!";
  }
})
