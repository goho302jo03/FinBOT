$(document).ready(function(){
/* window.addEventListener("orientationchange",onOrientationchange(),false);
 function onOrientationchange() {
    if (window.orientation === 180 || window.orientation === 0) {
        vertical()   //直式
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        horizontal() //橫式
    }
    }
 function horizontal(){*/  
    $('#photo1').click(function(){
      $('h1').animate({top:"50vh"});
      $('#photo1').animate({height: "30vw"  ,width: "30vw" ,top: "-13vh", left:"35vw"});
      $('#photo2').animate({height: "16vw"  ,width: "16vw" ,top: "0vh" , left:"-30vw"});
      $('#photo3').animate({height: "16vw" ,width: "16vw" ,top: "11vh", left:"-58vw"});
      $('#photo4').animate({height: "16vw" ,width: "16vw" ,top: "-2vh", left:"-1vw"});
      $('#photo5').animate({height: "16vw" ,width: "16vw" ,top: "10vh", left:"-30vw"});
      $('.member p').hide();
      $('#info1').show("slow");
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show();
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
      $('#photo2').click(function(){
      $('#photo2').animate({height: "30vw"  ,width: "30vw" ,top: "-12vh", left:"2.4vw"});
      $('#photo1').animate({height: "16vw" ,width: "16vw" ,top: "0vh", left:"-1vw"});
      $('#photo3').animate({height: "16vw" ,width: "16vw" ,top: "11vh", left:"-58vw"});
      $('#photo4').animate({height: "16vw" ,width: "16vw" ,top: "-2vh", left:"-1vw"});
      $('#photo5').animate({height: "16vw" ,width: "16vw" ,top: "10vh", left:"-30vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').show("slow");
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo3').click(function(){
      $('#photo3').animate({height: "30vw"  ,width: "30vw" ,top: "-13vh", left:"-24vw"});
      $('#photo1').animate({height: "16vw" ,width: "16vw" ,top: "0vh",left:"-1vw"});
      $('#photo2').animate({height: "16vw" ,width: "16vw" ,top: "11vh",left:"-30vw"});
      $('#photo4').animate({height: "16vw" ,width: "16vw" ,top: "-2vh",left:"-1vw"});
      $('#photo5').animate({height: "16vw" ,width: "16vw" ,top: "10vh",left:"-30vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').show("slow");
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo4').click(function(){
      $('#photo4').animate({height: "30vw"  ,width: "30vw" ,top: "-37vh", left:"30vw"});
      $('#photo1').animate({height: "16vw" ,width: "16vw" ,top: "0vh", left:"-1vw"});
      $('#photo2').animate({height: "16vw" ,width: "16vw" ,top: "11vh", left:"-30vw"});
      $('#photo3').animate({height: "16vw" ,width: "16vw" ,top: "22vh", left:"-58vw"});
      $('#photo5').animate({height: "16vw" ,width: "16vw" ,top: "10vh", left:"-30vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').show("slow");
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo5').click(function(){
      $('#photo5').animate({height: "30vw"  ,width: "30vw" ,top: "-37vh", left:"5vw"});
      $('#photo1').animate({height: "16vw" ,width: "16vw" ,top: "0vh", left:"-1vw"});
      $('#photo2').animate({height: "16vw" ,width: "16vw" ,top: "11vh", left:"-30vw"});
      $('#photo3').animate({height: "16vw" ,width: "16vw" ,top: "22vh", left:"-58vw"});
      $('#photo4').animate({height: "16vw" ,width: "16vw" ,top: "10vh", left:"-1vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').show("slow");
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('.btn').click(function(){
      $('#photo1').animate({height: "20vw" , width: "20vw", top: "0", left:"0"});
      $('#photo2').animate({height: "20vw" , width: "20vw", top: "0", left:"0"});
      $('#photo3').animate({height: "20vw" , width: "20vw", top: "0", left:"0"});
      $('#photo4').animate({height: "20vw" , width: "20vw", top: "0", left:"0"});
      $('#photo5').animate({height: "20vw" , width: "20vw", top: "0", left:"0"});
      $('.member p').show(); 
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').hide();
      $('.list').css("background-color","#F4C70B");
      $('.page2').hide();
    });
});

/*
$('#photo1').click(function(){
      $('#photo1').animate({height: "17vw"  ,width: "17vw" ,top: "-2vh", left:"20vw"});
      $('#photo2').animate({height: "3.5vw" ,width: "3.5vw" ,top: "6vh" , left:"-28.1vw"});
      $('#photo3').animate({height: "3.5vw" ,width: "3.5vw" ,top: "16vh", left:"-45.7vw"});
      $('#photo4').animate({height: "3.5vw" ,width: "3.5vw" ,top: "26vh", left:"-63.3vw"});
      $('#photo5').animate({height: "3.5vw" ,width: "3.5vw" ,top: "36vh", left:"-80.9vw"});
      $('.member p').hide();
      $('#info1').show("slow");
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show();
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
      $('#photo2').click(function(){
      $('#photo2').animate({height: "17vw"  ,width: "17vw" ,top: "-2vh", left:"2.4vw"});
      $('#photo1').animate({height: "3.5vw" ,width: "3.5vw" ,top: "-4vh", left:"-10.5vw"});
      $('#photo3').animate({height: "3.5vw" ,width: "3.5vw" ,top: "16vh", left:"-45.7vw"});
      $('#photo4').animate({height: "3.5vw" ,width: "3.5vw" ,top: "26vh", left:"-63.3vw"});
      $('#photo5').animate({height: "3.5vw" ,width: "3.5vw" ,top: "36vh", left:"-80.9vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').show("slow");
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo3').click(function(){
      $('#photo3').animate({height: "17vw"  ,width: "17vw" ,top: "-2vh", left:"-15.2vw"});
      $('#photo1').animate({height: "3.5vw" ,width: "3.5vw" ,top: "-4vh",left:"-10.5vw"});
      $('#photo2').animate({height: "3.5vw" ,width: "3.5vw" ,top: "6vh",left:"-28.1vw"});
      $('#photo4').animate({height: "3.5vw" ,width: "3.5vw" ,top: "26vh",left:"-63.3vw"});
      $('#photo5').animate({height: "3.5vw" ,width: "3.5vw" ,top: "36vh",left:"-80.9vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').show("slow");
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo4').click(function(){
      $('#photo4').animate({height: "17vw"  ,width: "17vw" ,top: "-2vh", left:"-32.8vw"});
      $('#photo1').animate({height: "3.5vw" ,width: "3.5vw" ,top: "-4vh", left:"-10.5vw"});
      $('#photo2').animate({height: "3.5vw" ,width: "3.5vw" ,top: "6vh", left:"-28.1vw"});
      $('#photo3').animate({height: "3.5vw" ,width: "3.5vw" ,top: "16vh", left:"-45.7vw"});
      $('#photo5').animate({height: "3.5vw" ,width: "3.5vw" ,top: "36vh", left:"-80.9vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').show("slow");
      $('#info5').slideUp();
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('#photo5').click(function(){
      $('#photo5').animate({height: "17vw"  ,width: "17vw" ,top: "-2vh", left:"-50.4vw"});
      $('#photo1').animate({height: "3.5vw" ,width: "3.5vw" ,top: "-4vh", left:"-10.5vw"});
      $('#photo2').animate({height: "3.5vw" ,width: "3.5vw" ,top: "6vh", left:"-28.1vw"});
      $('#photo3').animate({height: "3.5vw" ,width: "3.5vw" ,top: "16vh", left:"-45.7vw"});
      $('#photo4').animate({height: "3.5vw" ,width: "3.5vw" ,top: "26vh", left:"-63.3vw"});
      $('.member p').hide();
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').show("slow");
      $('.btn').show(); 
      $('.list').css("background-color","#F2F2F2");
      $('.page2').show("slow"); 
    });
    $('.btn').click(function(){
      $('#photo1').animate({height: "11vw" , width: "11vw", top: "0", left:"0"});
      $('#photo2').animate({height: "11vw" , width: "11vw", top: "0", left:"0"});
      $('#photo3').animate({height: "11vw" , width: "11vw", top: "0", left:"0"});
      $('#photo4').animate({height: "11vw" , width: "11vw", top: "0", left:"0"});
      $('#photo5').animate({height: "11vw" , width: "11vw", top: "0", left:"0"});
      $('.member p').show(); 
      $('#info1').slideUp();
      $('#info2').slideUp();
      $('#info3').slideUp();
      $('#info4').slideUp();
      $('#info5').slideUp();
      $('.btn').hide();
      $('.list').css("background-color","#F4C70B");
      $('.page2').hide();
    });
});*/
