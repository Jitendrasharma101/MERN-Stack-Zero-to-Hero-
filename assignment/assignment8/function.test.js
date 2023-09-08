// calculator.test.js

const calculator = require("./testFunctions.js");

// Test cases for the addition function
test("adds two numbers correctly", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 5)).toBe(4);
  expect(calculator.add(0, 0)).toBe(0);
  // Null value as one operand
  expect(calculator.add(null, 5)).toBe(5); 
  // String concatenation
  expect(calculator.add(2, "3")).toBe("23"); 
  // Empty string as one operand
  expect(calculator.add(2, "")).toBe("2");
  // Both operands are null 
  expect(()=>calculator.add(null, null)).toThrow("invalid arguments"); 
   
});


// Test cases for the multiplication function
test("multiplies two numbers correctly", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(0, 10)).toBe(0);
  // Null value as one operand
  expect(calculator.multiply(null, 5)).toBe(0); 
  // String conversion to number
  expect(calculator.multiply(2, "3")).toBe(6); 
  // Empty string as one operand
  expect(calculator.multiply(2, "")).toBe(0);
  // Both operands are null 
  expect(calculator.multiply(null, null)).toBe(0); 
  // One operand is undefined
  expect(calculator.multiply(undefined, 5)).toBe(undefined); 
  // One operand is undefined
  expect(calculator.multiply(undefined, undefined)).toBe(undefined); 
});

// // Test cases for the subtraction function
test("subtracts two numbers correctly", () => {
  expect(calculator.subtract(7, 2)).toBe(5);
  expect(calculator.subtract(0, 5)).toBe(-5);
  expect(calculator.subtract(-10, -3)).toBe(-7);
  // String conversion to number
  expect(calculator.subtract(2, "3")).toBe(-1); 
  // Empty string as one operand
  expect(calculator.subtract(2, "")).toBe(2); 
  // Both operands are null
  expect(calculator.subtract(null, null)).toBe(null); 
  // One operand is undefined
  expect(calculator.subtract(undefined, 5)).toBe(undefined); 
});

// // Test cases for the division function
test("divides two numbers correctly", () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(-6, 3)).toBe(-2);
  expect(calculator.divide(0, 5)).toBe(0);
  // Null value as one operand
  expect(calculator.divide(null, 5)).toBe(0); 
   // String conversion to number
  expect(calculator.divide(2, "3")).toBeCloseTo(0.6666666667, 10);
  // Empty string as one operand
  expect(calculator.divide(2, "")).toBe(Infinity); 
  // One operand is undefined
  expect(calculator.divide(undefined, 5)).toBeNaN(); 
  expect(() => calculator.divide(null, null)).toThrow("invalid Arguments");
});

// Test case for division by zero
test("throws an error when dividing by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed.");
});

