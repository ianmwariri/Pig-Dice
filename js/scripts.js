var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
};

$(document).ready(function() {
  //Player 1
  var cummulativeScoreValue1 = 0;
  var totalScore1 = 0;
  var currentDiceValue1 = 0;
  $("#hold2").attr("disabled", true);
  $("#roll2").attr("disabled", true);

  $("#roll1").click(function() {
    currentDiceValue1 = dice.roll();
    if (currentDiceValue1 === 1) {
      currentDiceValue1 = 0;
      cummulativeScoreValue1 = 0;
      $("#hold1").attr("disabled", true);
      $("#roll1").attr("disabled", true);

      $("#hold2").attr("disabled", false);
      $("#roll2").attr("disabled", false);
      alert("The Dice landed on 1. It's Player 2's Turn!");
    }
    $("#currentDiceValue1").text(currentDiceValue1);

    cummulativeScoreValue1 += currentDiceValue1;
    $("#cummulativeScoreValue1").text(cummulativeScoreValue1);
  });
  $("#hold1").click(function() {
    totalScore1 += cummulativeScoreValue1;

    $("#totalScore1").text(totalScore1);

    if (totalScore1 >= 100) {
      alert("Player 1 Wins!!");
    } else {
      currentDiceValue1 = 0;
      cummulativeScoreValue1 = 0;
      $("#currentDiceValue1").text(currentDiceValue1);
      $("#cummulativeScoreValue1").text(cummulativeScoreValue1);

      $("#hold1").attr("disabled", true);
      $("#roll1").attr("disabled", true);

      $("#hold2").attr("disabled", false);
      $("#roll2").attr("disabled", false);

      alert("Player 2's Turn!");
    }
  });
  //Scope for Player 2
  var cummulativeScoreValue2 = 0;
  var totalScore2 = 0;
  var currentDiceValue2 = 0;

  $("#roll2").click(function() {
    currentDiceValue2 = dice.roll();
    if (currentDiceValue2 === 1) {
      currentDiceValue2 = 0;
      cummulativeScoreValue2 = 0;
      $("#hold2").attr("disabled", true);
      $("#roll2").attr("disabled", true);

      $("#hold1").attr("disabled", false);
      $("#roll1").attr("disabled", false);
      alert("The Dice landed on 1. Player 1's Turn!");
    }
    $("#currentDiceValue2").text(currentDiceValue2);

    cummulativeScoreValue2 += currentDiceValue2;
    $("#cummulativeScoreValue2").text(cummulativeScoreValue2);
  });
  $("#hold2").click(function() {
    totalScore2 += cummulativeScoreValue2;

    $("#totalScore2").text(totalScore2);

    if (totalScore2 >= 100) {
      alert("Player 2 Wins!!");
    } else {
      currentDiceValue2 = 0;
      cummulativeScoreValue2 = 0;
      $("#currentDiceValue2").text(currentDiceValue2);
      $("#cummulativeScoreValue2").text(cummulativeScoreValue2);

      $("#hold2").attr("disabled", true);
      $("#roll2").attr("disabled", true);

      $("#hold1").attr("disabled", false);
      $("#roll1").attr("disabled", false);

      alert("Player 1's Turn!");
    }
  });

  $("form#formInput").submit(function(event) {
    $("#formBody").hide();
    $("#formAbout").hide();
    $("#gameScreen").show();
    event.preventDefault();

    var player1 = $("input#user1").val();
    var player2 = $("input#user2").val();

    $("#Player1").text(player1);
    $("#Player2").text(player2);
  });

  $("#startBtn").click(function() {
    $("#formBody").show();
    $("#formAbout").hide();
    event.preventDefault();
  });

  $("#aboutBtn").click(function() {
    $("#formAbout").show();
    $("#formBody").hide();
  });
});