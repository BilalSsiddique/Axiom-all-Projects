// function calculate() {

//     fetch('items.json')
//     .then(res=>res.json())
//     .then(data=> document.body.innerHTML= data[0].text)

// }
// calculate();

//Get DOM elements 
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap')

// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get currency code for currency 1 and 2
    const currencyOnecode = currencyOne.value;
    const currencyTwocode = currencyTwo.value;


    // fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/pair/${currencyOnecode}/${currencyTwocode}`)

    // send request to ExchangeRate-API for conversion rates of currencyone
    fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/pair/${currencyOnecode}/${currencyTwocode}`)
        .then(res => res.json())
        .then(data => {

            // Get the Conversion Rate from Currency One to Currency Two
            const conversionRate = data.conversion_rate;
            // update the DOM to display the Conversion Rate

            rate.innerText = `1 ${currencyOnecode} = ${(conversionRate).toFixed(2)} ${currencyTwocode} `;
            // Formatting currency Two Amount
            const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwocode }).format((amountCurrencyOne.value * conversionRate).toFixed(2))
            // Update the currency Two Amount
            amountCurrencyTwo.value = amount2;
        });

    // rate.innerText ='1 PKR = 16.79 UGX'




};

// Event Listeners
// Recalculate exchange rates when currency 1 changes
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input', calculate);

// Recalculate exchange rates when currency 2 changes
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);
// 
swap.addEventListener('click', () => {
    // Save Value of Currency One code to temp Variable
    const temp = currencyOne.value;
    // Copy Currency Two code to Currency one  
    currencyOne.value = currencyTwo.value;
    // Copy Currency One code from temp variable to Currency Two  
    currencyTwo.value = temp;
    // Recalculate Exchange rate after swap
    calculate();
})

// Execute calculate function on page load
calculate();


