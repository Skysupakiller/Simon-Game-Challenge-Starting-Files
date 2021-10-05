
var buttonColours = ["red","blue", "green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
  var selectButton = new Audio("sounds/"+ randomChosenColour + ".mp3");
  selectButton.play();
}

$(".btn").click(function(){
  var userChosenColour = this.id;
  // OR -> var userChosenColour = this.attr("#id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
})
