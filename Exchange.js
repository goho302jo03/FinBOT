const wget = require('node-wget');
const fs = require('fs');

var input = "CAD";
var search;
var found;

wget({
    url:  "http://asper-bot-rates.appspot.com/currency.json",
    dest: './',      // destination path or path with filenname, default is ./ 
    timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds 
  },
  function (error, response, body) {
    if (error) {
      console.log('--- error:');
      console.log(error);            // error encountered 
    }
    else {
      const file = fs.readFileSync('currency.json', 'utf8');
      switch(input){
        case "美金":
        case "USD":
          search = "USD";
          break;
        case "港幣":
        case "HKD":
          search = "HKD";
          break;
        case "英鎊":
        case "GBP":
          search = "GBP";
          break;
        case "澳幣":
        case "AUD":
          search = "AUD";
          break;
        case "加拿大幣":
        case "CAD":
          search = "CAD";
          break;
        case "新加坡幣":
        case "SGD":
          search = "SGD";
          break;
        case "瑞士法郎":
        case "CHF":
          search = "CHF";
          break;
        case "日圓":
        case "JPY":
          search = "JPY";
          break;
        case "泰銖":
        case "THB":
          search = "THB";
          break;
        case "印尼盾":
        case "IDR":
          search = "IDR";
          break;
        case "歐元":
        case "EUR":
          search = "EUR";
          break;
        case "人民幣":
        case "CNY":
          search = "CNY";
          break;
        default: 
          console.log("error");
      };
      var test = (JSON.parse(file)).rates;
      var buyCash = test[search].buyCash;
      var buySpot = test[search].buySpot;
      var sellCash = test[search].sellCash;
      var sellSpot = test[search].sellSpot;
      console.log(buyCash);
      console.log(buySpot);
      console.log(sellCash);
      console.log(sellSpot);
    }
  }
);

