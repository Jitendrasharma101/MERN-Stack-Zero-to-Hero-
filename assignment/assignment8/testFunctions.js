// Function for addition
function add(num1, num2) {
  if (num1 === null && num2 === null) {
    throw new Error("invalid arguments");
    // return NaN;
  }
  return num1 + num2;
}

// Function for multiplication
function multiply(num1, num2) {
    if (num1 === null || num2 === null) {
        return 0;
      }
    
      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        return undefined;
      }
    
      if (typeof num1 === 'string'||typeof num2 === 'string') {
        num1 = Number(num1);
        num2 = Number(num2);
      }
    
  return num1 * num2;
}

// Function for subtraction
function subtract(num1, num2) {
    if (num1 === null || num2 === null) {
        return num1 === null ? num2 : num1;
      }
    
      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        return undefined;
      }
    
      if (typeof num1 === 'string'|| typeof num2 === 'string') {
        num1 = Number(num1);
        num2 = Number(num2);
      }
  return num1 - num2;
}

// Function for division
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  if(num1===null&& num2===null){
    throw new Error("invalid Arguments");
  }
  return num1 / num2;
}

module.exports = {
  add,
  multiply,
  subtract,
  divide,
};

