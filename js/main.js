//let btn = document.getElementById("button")
let language = "ru-RU"
let btn = document.getElementById("button")


function pay() {
  var widget = new cp.CloudPayments({
    language: language
  })

  widget.pay('auth', // или 'charge'
    { //options
      publicId: 'pk_36321942fc3d1ade1ea0804adcf77', //id из личного кабинета
      description: document.getElementById(description), //назначение
      amount: parseFloat(document.getElementById(amount)), //сумма
      currency: 'RUB', //валюта
      accountId: document.getElementById(email), //идентификатор плательщика (необязательно)
    }, {
      onSuccess: function(options) { // success
        //действие при успешной оплате
      },
      onFail: function(reason, options) { // fail
        //действие при неуспешной оплате
      },
      onComplete: function(paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
        //например вызов вашей аналитики Facebook Pixel
      }
    }
  )
}

window.addEventListener('load', pay)
btn.addEventListener('click', pay)

