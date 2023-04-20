// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//parameters : weight:number, height:number
//return : string
//example
// 80, 1.80 -> "Normal"
function bmi(weight, height) {
  // weight / height * 2
  let bmi = weight / (height * height);
  //check the case
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}
