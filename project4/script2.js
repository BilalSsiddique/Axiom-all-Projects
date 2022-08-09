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
const displayRates = document.getElementById('num');
const tablebody = document.getElementById('table-body')

// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get currency code for currency 1 and 2
    const currencyOnecode = currencyOne.value;
    console.log(currencyOnecode)



    // fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/pair/${currencyOnecode}/${currencyTwocode}`)

    // send request to ExchangeRate-API for conversion rates of currencyone
    fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/latest/${currencyOnecode}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let tabledata = "";
            for (const property in data.conversion_rates) {
                tabledata += `<tr>
                        <td>${property}: ${data.conversion_rates[property]}</td>
                </tr>`
            }
            
            tablebody.innerHTML = tabledata;
        });
    

    // Get the Conversion Rate
    // const conversionRate = data.conversion_rates;


    // update the DOM to display the Conversion Rate
    // displayRates.innerHTML= JSON.stringify(conversionRate)
    // console.log(conversionRate);    
    // rate.innerText = `1 ${currencyOnecode} = ${(conversionRate).toFixed(2)} ${currencyTwocode} `;
    // Formatting currency Two Amount
    // const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwocode }).format((amountCurrencyOne.value * conversionRate).toFixed(2))
    // Update the currency Two Amount
    // amountCurrencyTwo.value= amount2;

    // rate.innerText = '1 PKR = 16.79 UGX'




};

// Event Listeners
// Recalculate exchange rates when currency 1 changes
currencyOne.addEventListener('change', calculate);


// Recalculate exchange rates when currency 2 changes
// currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
// amountCurrencyTwo.addEventListener('input', calculate);
// 


// Execute calculate function on page load
calculate();


