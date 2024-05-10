function calculateTDEE() {

    var age = parseFloat(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var activity = document.getElementById('activity').value;
    var bmr;
    if(!age||!weight||!height){
      alert("Please enter all field !")
    }
    else{
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      var tdee;
      switch (activity) {
        case 'sedentary':
          tdee = bmr * 1.2;
          break;
        case 'lightly_active':
          tdee = bmr * 1.375;
          break;
        case 'moderately_active':
          tdee = bmr * 1.55;
          break;
        case 'very_active':
          tdee = bmr * 1.725;
          break;
        case 'extra_active':
          tdee = bmr * 1.9;
          break;
      }
      document.getElementById('result').innerText = 'Your TDEE is ' + tdee.toFixed(2) + ' calories per day.';
    }
   
}
  