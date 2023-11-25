// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

function greet(name){
  console.log(`Hi ${name}!`)
}

greet('Dishant');

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

const add=(fNum,sNum)=>{
  return fNum+sNum;
}

console.log(`ANS:${add(5,6)}`);

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

const greeting = (time) => {
    if (time >= 0 && time < 12) console.log("Good Morning");
    else if (time >= 12 && time < 16) console.log("Good Afternoon");
    else if (time >= 16 && time < 20) console.log("Good Evening");
    else if (time >= 20 && time <= 24) console.log("Good Night");
    else console.log("Invalid Time");
}

greeting(12);

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

const lengthOfRectangle = 10;
const breadthOfRectangle = 20;

const areaOfRectangle = (lengthOfRectangle, breadthOfRectangle) => {
    return lengthOfRectangle * breadthOfRectangle;
}

console.log(`Area of Rectangle: ${areaOfRectangle(lengthOfRectangle, breadthOfRectangle)}`);

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const power = (base, exponent) => {
    return base ** exponent;
}

console.log(power(2, 3));

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number/2; i++) {
            if (number % i === 0) return false;
        }
        return true;
}

console.log(isPrime(7));

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

const globalVariable = 10;
const localVariable = () => {
        const localVariable = 20;
        console.log(`Global Variable: ${globalVariable}`);
        console.log(`Local Variable: ${localVariable}`);
    }

localVariable();
console.log(`Global Variable: ${globalVariable}`);

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

const outerFunction = () => {
    const outerVariable = 10;
    const innerFunction = () => {
        console.log(`Outer Variable: ${outerVariable}`);
    }
    return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();

// Question-9:  Write a recursive function to calculate the factorial of a given number.

const factorial = (number) => { 
        if (number === 0) return 1;
        return number * factorial(number - 1);
    }
console.log(factorial(5));

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

const f = (x) => {
    return x + 2;
}
const g = (x) => {
    return 2 * x;
}
const h = (x) => {
    return f(g(x));
}
console.log(h(10));
