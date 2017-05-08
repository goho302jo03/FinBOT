#!/usr/local/bin/node

var input = process.env.QUERY_STRING;
var price, name;
var output;
var str;

function spilt(input) {
  price = input.match(/\d*/g);
  name = input.match(/%20.*/g)[0].slice(3);
  output = {
    "name"  : name,
    "price" : price[0]
  };
  str = JSON.stringify(output);

  console.log("Content-type: text/plain; charset=utf-8\n");
  console.log(str);

}

setTimeout(function(){
  spilt(input);
},1000);
