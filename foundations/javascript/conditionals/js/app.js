console.log('hello')

console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// comparing different types
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

// boolean casting true becomes 1, false becomes 0
console.log( true == 1 ); // true
console.log( false == 0 ); // true

// what are the result?
console.log('TESTING')
console.log(5 > 4) // true
console.log("apple" > "pineapple") // false
console.log("2" > "12") // true because its string comparison, 2 unicode is higher than 1
console.log(undefined == null) // true, they are a pair
console.log(undefined === null) // false, they are not the same type
console.log(null == "\n0\n") // false, 0 is not null
console.log(null === +"\n0\n") // false, 0 is a number which is not null

// the if statement
if (true) {
  // do something
  console.log("This is inside the conditional");
}

tester = true

if (!tester) {
  console.log('Tester would be false for this to resolve');
} else {
  console.log('Tester is true if it gets here');
}

if (!tester) {
  console.log('Tester would be false for this to resolve');
} else if (true) {
  console.log('This is inside the else if');
} else{
  console.log('This would never be evaluated');
}

// check login (in a shady way)
user = prompt("What's your user name?")
if (user.toLowerCase() === 'admin' ) {
  
  pwd = prompt("What's your password m8ey")
  if (pwd === '' || pwd === null {
    alert('Cancelled')
  } else if (pwd.toLowerCase() == 'TheMaster') {
    alert('Welcome')
  } else {
    alert('Wrong Password')
  }
} else if (user === '' || user === null) {
  alert('Cancelled')
} else {
  alert("I don't know you")
}