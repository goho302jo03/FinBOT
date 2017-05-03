
function say(){
  append(document.getElementById('comment').value);
}

function append(line){
  var dialogbox = document.getElementById('dialogbox');
  dialogbox.innerHTML+=line+"<br/>\n;
  dialogbox.scrollTop = dialogbox.scrollHeight;
}

$(document).ready(function{

  $('#fun').on('click',function(){
    $('#funul').toggle('slow');
  }  

  $('#send').click(say(){
    $('.middle').append(
  }


});


