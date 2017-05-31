#!/usr/local/bin/node

var fs = require('fs');
var request = require('request');

var test;
var output;
var goldprice;
var data;
var all
var newestGoldpriceUSD;
var everydayGoldpriceUSD=[];

function gochart(){
  request("https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json" , function (error, response, body) {
    
    var endate = (JSON.parse(body)).dataset.end_date;
    goldprice = (JSON.parse(body)).dataset.data;  

    newestGoldpriceUSD = goldprice[0][1];
    //console.log("The newest gold price is US$"+newestGoldpriceUSD+" at "+endate);
    
      for(var i=31, j=0; i>=0,j<=31; i--,j++){
        everydayGoldpriceUSD[j] = goldprice[i][1]; 
      }
    

    output = {
              "endate"               : endate,
              "newestGoldpriceUSD"   : newestGoldpriceUSD,
              "everydayGoldpriceUSD" : everydayGoldpriceUSD,
    }
    
    str = JSON.stringify(output);
    
    console.log("Content-type: text/plain; charset=utf-8\n");
    console.log(str);

  });
}

setTimeout(function(){
  gochart();
},0);
