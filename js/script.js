$(document).ready(function () {

  let memoryBuy = null;

  let memorySell = null;

  $('button').click(function () {

    $.getJSON('https://api.blockchain.com/v3/exchange/tickers')


      .done(function (data) {
        console.log(data[109])

        $('#kurs').empty()

        $('#kurs').append(`<p id="buy">Buy: ${data[109].price_24h}</p>`)

        $('#kurs').append(`<p id="sell">Sell: ${data[109].last_trade_price}</p>`)


        if (memoryBuy === null) {

        } else if (memoryBuy === data[109].price_24h) {
          $('#buy').append(' <i class="fa-solid fa-arrows-left-right"></i>')
        } else if (memoryBuy < data[109].price_24h) {
          $('#buy').append(' <i class="fa-solid fa-arrow-down"></i>')
        } else {
          $('#buy').append(' <i class="fa-solid fa-arrow-up"></i>')
        };


        if (memorySell === null) {

        } else if (memorySell === data[109].last_trade_price) {
          $('#sell').append(' <i class="fa-solid fa-arrows-left-right"></i>')
        } else if (memorySell < data[109].last_trade_price) {
          $('#sell').append(' <i class="fa-solid fa-arrow-down"></i>')
        } else {
          $('#sell').append(' <i class="fa-solid fa-arrow-up"></i>')
        };

        memoryBuy = data[109].price_24h;

        memorySell = data[109].last_trade_price;
      })

      .fail(function (error) {
        console.error(error);
      })
  })




})