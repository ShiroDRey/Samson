//let btn = document.getElementById("button")
let language = "ru-RU"

function pay() {
  var widget = new cp.CloudPayments({
    language: language
  })
let data = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        phone: document.getElementById('phonenumber').value
    }

    let recurrent = document.getElementById('recurrent')
    if (recurrent.checked) {
        data.CloudPayments = {
            recurrent: {
                interval: 'Day',
                period: 1
            } //один раз в месяц начиная со следующего месяца
        }
    }
  widget.pay('auth', // или 'charge'
    { //options
      publicId: 'pk_36321942fc3d1ade1ea0804adcf77', //id из личного кабинета
      description: document.getElementById(description), //назначение
      amount: parseFloat(document.getElementById(amount).value), //сумма
      currency: 'RUB', //валюта
      accountId: document.getElementById(email).value, //идентификатор плательщика (необязательно)
      email: document.getElementByID(email).value
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

window.onload = function() {
  var btn = document.getElementById("button")
  btn.addEventListener('click', pay)
}


