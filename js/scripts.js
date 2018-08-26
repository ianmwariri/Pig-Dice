$(document).ready(function() {
  $("#startBtn").click(function() {
    $("#formBody").show();
    $("#formAbout").hide();
  });
});

$(document).ready(function() {
  $("#aboutBtn").click(function() {
    $("#formAbout").show();
    $("#formBody").hide();
  });
});


$(document).ready(function(){
  $("#formBody").submit(function(event){
    event.preventDefault();
  });
});
