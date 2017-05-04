$(document).ready(function(){

 /*
  $('#fun').on('click',function(){
    $('#funul').toggle('slow');
  }); 
*/
  $('#send').on('click',function() {
    
    if($('#comment').val()=="");
    else {
      $('.dialogbox').append(
        "<div class=\"user\">"+
          "<a><img class=\"urpic\" src=\"./images/chatroom/urpic.png\"></a>"+
          "<div class=\"urecord\">" + $('#comment').val() + "</div>"+
          "<div style=\"clear:both\"></div>"+
        "</div>");

      $('.dialogbox').animate({ 
        scrollTop: $('.dialogbox').height()
        }, 1000);

      $('#comment').val("");
    }
  });
});

