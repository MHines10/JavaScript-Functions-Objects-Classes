console.log("Day 2 JS Homework");
console.log("_______________________________________");

// Day 2 JS Homework

console.log("Exercise 1:");

/*
Exercise 1: Write a function called toCelcius that takes in a number representing 
temperature in Fahrenheit and converts the number into Celcius.

Ex 1. toCelcius(32) // 0
Ex 2. toCelcius(212) // 100
Ex 3. toCelcius(50) // 10
*/

function toCelcius(fah) {
  return Math.floor((fah - 32) * 0.56);
}

//Input
console.log("toCelcius(32`F)");
//Output
console.log(toCelcius(32));

console.log("-------------------------------");

//Input
console.log("toCelcius(212`F)");
//Output
console.log(toCelcius(212));

console.log("-------------------------------");

//Input
console.log("toCelcius(50`F)");
//Output
console.log(toCelcius(50));

console.log("_______________________________________");

console.log("Exercise 2:");

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  changePassword(oldPassword, newPassword) {
    // use an "if" to check if the old password matches, returns True
    if (this.password == oldPassword) {
      // allows the old password to be updated with the new password
      this.password = newPassword;
      console.log(`${this.username}, your new password has been set!`);
      return true;
    } 
    else {
      // if old password does not match, returns False
      console.log(`${this.username}, your old password is incorrect!`);
      return false;
    }
  }
}

let Monti = new User("Monti", "monti10");

console.log(Monti.changePassword("monti111000", "MontiH10")); // INCORRECT Password
console.log(Monti.changePassword("monti10", "MontiH10")); // CORRECT Old Password - New Password Set
console.log(Monti.changePassword("monti10", "Montrelle10")); // INCORRECT Password(reset to the New Password)
console.log(Monti.changePassword("MontiH10", "Montrelle10")); // CORRECT Old Password(previous New Password) - New Password Set

console.log("_______________________________________");

console.log("Exercise 3:");

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

let squareNegatives = [-10, -3, 4, -2, 8, 9, -3];
let squareNegatives2 = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
let squareNegatives3 = [2, 4, 6, 8, 10];

function negsSquared(arr) {
  // filter NegNums and Square them
  let squareNegs = arr.filter((num) => num < 0).map((num) => num ** 2);
  return squareNegs;
}

//Input
console.log((squareNegatives = [-10, -3, 4, -2, 8, 9, -3]));
// Output
console.log(negsSquared(squareNegatives));

console.log("-------------------------------");

//Input
console.log((squareNegatives2 = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
// Output
console.log(negsSquared(squareNegatives2));

console.log("-------------------------------");

//Input
console.log((squareNegatives3 = [2, 4, 6, 8, 10]));
// Output
console.log(negsSquared(squareNegatives3));

console.log("_______________________________________");
