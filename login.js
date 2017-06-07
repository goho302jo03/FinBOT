$(document).ready(function(){
  var _username;
  var _password;
  var _compassword;
  
  //按下Login後Post到後台驗證
  $('#Login').click(function(){
    _username = $('#Username').val();
    _password = $('#Password').val();
    
    var posting = $.post("./Authenticate.njs", {
      username: _username,
      password: _password
    });

    posting.done(function(data){
      alert('success');
    });

    $('#Reply').append(_username+" "+_password);
  });

  //按下後，切換登入和註冊欄
  $('.Switch').click(function(){
    $('#login').toggle('slow');
    $('#signup').toggle('slow');
  });
});
