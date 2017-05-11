#!/usr/local/bin/node

var fs = require('fs');
var request = require('request');


var input = process.env.QUERY_STRING;
var str;
var output;

var Name= new RegExp(/<Name>(.*)<\/Name>/);
var DaysLow= new RegExp(/<DaysLow>(.*)<\/DaysLow>/);
var DaysHigh= new RegExp(/<DaysHigh>(.*)<\/DaysHigh>/);
var Volume= new RegExp(/<Volume>(.*)<\/Volume>/);
function task(input){
      str="gioog";
      request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22"+str+"%22)&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(error, response, body){



      var Name_S = body.match(Name);
      var DaysLow_S = body.match(DaysLow);
      var DaysHigh_S = body.match(DaysHigh);
      var Volume_S = body.match(Volume);
      
      if(Name_S== null){
        Name_S=["df"];
      }
      if(Name_S.length==2){
      output = {
            "Name" : Name_S[1] ,
            "DaysLow" : DaysLow_S[1]  ,
            "DaysHigh": DaysHigh_S[1] ,
            "Volume": Volume_S[1]
            };
      } else {
      output = {
            "Name" : "null" ,
            "DaysLow" : "null"  ,
            "DaysHigh": "null" ,
            "Volume": "null"
            };
            
      }

      str = JSON.stringify(output);
      
      console.log("Content-type: text/plain; charset=utf-8\n");
      console.log(str);
      
      });

  
}

setTimeout(function(){
  task(input);
},1000);
