const currencyElement_one = document.getElementById('currency-one');
const currencyAmount_one = document.getElementById('amount-one');
const currencyElement_two = document.getElementById('currency-two');
const currencyAmount_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate and update the DOM
function calculate(event) {
 const currencyOne = currencyElement_one.value;
 const currencyTwo = currencyElement_two.value;

 fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
  .then(res => res.json())
  .then(data => {
   const rate = data.rates[currencyTwo];

   rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

   currencyAmount_two.value = (currencyAmount_one.value * rate).toFixed(2)

  });
}

// Event Listeners
currencyElement_one.addEventListener('change', calculate);
currencyAmount_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
currencyAmount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
 const temp = currencyElement_one.value;
 currencyElement_one.value = currencyElement_two.value;
 currencyElement_two.value = temp;

 calculate();
})

calculate();


