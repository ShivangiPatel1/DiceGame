
  var randomNumber1 = Math.floor((Math.random()*6))+1; /*random number for Dice on Left*/
  var randomNumber2 = Math.floor((Math.random()*6))+1; /*random number for Dice on Right*/
  Left(); /*Function for Dice on Left*/
  Right(); /*Function for Dice on Right*/
  Display(); /*Function for displaying winner*/

  /* Logic for the Dice on left Side changing with reference to random number*/
    function Left() {
        if(randomNumber1===1)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        }
        else if(randomNumber1===2)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        }
        else if(randomNumber1===3)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        }
        else if(randomNumber1===4)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        }
        else if(randomNumber1===5)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        }
        else if(randomNumber1===6)
        {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        }
        }
    
        /* Logic for the Dice on Right Side changing with reference to random number*/
    function Right() {

        if(randomNumber2===1)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        }
        else if(randomNumber2===2)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        }
        else if(randomNumber2===3)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        }
        else if(randomNumber2===4)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        }
        else if(randomNumber2===5)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        }
        else if(randomNumber2===6)
        {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        }
        }
    
        /*Changing heading to display winner*/
    function Display()
    {
        if(randomNumber1 > randomNumber2)
        {
            document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins"
        }
        else if(randomNumber1 < randomNumber2)
        {
            document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
        }
        else
        {
            document.querySelector("h1").innerHTML="Draw"
        }
    }    

    