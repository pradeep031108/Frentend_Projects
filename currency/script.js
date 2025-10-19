const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDisplay = document.getElementById('result');

// Currencies and demo conversion rates (base USD)
const currencies = {
  USD: 1,
  EUR: 0.92,
  INR: 83,
  GBP: 0.81,
  JPY: 134,
  CAD: 1.34,
  AUD: 1.49,
  CHF: 0.91,
  CNY: 7.3,
  NZD: 1.62
};

// Populate select elements
for (let currency in currencies) {
  fromSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
  toSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
}

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if(isNaN(amount) || amount <= 0){
    resultDisplay.textContent = "Please enter a valid amount";
    return;
  }

  const fromRate = currencies[fromSelect.value];
  const toRate = currencies[toSelect.value];
  const converted = (amount / fromRate) * toRate;
  resultDisplay.textContent = `${amount} ${fromSelect.value} = ${converted.toFixed(2)} ${toSelect.value}`;
});

// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});

document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349', '_blank');
});
