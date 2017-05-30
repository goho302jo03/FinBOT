$(document).ready(function(){
  var UserName;

  $('#submit').click(function() {
    UserName = $('#UserName').val();
    $('#Reply').append(UserName+"<br>");

    $.get("./CreditTest.njs",function(data){
      $('#Reply').append(data.text+"!!"); 
    },"JSON");
  });


});
