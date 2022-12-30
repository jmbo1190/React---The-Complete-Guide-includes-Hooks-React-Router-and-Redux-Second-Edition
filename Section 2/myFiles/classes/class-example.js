class Person {
    name = "J-M";
    greet = () => { console.log("Hello " + this.name + "!")}
}

const myPerson = new Person();
myPerson.greet();
console.log(myPerson.name);


class Human {
    // ES6 syntax to define properties
    constructor(){
        this.gender = "Male";
    }
    // ES7 syntax for properties does not need a constructor() call:
    // gender = "Male";

    // ES6 syntax to define methods
    printGender(){
        console.log(this.gender);
    }
    // ES7 syntax to define methods is like storing an arrow function in a property
    // printGender = () => { console.log(this.gender); }
}

class User extends Human{
    constructor() {
        super();
        this.name = "Max";
    }

    printName() {
        console.log(this.name);
    }
}

const user = new User();
user.printName();
user.printGender();

User.prototype.category = "Regular User";

console.log(user.category);
