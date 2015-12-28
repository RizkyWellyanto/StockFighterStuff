XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest();

var base_url = "https://api.stockfighter.io/ob/api";
var apiKey = "813d4e6af790005bc31fa185beed8f0e98b9aa87";
var venue = "ZYOPEX";
var stock = "QOOH";
var account = "DKS62560734";

var price = 90000;
var quantity = 5000;
var direction = "buy";
var orderType = "limit";

var order = {
    account:account,
    venue:venue,
    symbol:stock,
    price: price,
    qty: quantity,
    direction:direction,
    orderType:orderType
};

xhr.open("POST",base_url+"/venues/"+venue+"/stocks/"+stock+"/orders");
xhr.setRequestHeader("X-Starfighter-Authorization",apiKey);
xhr.send(JSON.stringify(order));

