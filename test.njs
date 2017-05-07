#!/usr/local/bin/node

var hello=process.env.QUERY_STRING;
var money={"test1":"1", "test2":hello};
var str=JSON.stringify(money); 
console.log('Content-type: text/plain; charset=utf-8\n');
console.log(str);

