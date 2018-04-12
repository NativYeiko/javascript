var url = 'http://data.fixer.io/api/latest?access_key=eff16e17710c78fc46dd4c53f27e92af&base=EUR&symbols=GBP,JPY,EUR,USD,RUB,CNY,CAD,BTC,BTE';

// define from currency, to currency, and amount

 function recupererValeur() {
// execute the conversion using the "convert" endpoint:
$.ajax({
    url: url,
    dataType: 'jsonp',

    success: function(res,status,req) {

      console.log(res.rates);
      console.log(status);
      var taux = res.rates
        , from = document.getElementById('from').value
        , to = document.getElementById('to').value
        , amount = document.getElementById('fromAmount').value

        var result = amount * taux[to] / taux[from]


      document.getElementById("toAmount").value=result


    }
})};
