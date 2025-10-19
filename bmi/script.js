const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if(isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0){
    result.textContent = "Please enter valid weight and height!";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  let message = "";

  if(bmi < 18.5) message = `Your BMI is ${bmiRounded} → A bit underweight. Focus on nutrition and stay active! 💪`;
  else if(bmi < 24) message = `Your BMI is ${bmiRounded} → Perfect! Keep up your healthy lifestyle! 🌟`;
  else if(bmi < 29) message = `Your BMI is ${bmiRounded} → Slightly above average. Stay active and eat balanced meals! 🏃‍♂️`;
  else message = `Your BMI is ${bmiRounded} → A little high. Prioritize fitness and healthy habits! 🏋️`;

  result.textContent = message;
});

// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});

document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349', '_blank');
});
