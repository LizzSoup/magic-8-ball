$(document).ready(function() {

  $("#answer").hide();

  //-----Property 1: list of answers
var answers = ["All signs point to yes", "All signs point to no", "Seems likely", "Seems unlikely", "It's possible", "Probably not", "The gods favour it", "The stars are not aligned"];
  
  //-----Property 2: reveal answer function
 function revealAnswer() {
    $("#8ball").effect("shake");    

    setTimeout(function(){
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");}, 500);
    

    var randomNumber = Math.floor(Math.random() * answers.length);
  
    var answer = this.answers[randomNumber];
    $("#answer").text(answer);
  };
  
  
  //-----Magic 8 ball question click function
  function question() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
    setTimeout(function() {
      prompt("*.* | The Magic 8 Ball has cosmic powers, and is ready to reveal the truths of the universe. | What is your YES/NO question? | *.*");
      magic8.revealAnswer();
      $("#answer").fadeIn(7000);}, 500);
  };
  
  //-----Onclick event - question prompt
    $("#questionButton").click(question);
  
  });
  // jquery ends