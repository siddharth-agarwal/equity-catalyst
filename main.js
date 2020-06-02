// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

var browser = 'https://cloud.iexapis.com/stable/stock'
var ticker = '/AAPL'
var data = '/book'
var token = '?pk_8bcad0d669594bdfb4fe4c79a8558d23'

var api_call = browser + ticker + data + token;

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', api_call, true)

request.onload = function() {
    // Begin accessing JSON data here

    var data = JSON.parse(this.response)
    data.forEach(line => {
        console.log(line.title)
      })


  }
  
  request.send()
