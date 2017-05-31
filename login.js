$(document).ready(function(){
  //按下後，切換登入和註冊欄
  $('.Switch').click(function(){
    $('#login').toggle('slow');
    $('#signup').toggle('slow');
  });
});
