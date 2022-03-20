//  number, what you would expect
let n = 12;

// can be floating point, still a number
n = 12.45

// NaN is by trying to do maffs on undefined and such
console.log('Yo what it do boo boo' / 12) //nan

// nans propagate to all expression
console.log(NaN * 20) // NaN

// one exception nan to the zeroth exponent returns 1 or true
console.log(NaN ** 0) // 1

// BigInt
// declare with 'n' at end of value
const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof bigInt)


// strings
// backtick quotes to evaluate embedded expressions
// use ${...} to wrap expressions
console.log(`1 + 2 = ${1 + 2}`)

// boolean
// lowercase true and false
let truff = true
let falf = false

// returned as the result of comparion operation expressions
let isGreater = 4 > 1; // returns true
console.log(isGreater)

// null is its own type which only contains null
let age = null;
console.log(age)
console.log(typeof age) // returns object as this is a null object

// undefined is also its own type and can be thought of as "value not assigned"
// we dont normally set things explicitly to undef
// rather, it is the value of vars and such without definitions.
let und;
console.log(typeof und)
console.log(und)

// objects
// these are special. used to store collections of data and more complex entities
// we'll be picking this up later one we've seen so far is null is an object of class
// null. because it is an object, null is not the same as undef
console.log(null !== undefined) // true
// with less explicit, they are the same, but not of the same type because null is an object
console.log(null != undefined) // false

// symbol
// used for unique identifiers, we'll use them more with objects

// typeof operator
// we've already used this a lot
// returns a string representation of an item
// apparently typeof null should not be an object, but it is
// typeof is an operator, not a function, but can be invoked like a function
console.log(typeof(null))
// Some people prefer typeof(x), although the typeof x syntax is much more common.

// task
// what is outputs?

// let name = "Ilya"; // defines string name Ilya

// alert( `hello ${1}` ); // returns hello 1

// alert( `hello ${"name"}` ); // returns hello name

// alert( `hello ${name}` ); // returns hello ilya

// Strings

// declare a constant with single quotes and log to console
const string = 'The revolution will not be televised.';
console.log(string);

// without quotes we'll get an error
// console.log(this is a bad string)

// very little difference between single and double quotes
// use different ones for quotes within quotes
console.log('Andrew said "hi"')

// escape chars
// backslash escapes much like regex
console.log('Andrew said \'hi\'')

// concat string with + operator
console.log('Andrew ' + 'Said ' + '"hi"')

// works with vars
let name = 'Andrew'
let message = 'said "hi"'
console.log(name + ' ' + message)

const btn = document.querySelector('button')

function greet() {
  name = prompt("What is your name?")
  alert(`Hello ${name}`)
}

btn.addEventListener('click', greet)

// in javascript, methods and properties are available on primitive values
name = 'Andrew'
let len = name.length

console.log(`length of andrew's name is ${len}`)

// or more directly
console.log(`length of andrew's name is ${name.length}`)

// extracting string parts
// slice(start,end)
// substring(start,end)
// substr(start,length)

// slice
// extracts part of a string
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part) // Banana
// if we omit second parameted, it will go from start param to end
let theRest = str.slice(7)
console.log(theRest);

// from the end works as well
theREst = str.slice(-12)
console.log(theRest);

// substring()
// similar to slice, only difference is it cannot accept negative indices

// substr()
// similar to slice, difference is second argument is length to cut
// with one param cuts to end
let result = str.substr(7)
console.log(result)
// cuts from 7th position, taking 6 characters
result = str.substr(7,6)
console.log(result); // banana

// replace()
// replaces on value with another in a string
let text = 'Please visit Microsoft!'
// only replaces on first occurence
result = text.replace('i', 'I')
console.log(result);

// can use split and join to do it on all
result = text.split('i').join('I')
console.log(result);

// or use a global regexp
result = text.replace(/i/g, 'I')
console.log(result);

// or use replaceall
result = text.replaceAll('i', 'I')
console.log(result);

// upper and lower a string
result = text.toUpperCase()
console.log(result);

result = text.toLowerCase()
console.log(result);

// string concat joins two or more strings
result = text.concat(" ", "But don't actually")
console.log(result);

// trim removes whitespace from both ends of a string
// includes trimming newline chars
text = '\t \n there\'s some whitespace around this \t'
result = text.trim()
console.log(result);

// padstart and end
// first arg is repetition, second arg is value
// similar to python's zfill
text = "5"
console.log(text.padStart(8, 0)); // pads text string with 8 zeroes
console.log(text.padEnd(8,0)); // same thing but on the end

// chart gives us the character at position
text = 'andrew'
console.log(text.charAt(1)); // 'n'

// charcodeat returns utf-16 code of char at index n
console.log(text.charCodeAt(1)); // who use utf-16?

// if you want to operate on strings like they're arrays,
// convert them to arrays with split
console.log(text.split()); // returns whole string at pos 0
console.log(text.split('')); // splits by char to array
text = 'and-rew'
console.log(text.split('-')); // splits on hypen

// can we regex split?
text = "'name','andrew'"
console.log(text.split(/,/g)) // hell yes we can

// convert text to uppercase
text = "Hello World!"
console.log(text.toUpperCase());
