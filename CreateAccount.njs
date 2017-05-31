#!/usr/local/bin/node

const MongoClient = require('mongodb').MongoClient;
const esp = require('./node_modules/easy-sinopac');
const url = "mongodb://groupb:finbot@localhost:27017/uidd2017_groupB";

var account = "Bob";
var pass = "123456";
var money = 100;

esp.account.create(account, money);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { account: account, pass: pass, money: money };
  db.collection("account").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
