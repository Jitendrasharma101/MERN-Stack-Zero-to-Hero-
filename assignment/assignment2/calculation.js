const randomNumber = require('./random.js');

const random_number1=randomNumber(1,99);
const random_number2=randomNumber(99,999);
//random_number are:

console.log("Random_number1: ",random_number1);
console.log("Random_number2: ",random_number2);
sum=random_number1+random_number2;
sub=random_number1-random_number2;
mul=random_number1*random_number2;
dev=random_number1/random_number2;

//output of the operations

console.log("Sum of random numbers: ", sum);
console.log("Subtract of random numbers: ", sub);
console.log("multiply of random numbers: ", mul);
console.log("Divide of random numbers: ",dev);

