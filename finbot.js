

$(document).ready(function(){

/*  function say(){
    append(document.getElementById('comment').value);
  }

  function append(line){
    var dialogbox = document.getElementById('dialogbox');
    dialogbox.innerHTML+=line+"<br/>\n";
    dialogbox.scrollTop = dialogbox.scrollHeight;
  }
*/
  $('#fun').on('click',function(){
    $('#funul').toggle('slow');
  }); 

  $('button[type=submit]').on('click',function(){
    $('#funul').toogle('slow');
    jQuery.ajax({
        data:{
          id:$('input[name=comment]').val()
        },
        url:'do',
        success:function(data){
          $('.dialogbox').text(data);
        }
      });
    var comment = document.getElementById('comment');
    $('#urecord').append(comment);
  }); 
});


