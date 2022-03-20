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
console.log(myNumber);
console.log(typeof myNumber);

// praccy with nums
const num1 = 10;
const num2 = 50;
console.log(9 * num1);     // print 90
console.log(num1 ** 3);   // 1000
console.log(num2 / num1); // 5

// some more 'complex' expressions
console.log(5 + 10 * 3);          // 35
console.log(num2 % 9 * num1);      // 50
console.log(num2 + num1 / 8 + 2);  // 53.25

// increment and decrement operators
// give a num +1 or -1 value as shorthand
// can be either pre or post
let i = 1;
i++;  // 2, although incrementing happens after evaluation with a post-increment

// arithmetic assignment vars
let num3 = 4;
num3 += 1;  // 5
num3 *= 10; // 50
num3 -= 1;  // 49
num3++;     // 50
num3 /= 10; // 5
console.log(num3);

// store elems as consts for reference
// const btn = document.querySelector("button");
// console.log(btn);
// const txt = document.querySelector("p");

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//   if (btn.textContent === 'Start Machine') {
//     btn.textContent = 'Stop Machine';
//     txt.textContent = 'The machine has started';
//   } else {
//     btn.textContent = 'Start Machine';
//     txt.textContent = 'The machine is stopped';
//   }
// }

// practice
console.log('TOP: praccy start');
console.log(23 + 97);
seqNums = [1,2,3,4,5,6]

// the 'C' way
let result = 0;
for (i = 0; i < seqNums.length; i++) {
  console.log(i)
  result += seqNums[i]
}
console.log(`The value of ${seqNums} summed is ${result}`)

// reduce is sort of made for this though
// first arg is anonymouse function, second
result = seqNums.reduce((partialSum, nextVal) => partialSum + nextVal, 0)
console.log(`The value of reduced ${seqNums} summed is ${result}`)

console.log((4 + 6 + 9) / 77)

let a = 10
console.log(a)
console.log(9 * a)

let b = 7 * a
console.log(b)

const max = 57
let actual = max - 13
let percentage = actual / max
console.log(percentage)