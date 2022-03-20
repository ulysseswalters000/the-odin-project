// testing some math jawns
const myInt = 5;
const myFloat = 0.667;
const myAllegedAge = 95;
const salary = 150000;

console.log(`My preferred salary is ${salary}`)

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2)
console.log(twoDecimalPlaces)

// convert string repr of number to number
let myNumber = '74';
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);

// cast the original string to a number type and check it
// the math works now as intended
myNumber = Number('74');
myNumber += 3;
console.log(myNumber)
console.log(typeof myNumber)