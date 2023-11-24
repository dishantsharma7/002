// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

const firstNumber = 10;
const secondNumber = 20;

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let a = 10;
console.log(a);
a += 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);
a **= 10;
console.log(a);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

const number=10;
if(number>10){
  console.log("Greater than 10");
}else if(number<10){
  console.log("smaller than 10");
}else{
  console.log("equal to 10");
}



// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

const a = 10;
const b = 20;
if (a > 0 && b > 0) {
    console.log("Both numbers are positive");
} else if (a > 0 || b > 0) {
    console.log("Atleast one number is positive");
} else {
    console.log("Both numbers are negative");
}


// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

let b = 1;
let c = 5;
console.log(b & c);
console.log(b | c);
console.log(b ^ c);
console.log(~b);
console.log(b << 2);
console.log(b >> 2);
console.log(b >>> 2);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let a= 15;
let b= 3;

console.log(a>b?a:b);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

console.log(typeof 10);
console.log(typeof "Dishant");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "Dishant" });
console.log(typeof function () { });
console.log(typeof new Date());
console.log(typeof new Error());

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

let fName= "Dishant";
let lName= "Sharma";

console.log(fName+" "+lName);

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

console.log(typeof null);
console.log(typeof function()=>{});

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

let address={
  street_no :  1,
  house_no : 10,
  area : "jammu"
}

console.log("street" in address); //returns a boolean value {true/false}
