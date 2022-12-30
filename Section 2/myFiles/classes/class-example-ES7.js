
class Human {
    
    // ES7 syntax for properties does not need a constructor() call:
    gender = "Male";

    // ES7 syntax to define methods is like storing an arrow function in a property
    printGender = () => { console.log(this.gender); }
}

class User extends Human{
    name = "Max";  // ES7 does not need a constructor nor a call to super()

    printName = () => {  console.log(this.name);  }
}

const user = new User();
user.printName();
user.printGender();

User.prototype.category = "Regular User";

console.log(user.category);
