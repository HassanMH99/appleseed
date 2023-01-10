// Using an if/else conditional expression:
function validatePassword(password) {
    if (password.length > 7) {
      return "Strong";
    } else {
      return "Weak";
    }
  }
//   Using a ternary conditional expression:
function validatePassword(password) {
    return password.length > 7 ? "Strong" : "Weak";
  }
//   Using a && logical operator:
function validatePassword(password) {
    return password.length > 7 && "Strong" || "Weak";
  }
//   Advanced password validation function:
function validatePassword(password) {
    if (password.length > 7 && /[A-Z]/.test(password)) {
    return "Very Strong";
  } else if (password.length === 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}
