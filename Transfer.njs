#!/usr/local/bin/node

var input = process.env.QUERY_STRING;
var esp = require('easy-sinopac/easy-sinopac');

var price, name, text;
var output;
var str;

function spilt(input) {
  price = input.match(/\d*/g);
  name = input.match(/%20.*/g)[0].slice(3);
/*
  esp.account.create(name, price, (err, response) => {
    if(err) {
      text = "錯誤！請稍後再試";
    }
    else {
      text = "成功建立名為"+response.dst+"的帳戶";
    }
  }); 
*/
  output = {
      "name"  : name,
      "price" : price[0],
      "text"  : text
  };
  str = JSON.stringify(output);

  console.log("Content-type: text/plain; charset=utf-8\n");
  console.log(str);

}

setTimeout(function(){
  spilt(input);},1000);


