// Retrieve the command-line arguments
const args = process.argv.slice(2);

// Check if the correct number of arguments is provided
if (args.length !== 2) {
  console.log('Please provide two numbers as command-line arguments.');
  process.exit(1);
}

// Convert the input arguments to numbers
const num1 = parseFloat(args[0]);

const num2 = parseFloat(args[1]);

// Check if the conversion was successful
if (isNaN(num1) || isNaN(num2)) {
  console.log('Please provide valid numbers as command-line arguments.');
  process.exit(1);
}

// Perform arithmetic operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Print the results
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
