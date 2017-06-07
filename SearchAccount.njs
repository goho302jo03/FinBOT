#!/usr/local/bin/node

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://groupb:finbot@localhost:27017/uidd2017_groupB";


var account = "Amy";    //從前端傳入


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("account").findOne( {account:account}, function(err, result) {
    if (err) throw err;
    console.log(result.money);
    db.close();
  });
});

