// primitive types are copied during assignment
let num1 = 1;
let num2 = num1;
num1 = 3;
console.log(num1, num2);

// reference types such as Arrays and Objects still refer to same array or object after assignment
let person1 = {
    name: "Max"
};
let person2 = person1;      // copy a reference to the same object

// a technique to make a "true copy" instead of just copying the reference to the original object or array
let person3 = {...person1}; // copy the object properties into a new object using the spread operator

person1.name = "Bill";
console.log(person2);
console.log(person3);
