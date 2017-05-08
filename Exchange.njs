#!/usr/local/bin/node


var chmod = require('chmod');
var fs = require('fs');
var request = require('request');

var search;
var found;
var test;
var buyCash;
var buySpot;
var sellCash;
var sellSpot;
var input = process.env.QUERY_STRING;
var output;
var str;


function task(input){

  request("http://asper-bot-rates.appspot.com/currency.json" , function (error, response, body) {
      
      switch(input) {
        case "美金":
        case "USD":
          search = "USD";
          break;
        case "港幣":
        case "HKD":
          search = "HKD";
          break;
        case "英鎊":
        case "GBP":
          search = "GBP";
          break;
        case "澳幣":
        case "AUD":
          search = "AUD";
          break;
        case "加拿大幣":
        case "CAD":
          search = "CAD";
          break;
        case "新加坡幣":
        case "SGD":
          search = "SGD";
          break;
        case "瑞士法郎":
        case "CHF":
          search = "CHF";
          break;
        case "日圓":
        case "JPY":
          search = "JPY";
          break;
        case "泰銖":
        case "THB":
          search = "THB";
          break;
        case "印尼盾":
        case "IDR":
          search = "IDR";
          break;
        case "歐元":
        case "EUR":
          search = "EUR";
          break;
        case "人民幣":
        case "CNY":
          search = "CNY";
          break;
        default: 
          search = "";
      }
      
      
      test = (JSON.parse(body)).rates;
      buyCash = test[search].buyCash;
      buySpot = test[search].buySpot;
      sellCash = test[search].sellCash;
      sellSpot = test[search].sellSpot;

      output = {
            "buyCash" : buyCash ,
            "buySpot" : buySpot ,
            "sellCash": sellCash,
            "sellSpot": sellSpot};

      str = JSON.stringify(output);
      
      console.log("Content-type: text/plain; charset=utf-8\n");
      console.log(str);
  });

}

setTimeout(function(){
  task(input);
},1000);
