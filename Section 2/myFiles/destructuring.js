
// Array destructuring: extracting array elements into individual variables
const myArray = [2, 8, 256, 4096];
const [a, b] = myArray;
[ , , d, c] = myArray;

console.log(a, b)
console.log(c, d)


// Object destructuring: extracting object proprties into individual variables
const person = {first: "J-M", last: "Bodart", age: 20, job: "student"};

let first;

let {last, job} = person;
console.log(last);
console.log(job);
console.log(first);
// console.log(age);   // Uncaught ReferenceError ReferenceError: age is not defined

// Object destructuring can be perfomed on a function argument
const greet = ({first, last, title }) => { console.log(`Hello, ${first ? first : (title ? title : "X") } ${last}!`)};

greet(person)

const person2 = {last: "Caesar", title: "Emperor"};
greet(person2);
