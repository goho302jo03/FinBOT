#!/usr/local/bin/node

var input;
var output;
var str;

var keyData = [
  "927b7cbc-09fe-479c-8a0e-a23096287f1c",
  "2416ab51-96a1-4928-8804-67690a11b439",
  "36a2b960-29c8-44ad-b44e-8f5a95c5b5c4"
];

var targetUrl = "https://sandbox.sinopac.com/WebAPI/Service.svc/CreditCardTradeMaintain";

var request = require('request');
/*
  request.post(
    {
      url: targetUrl,
      encoding: 'utf8'
    },
    function(error, response, body){
      if(response.statusCode == 401){
        input = "Hello World";
      }
      else{
        input = response.statusCode;
      }
    }
  );
*/


output = {
  "text"  : input
};

str = JSON.stringify(output);

console.log("Content-type: text/plain; charset=utf-8\n");
console.log(str);

