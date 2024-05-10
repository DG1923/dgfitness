function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

  
    if (!weight || !height) {
      alert("Please enter both weight and height.");
      return;
    }
  
    var bmi = weight / (height * height);
    var bmiCategory;
  
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi < 25) {
      bmiCategory = "Normal weight";
    } else if (bmi < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }

    document.getElementById('result').innerText = "Your BMI is " + bmi.toFixed(1) + ", which is classified as " + bmiCategory + ".";
  }
  