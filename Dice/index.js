var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;// random dice number

var randomDice="dice"+randomNumber1+".png";//to select random dice image
var  randomImageSource="images/"+randomDice;//source of image floder

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDice2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDice2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins😁"
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins😁"
}

else
{
    document.querySelector("h1").innerHTML="Its a Draw😆"
}
 

