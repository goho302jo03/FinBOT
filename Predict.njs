#!/usr/local/bin/node

var fs = require("fs");
var request = require('request');

var input = process.env.QUERY_STRING;
var str;
var output;

function task(input){
  

  var stock_list=["BAC","CHK","GE","ABEV","F","WLL","WFT","X","P","FCX","PBR","MRO","SWN","ESV","RAD","KGC","RIG","AKS","NOK","WFC"];
 
  var i;
  for(i=0;i<stock_list.length;i++){
    var j;
    j=Math.floor(Math.random()*stock_list.length);
    var temp;
    temp=stock_list[i];
    stock_list[i]=stock_list[j];
    stock_list[j]=temp;
  }

  var stock1=stock_list[Math.floor(Math.random()*stock_list.length)];
  var stock2=stock_list[Math.floor(Math.random()*stock_list.length)];
  var stock3=stock_list[Math.floor(Math.random()*stock_list.length)];
  var stock4=stock_list[Math.floor(Math.random()*stock_list.length)];
  var stock5=stock_list[Math.floor(Math.random()*stock_list.length)];
  
  var confident1=Math.floor(Math.random()*100+1);  
  var confident2=Math.floor(Math.random()*100+1);
  var confident3=Math.floor(Math.random()*100+1);
  var confident4=Math.floor(Math.random()*100+1);
  var confident5=Math.floor(Math.random()*100+1);

  output={
    "Name" : input,
    "stock1" : stock1,
    "stock2" : stock2,
    "stock3" : stock3,
    "stock4" : stock4,
    "stock5" : stock5,
    "confident1" : confident1,
    "confident2" : confident2,
    "confident3" : confident3,
    "confident4" : confident4,
    "confident5" : confident5
  };

  str = JSON.stringify(output);

  console.log("Content-type: text/plain; charset=utf-8\n");
  console.log(str);

}

setTimeout(function(){
  task(input);
},1000);
