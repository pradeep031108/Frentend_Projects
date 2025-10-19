const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const addBtn = document.getElementById('addExpense');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');
const chartBox = document.getElementById('chartBox');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function saveExpenses() { localStorage.setItem('expenses', JSON.stringify(expenses)); }

function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;
  const categoryTotals = {};

  expenses.forEach((exp, index) => {
    total += exp.amount;
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;

    const div = document.createElement('div');
    div.className = 'expense-item';
    div.innerHTML = `
      <div>
        <strong>${exp.desc}</strong> - ₹${exp.amount.toFixed(2)} 
        <span style="color:#ffde59; margin-left:6px;">[${exp.category}]</span>
      </div>
      <span class="delete-btn" onclick="deleteExpense(${index})">✖</span>
    `;
    expenseList.appendChild(div);
  });

  totalAmount.textContent = total.toFixed(2);
  renderChart(categoryTotals);
}

function deleteExpense(index) {
  expenses.splice(index,1);
  saveExpenses();
  renderExpenses();
}

function renderChart(categoryTotals) {
  chartBox.innerHTML = '';
  const colors = {
    Food:'#ff6f61',
    Transport:'#6a5acd',
    Entertainment:'#ffde59',
    Shopping:'#00ffe0',
    Other:'#ff7e5f'
  };
  const maxAmount = Math.max(...Object.values(categoryTotals), 50); // avoid zero height

  for(let category in categoryTotals){
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    const heightPercent = (categoryTotals[category]/maxAmount) * 100;
    bar.style.height = `${heightPercent}%`;
    bar.style.backgroundColor = colors[category] || '#fff';
    bar.textContent = Math.round(categoryTotals[category]);
    bar.title = `${category}: ₹${categoryTotals[category].toFixed(2)}`;
    chartBox.appendChild(bar);
  }
}

addBtn.addEventListener('click', () => {
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categorySelect.value;

  if(!desc || isNaN(amount) || amount <= 0) return;

  expenses.push({desc, amount, category});
  descInput.value = '';
  amountInput.value = '';
  saveExpenses();
  renderExpenses();
});

// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});
document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349','_blank');
});

// Initial render
renderExpenses();
