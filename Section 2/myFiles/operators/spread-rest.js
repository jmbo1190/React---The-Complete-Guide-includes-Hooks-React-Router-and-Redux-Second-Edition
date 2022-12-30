const oldArray = [0, 1, 2];
const oldObject = {first: "J-M", last: "Bodart"};

// spread operator: ...array or ...object
const newArray = [...oldArray, 3, 4];
const newObject = {...oldObject, first: "Jean-Michel", age: 20, job: "student"};  // new "first" property overrides old "first" property

console.log(newArray);
console.log(newObject);

// rest operator: ...args
// merges a list of function arguments into an array

function sortArgsFun(...args) { 
    return args.sort(); 
}
sortArgs = (...args) => args.sort(); 

const filter = (...numbers) => {
    return numbers.filter( n => n % 2 === 0);  // only keep numbers where expression evaluates to true
}

console.log(sortArgsFun(1, 5, 4, 8, 0));
console.log(sortArgs(1, 7, 4, 8, 0));
console.log(filter(1, 7, 4, 8, 0));
