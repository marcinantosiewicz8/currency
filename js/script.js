let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit" , (event) =>{
    event.preventDefault();
    let amountElement = document.querySelector(".js-amount");
    let currencyElement = document.querySelector(".js-currency");
    let resultElement = document.querySelector(".js-result");
    let countCourse
    switch(currencyElement.value){
          case "EUR": {
            countCourse = amountElement.value / 4.75 ;
            resultElement.innerHTML = `${amountElement.value} zł = ${countCourse.toFixed(2)} eur`;
            break;
          }
          case "USD": {
            countCourse = amountElement.value / 4.44 ;
            resultElement.innerHTML = `${amountElement.value} zł = ${countCourse.toFixed(2)} usd`;
            break;
          }
          case "CHF": {
            countCourse = amountElement.value / 4.81 ;
            resultElement.innerHTML = `${amountElement.value} zł = ${countCourse.toFixed(2)} chf`;
            break;
          }
    }
});