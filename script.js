var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

// for bitcoin api 
var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
// for the ethereum api 
var settings2={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
// for the dogecoin api 
var settings3={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
 btc.innerHTML=response.bitcoin.usd;
});
$.ajax(settings2).done(function(response2){
    eth.innerHTML=response2.ethereum.usd;
   });
   $.ajax(settings3).done(function(response3){
    doge.innerHTML=response3.dogecoin.usd;
   });




























