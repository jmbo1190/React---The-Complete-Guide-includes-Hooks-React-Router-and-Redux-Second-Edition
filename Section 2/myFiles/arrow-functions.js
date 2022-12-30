// Traditional function declaration 
    function printMyArgFun(name, age) {
        console.log(name, age);
    }

// Arrow Function assignments

    // can omit parentheses around a single argument on LHS
    const printMyArg = name => { console.log(name); }
    const printMyArgs = (name, age) => { console.log(name, age); }

    const printMyName = () => { console.log("J-M"); }

    // can omit 'return' and curly braces on RHS if a single line that returns an expression
    const myFullName = (first,last) => first + " " + last;
    const twice = number => 2 * number;
    const product = (a,b) => a * b;


printMyArgFun('Max', 12);

printMyName();
printMyArg('Jean-Michel');
printMyArgs('Jean-Michel', 24);

console.log(myFullName('J-M', 'Bodart'));
console.log(twice(3.14));
console.log(product(2.5, 3));