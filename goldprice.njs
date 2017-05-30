#!/usr/local/bin/node

var fs = require('fs');
var request = require('request');

var output;

function gochart(){
  request("https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=zyM3m6s76MNzQNc5FF6u" , function (error, response, body) {
  

    var NumofData = data.length;

    output = NumofData;

setTimeout(function(){
  gochart(input);
},0);
