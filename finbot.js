

$(document).ready(function(){
  var comment = null;

  function say(){
    append(document.getElementById('comment').value);
  }

  function append(line){
    var dialogbox = document.getElementById('dialogbox');
    dialogbox.innerHTML+=line+"<br/>\n";
    dialogbox.scrollTop = dialogbox.scrollHeight;
  }

  $('#fun').on('click',function(){
    $('#funul').toggle('slow');
  }); 

  $('#send').on('click',function(){
    comment = document.getElementById('comment')
    document.write(comment+'<br/>');
  });
});


