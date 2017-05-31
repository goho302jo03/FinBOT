#!/usr/local/bin/node

const MongoClient = require('mongodb').MongoClient;
const esp = require('./node_modules/easy-sinopac');
const url = "mongodb://groupb:finbot@localhost:27017/uidd2017_groupB";

var source = "Amy";
var destination = "Bob";
var money = 24;
var srcMoney;
var desMoney;


esp.transfer.create(source, destination, money);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("account").findOne( {account:source}, function(err, result){
    if(err) throw err;
    srcMoney = result.money - money;
    db.collection("account").update({account:source}, {$set:{money:srcMoney}}, function(err, res) {
      if (err) throw err;
      console.log(res.result.nModified + " record updated");
      console.log(srcMoney);
    });
  });
  db.collection("account").findOne( {account:destination}, function(err, result){
    if(err) throw err;
    desMoney = result.money + money;
    db.collection("account").update({account:destination}, {$set:{money:desMoney}}, function(err, res) {
      if (err) throw err;
      console.log(res.result.nModified + " record updated");
      console.log(desMoney);
    });
    db.close();
  });
});
