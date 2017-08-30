var express = require('express');
var request = require('request');

var app = express();

request({
    url: "https://blockchain.info/stats?format=json",
    json: true
  }, function(error, response, body){
      btcoinPrice = body.market_price_usd;
      btcBlocks = body.n_blocks_total;
  }
);

app.get("/", function(req, res){
  res.sendfile('index.html');
});

app.get("/btcprice", function(req, res){
  res.send("Bitcoin to the moon: " + btcoinPrice);
});

app.get("/block", function(req, res){
  res.send("Current Block height: " + btcBlocks);
});

app.listen(8001, function(){
  console.log("Bitcoin to the moon listening on port 8001....");
});