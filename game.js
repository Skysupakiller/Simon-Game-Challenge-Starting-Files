
var buttonColours = ["red","blue", "green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  // OR -> var userChosenColour = this.attr("#id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var lengthList = userClickedPattern.length - 1;
  checkAnswer(lengthList);
})

$(document).keypress(function(){

  if(!started)
  $("h1").text("Level "+ level);
  nextSequence();
  started = true;

  })

// function

function nextSequence(){
  userClickedPattern =[];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level "+ level);
  }

function playSound(name){
  var selectButton = new Audio("sounds/"+ name+ ".mp3");
  selectButton.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);
  }

function checkAnswer(currentlevel){
      if(userClickedPattern[currentlevel] === gamePattern [currentlevel]){
        if(userClickedPattern.length === gamePattern.length){
          setTimeout(function(){
            nextSequence();
            }, 1000);
        }
      }else{
        // var wrongButton = new Audio("sounds/wrong.mp3");
        // wrongButton.play();
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

      }
  }

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
