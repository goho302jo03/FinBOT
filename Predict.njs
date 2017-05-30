#!/usr/local/bin/node

var fs = require("fs");
var request = require('request');

var input = process.env.QUERY_STRING;
var str;
var output;

function task(input){
  
  output={
    "Name" : input,
    "DaysLow" : "segd"
  };

  str = JSON.stringify(output);

  console.log("Content-type: text/plain; charset=utf-8\n");
  console.log(str);

}

setTimeout(function(){
  task(input);
},1000);
