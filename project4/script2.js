// function calculate() {

//     fetch('items.json')
//     .then(res=>res.json())
//     .then(data=> document.body.innerHTML= data[0].text)

// }
// calculate();

//Get DOM elements 
const currencyOne = document.getElementById('currency-one');

const tablebody = document.getElementById('table-body')

// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get currency code for currency 1 and 2
    const currencyOnecode = currencyOne.value;
    // fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/pair/${currencyOnecode}/${currencyTwocode}`)

    // send request to ExchangeRate-API for conversion rates of currencyone
    fetch(`https://v6.exchangerate-api.com/v6/ea0a619add01d672303229dc/latest/${currencyOnecode}`)
        .then(res => res.json())
        .then(data => {
            // Alternative way but not good
            // for (const property in data.conversion_rates) {
            //     tabledata += `<tr>
            //             <td>${property}: ${data.conversion_rates[property]}</td>
            //     </tr>`
            // }
            let tabledata = "";
            Object.entries(data.conversion_rates).forEach(([key, value]) => {
                tabledata += `<tr>
                                <td>${key} = ${value}</td>
                              </tr>`;
            });
            tablebody.innerHTML = tabledata;
        });


    // rate.innerText = '1 PKR = 16.79 UGX'
};


// Display accordingly exchange rates when currency 1 changes
currencyOne.addEventListener('change', calculate);


// Execute calculate function on page load
calculate();


