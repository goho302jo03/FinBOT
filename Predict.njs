#!/usr/local/bin/node

var fs = require("fs");
var request = require('request');

var input = process.env.QUERY_STRING;
var str;
var output;

function task(input){
  
  output={
    "Name" : input,
    "stock1" : "stock1",
    "stock2" : "stock2",
    "stock3" : "stock3",
    "stock4" : "stock4",
    "stock5" : "stock5",
    "confident1" : 35,
    "confident2" : 97,
    "confident3" : 73,
    "confident4" : 35,
    "confident5" : 34
  };

  str = JSON.stringify(output);

  console.log("Content-type: text/plain; charset=utf-8\n");
  console.log(str);

}

setTimeout(function(){
  task(input);
},1000);
