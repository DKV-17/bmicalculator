function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(1);

  document.getElementById('bmiResult').textContent = roundedBMI;
  document.getElementById('bmiCategory').textContent = getBMICategory(bmi);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Low Weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Obesity";
  } else {
    return "Severe Obesity";
  }
}
