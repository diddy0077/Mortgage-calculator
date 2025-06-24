

const form = document.getElementById('mortgage-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let monthlyRepayment;
  let mortgageAmount = document.getElementById('amount').value.trim();
let years = document.getElementById('term').value.trim();
let interestRate = document.getElementById('rate').value.trim();
const selectedType = document.querySelector('input[name="type"]:checked').value;
const calcBtn = document.getElementById('calcBtn');
const resetBtn = document.getElementById('resetBtn');
const monthlyResult = document.getElementById('monthly-result');
const totalResult = document.getElementById('total-result');
const feedback = document.getElementById('feedback');
  if(mortgageAmount === '' || years === '' || interestRate === '' || mortgageAmount < 0 || (interestRate <= 0 && interestRate > 100)) {
    feedback.textContent = 'Invalid Inputs!'
  } else {
    interestRate = Number(interestRate);
    interestRate = (interestRate / 100) / 12;
    const totalMonths = Number(years) * 12;
    if(selectedType === 'repayment') {
      monthlyRepayment = Number(mortgageAmount) * interestRate * (Math.pow(1 + interestRate, totalMonths)) / 
      (Math.pow(1 + interestRate, totalMonths) - 1)
      monthlyRepayment = Number(monthlyRepayment.toFixed(2));
      monthlyResult.textContent = `£${monthlyRepayment}`;
       let total;
      total = Number(monthlyRepayment) * totalMonths;
      total = total.toFixed(2);
      totalResult.textContent = `£${total}`;
    } else if(selectedType === 'interest-only') {
      let interestOnly = Number(mortgageAmount) * interestRate;
      interestOnly = interestOnly.toFixed(2)
      monthlyResult.textContent = `£${interestOnly}`;
      let interestTotal;
      interestTotal = interestOnly * totalMonths;
      interestTotal = interestTotal.toFixed(2);
      totalResult.textContent = `£${interestTotal}`;
    }
  }
})
