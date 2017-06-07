#!/usr/local/bin/node

var fs = require('fs');
var request = require('request');


var output;
var endate;
var goldprice;
var newestGoldpriceUSD;
var date=[];
var everydayGoldpriceUSD=[];
var str

function gochart(){
  request("https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json" , function (error, response, body) {
    
    endate = (JSON.parse(body)).dataset.end_date;
    goldprice = (JSON.parse(body)).dataset.data;  

    newestGoldpriceUSD = goldprice[0][1];
    //console.log("The newest gold price is US$"+newestGoldpriceUSD+" at "+endate);
    
      for(var i=20, j=0; i>=0,j<=20; i--,j++){
        date[j] = goldprice[i][0];
        everydayGoldpriceUSD[j] = goldprice[i][1]; 
      }
    

    output = {
              "endate"               : endate,
              "newestGoldpriceUSD"   : newestGoldpriceUSD,
              "date"                 : date,
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
