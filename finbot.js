$(document).ready(function(){
  
  var funcNum = 0;
  var text;
  var instruction = {};

  //聊天機器人關鍵字彙
  const qaList = [
  { Q:"幹你娘", A:"我才幹你娘!"},
  { Q:"嗨|哈囉", A:"嗨~你好|哈囉~有什麼事呢?"},
  { Q:"謝謝", A:"不客氣!"},
  { Q:"對不起|抱歉|不好意思", A:"別說抱歉!|別客氣，儘管說!"},
  { Q:"可否|可不可以", A:"你確定想*?"},
  { Q:"我想", A:"你為何想*?"},
  { Q:"我要", A:"你為何要*?"},
  { Q:"你是", A:"你認為我是*?"},
  { Q:"認為|以為", A:"為何說*?"},
  { Q:"感覺", A:"常有這種感覺嗎?"},
  { Q:"為何不", A:"你希望我*!"},
  { Q:"是否", A:"為何想知道是否*?"},
  { Q:"不能", A:"為何不能*?|你試過了嗎?|或許你現在能*了呢?"},
  { Q:"我是", A:"你好，久仰久仰!"},
  { Q:"甚麼|什麼|何時|誰|哪裡|如何|為何|因何", A:"為何這樣問?|為何你對這問題有興趣?|你認為答案是甚麼呢?|你認為如何呢?|你常問這類問題嗎?|這真的是你想知道的嗎?|為何不問問別人?|你曾有過類似的問題嗎?|你問這問題的原因是甚麼呢?"},
  { Q:"原因", A:"這是真正的原因嗎?|還有其他原因嗎?"}, 
  { Q:"理由", A:"這說明了甚麼呢?|還有其他理由嗎?"},
  { Q:"你好|嗨|您好", A:"你好，有甚麼問題嗎?"},
  { Q:"或許", A:"你好像不太確定?"},
  { Q:"不曉得|不知道", A:"為何不知道?|在想想看，有沒有甚麼可能性?"},
  { Q:"不想|不希望", A:"有沒有甚麼辦法呢?|為何不想*呢?|那你希望怎樣呢?"}, 
  { Q:"想|希望", A:"為何想*呢?|真的想*?|那就去做阿?為何不呢?"},
  { Q:"不", A:"為何不*?|所以你不*?"},
  { Q:"請", A:"我該如何*呢?|你想要我*嗎?"},
  { Q:"你", A:"你真的是在說我嗎?|別說我了，談談你吧!|為何這麼關心我*?|不要再說我了，談談你吧!|你自己*"},
  { Q:"總是|常常", A:"能不能具體說明呢?|何時?"},
  { Q:"像", A:"有多像?|哪裡像?"},
  { Q:"對", A:"你確定嗎?|我了解!"},
  { Q:"朋友", A:"多告訴我一些有關他的事吧!|你認識他多久了呢?"},
  { Q:"電腦", A:"你說的電腦是指我嗎?"}, 
  { Q:"難過", A:"別想它了|別難過|別想那麼多了|事情總是會解決的"},
  { Q:"高興", A:"不錯ㄚ|太棒了|這樣很好ㄚ"},
  { Q:"是阿|是的", A:"甚麼事呢?|我可以幫助你嗎?|我希望我能幫得上忙!"},
  { Q:"", A:"我了解|我能理解|還有問題嗎 ?|請繼續說下去|可以說的更詳細一點嗎?|這樣喔! 我知道!|然後呢? 發生甚麼事?|再來呢? 可以多說一些嗎|接下來呢? |可以多告訴我一些嗎?|多談談有關你的事，好嗎?|想多聊一聊嗎|可否多告訴我一些呢?"}
  ];
  
  //宣告random的function
  function random(n) { // 從 0 到 n-1 中選一個亂數
    return Math.floor(Math.random()*n);
  }

  //宣告answer的function，負責做出回應
  function botAppend(string) {
    setTimeout(function () { 
      $('.dialogbox').append(
        "<div class=\"finbot\">"+
          "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
          "<div class=\"frecord\">" + string + "</div>"+
        "</div>");

      $('.dialogbox').animate({ 
        scrollTop: 99999999
        }, 1000);
    }, 500+random(500));
  }

  //宣告getAnswer的function，判斷輸入，找出適合的回應
  function getAnswer() {
    var say = $('#comment').val(); // 取得使用者輸入的問句。
    for (var i in qaList) { // 對於每一個 QA 
      try {
        var qa = qaList[i];
        var qList = qa.Q.split("|"); // 取出 Q 部分，分割成一個一個的問題字串 q
        var aList = qa.A.split("|"); // 取出回答 A 部分，分割成一個一個的回答字串 q
        for (var qi in qList) { // 對於每個問題字串 q
          var q = qList[qi];
          if (q =="") // 如果是最後一個「空字串」的話，那就不用比對，直接任選一個回答。
            return aList[random(aList.length)]; // 那就從答案中任選一個回答
          var r = new RegExp("(.*)"+q+"([^?.;]*)", "gi"); // 建立正規表達式 (.*) q ([^?.;]*)
          if (say.match(r)) { // 比對成功的話
            tail = RegExp.$2; // 就取出句尾
            // 將問句句尾的「我」改成「你」，「你」改成「我」。
            tail = tail.replace("我", "#").replace("你", "我").replace("#", "你");
            return aList[random(aList.length)].replace(/\*/, tail); // 然後將 * 改為句尾進行回答
          }
        }
      } catch (err) {}
    }
    return "然後呢？"; // 如果發生任何錯誤，就回答「然後呢？」來混過去。
  }   

  //宣告append的function，使用者輸入字串時需要呼叫
  function userAppend() {
    if($('#comment').val()=="");
    else {
      $('.dialogbox').append(
        "<div class=\"user\">"+
          "<a><img class=\"urpic\" src=\"./images/chatroom/urpic.png\"></a>"+
          "<div class=\"urecord\">" + $('#comment').val() + "</div>"+
          "<div style=\"clear:both\"></div>"+
        "</div>");

      $('.dialogbox').animate({ 
        scrollTop: 9999999999999999
        }, 1000);
    
    }
  }

  //判斷是哪種模式
  function funcMode() {
    if($('#comment').val()=="");
    else {
      if(funcNum==0){ 
        botAppend(getAnswer());
      }
      else if(funcNum==1){ 
        if($('#comment').val()=="999"){
          funcNum=0;
          text = "已經回到聊天模式囉~~";
          botAppend(text);
        }
        else {
          $.get("./Stock.njs",$('#comment').val(),
            function(data){
              if(data.Name != "null"){
              $('.dialogbox').append(
                "<div class=\"finbot\">"+
                  "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
                  "<div class=\"frecord\">公司名稱 "+data.Name+"<br>價格低點 "+data.DaysLow+"<br>價格高點 "+data.DaysHigh+"<br>交易量 "+data.Volume+ "</div>"+
                "</div>");
              }
              else {
              $('.dialogbox').append(
                "<div class=\"finbot\">"+
                  "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
                  "<div class=\"frecord\">"+"對不起 我不認識這間公司"+"</div>"+
                "</div>");
              }
            
            $('.dialogbox').animate({
              scrollTop: 999999
              }, 1000);



            },"json");

        }
      }
      else if(funcNum==2){
        if($('#comment').val()=="999"){
          funcNum=0;
          text = "已經回到聊天模式囉~~";
          botAppend(text);
        }
        else {
          $.get("./Exchange.njs",$('#comment').val(),
            function(data){ 
              $('.dialogbox').append(
                "<div class=\"finbot\">"+
                  "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
                  "<div class=\"frecord\">" +"現金買入："+data.buyCash+"<br>即期買入："+data.buySpot+"<br>現金賣出："+data.sellCash+"<br>即期賣出："+data.sellSpot+ "</div>"+
                "</div>");

              $('.dialogbox').animate({ 
                scrollTop: 99999999
                }, 1000);
              
              text = "請輸入想要查詢的幣別<br><br>欲取消查詢請輸入999";
              botAppend(text);
            },"json");
        }
      }
      else if(funcNum==3){
        if($('#comment').val()=="999"){
          funcNum=0;
          text = "已經回到聊天模式囉~~";
          botAppend(text);
        }
        else {
          $.get("./Transfer.njs",$('#comment').val(),
            function(data){
              
              $('.dialogbox').append(
                "<div class=\"finbot\">"+
                  "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
                  "<div class=\"frecord\">" +"確認匯款資訊中...."+"<br>受款人名："+data.name+"<br>匯款金額："+data.price+
                  "<br>系統回復為："+data.text+"<br>已確認金額與轉帳對象<br>轉帳成功!!!"+"</div>"+
                "</div>");

              $('.dialogbox').animate({ 
                scrollTop: 99999999
                }, 1000);
              
              text = "請輸入金額與轉帳對象<br>Ex:8000 Eric<br><br>欲取消轉帳模式請輸入999";
              botAppend(text);
            },"json");
        }
      }
      else if(funcNum==4){
        $('.dialogbox').append(
          "<div class=\"finbot\">"+
            "<a><img class=\"finpic\" src=\"./images/chatroom/finpic.png\"></a>"+
            "<canvas class=\"finChart\" width=\"10\" height=\"10\""+"</canvas>"+
          "</div>");
        
        Chart.defaults.global.defaultFontSize = 50;

        var ctx = document.getElementsByClassName("finChart");
        var finChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Red", "Blue"],
            datasets: [{
              label: "# of Customer",
              data: [7, 4],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 3
            }]
          },
          options: {
            legend: {display: false},
            title: {display: true, text: $('#comment').val()},
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                }
              }]
            }
          }
        });

        delete finChart;

        funcNum=0;
        text = "已回到一般模式，測試結束！";
        botAppend(text);
      }
      
      $('#comment').val("");
    }
  }

  
  //按下送出時需呼叫append
  $('#send').click(function() {
    userAppend();
    funcMode();
  });

  //按下enter鍵時需呼叫append
  $('#comment').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      userAppend();
      funcMode();
    }
  });

  //按下左下功能鍵後需要toggle
  $('#fun').click(function(){
    $('#funul').toggle('slow');
  });

  //按右上選單鍵後需要toggle
  $('#funpic').click(function(){
    $('#funpicul').toggle('slow');
  });

  //按下"股市查詢"後，funcNum會設定為1
  $('#search1').click(function(){
    $('#funul').toggle('slow');
    funcNum = 1;
    text = "請輸入想要查詢的股票代號<br><br>欲取消查詢請輸入999";
    botAppend(text);
  }); 
  
  //按下"匯率查詢"後，funcNum會設定為2
  $('#search2').click(function(){
    $('#funul').toggle('slow');
    funcNum = 2;
    text = "請輸入想要查詢的幣別<br><br>欲取消查詢請輸入999";
    botAppend(text);
  });

  //按下"戶頭轉帳"後，funcNum會設定為3
  $('#search3').click(function(){
    $('#funul').toggle('slow');
    funcNum = 3;
    text = "請輸入金額與轉帳對象<br>Ex:8000 Eric<br><br>欲取消轉帳模式請輸入999";
    botAppend(text);
  });

  //按下"圖表測試"後，funcNum會設定為4
  $('#search4').click(function(){
    $('#funul').toggle('slow');
    funcNum = 4;
    text = "[測試模式]請輸入你的名字<br>輸出圖表後將自動切換回一般模式";
    botAppend(text);
  });

  //按下"帳戶登入"後，進入登入頁面
  $('#menu1').click(function(){
    $('#funpicul').toggle('slow');
    location.href = "./login.html";
  });

  //按下"錯誤回報"後， 
  $('#menu2').click(function(){
    $('#funpicul').toggle('slow');
  });

  //按下"聯絡我們"後，
  $('#menu3').click(function(){
    $('#funpicul').toggle('slow');
  });

});

