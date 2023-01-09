function grade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 65 && score <= 69) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(grade(95)); // Output: A
  console.log(grade(85)); // Output: B
  console.log(grade(75)); // Output: C
  console.log(grade(65)); // Output: D
  console.log(grade(50)); // Output: F
  