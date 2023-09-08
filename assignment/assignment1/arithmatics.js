let inputArr = [];

process.stdin.on('data', (data) => {
  inputArr.push(data.toString().trim());

  if (inputArr.length >= 2) {
    process.stdin.emit('end');
  }
});

process.stdin.on('end', () => {
  if (inputArr.length < 2) {
    console.log('Please enter two numbers.');
    return;
  }

  const num1 = parseFloat(inputArr[0]);
  const num2 = parseFloat(inputArr[1]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please enter valid numbers.');
    return;
  }

  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;

  console.log('Sum:', sum);
  console.log('Difference:', difference);
  console.log('Product:', product);
  console.log('Quotient:', quotient);
});
