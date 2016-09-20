//create a variable to hold the answer.

var answer;

//set up the game.
function setupGame(){
    //clear out old values
    $("#tbxGuess").val("");
    $("#message") .val("");
   
    //come up with the answer.
    answer= parseInt(Math.random()*10);
    console.log("Cheater! Don't you dare enter" + answer);
    //Hide and show the appro. answer.
    $("#intro").show();
    $("#game").hide();
}

//handle the guess.
function handleGuess(){
    var guess = $("#tbxGuess").val();
    if (+guess == answer){
        //tell them the answer is right
          $("#message").text("Your right!");
          $("#message").show("<a href:http://20px.com/wp-content/uploads/2013/02/unicorn_pooping_a_rainbow_20px.jpg</a>");

    }
  else{
        //tell them the answer is wrong. 
      $("#message").text("Nope, try again!",);
      $("#txbGuess").val("");
    }  

};
//set up the page for the game.
function playGame(){
    $("#intro").hide();
    $("#game").show();
     $("#tbxGuess").focus();
     $("message").show
     

} 
//when the page loads, setup the game.
$(function(){
    //wireup event handlers.
    $("#startGame").on("click",playGame);//points to the function)
    $("#btnGuess").on ("click",handleGuess);
   
    //Start the Game
    setupGame();
});
    //quit button to reset the game.
    function quit(){
        $("#startGame").on("click",quit);
    }


