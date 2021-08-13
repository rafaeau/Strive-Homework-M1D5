/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area (l1, l2){
    return l1*l2
}
let l1 = 2
let l2 = 6
console.log("The area of the rectangle is:", area(l1, l2))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (integer1, integer2){
    if (integer1 !== integer2){
        return integer1+integer2
    }
    else (integer1 === integer2);{
        return (integer1 + integer2) * 3
    }
}
integer1 = 35
integer2 = 35
console.log("The result is:", crazySum(integer1, integer2))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (num1, num2){
    if (num1 < num2){
        return Math.abs(num1 - num2)
    }
    else (num1 > num2);{
        return Math.abs(num1 - num2) * 3
    }
}
num1 = 20
num2 = 19
console.log("The result is:", crazyDiff(num1, num2))


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary (n){
    if (n < 100 && 20 < n) {
        return true;
      } else if (n === 400) {
        return true;
      } else {
        return false;
      }
}
n = 19
console.log(boundary(n))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (text){
    if (text === text.startsWith("Strive")){
        return text
    }
    else {
        return "Strive " + text
    }
}
text = "School is a tech school based in Berlin."
console.log(strivify(text))

console.log(strivify ("School is a tech school based in Berlin."))


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7 (number){
    if ((number % 3 === 0) && (number >= 0)){
        return number + " is positive and multiple of 3."
    }
    else if ((number % 7 === 0) && (number >= 0)) {
        return number + " is positive and multiple of 7."
    }
}
number = 27
console.log(check3and7 (number))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverse(string){
    return string.split("").reverse().join("");
}

let string = reverse("strive")
console.log(string)

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function toUpperCase(string2){
    return string2.charAt(0).toUpperCase() + string2.slice(1) //One function uppercases the first letter, and the second slices the string and returns it starting from the second character
}
let string2 = toUpperCase("strive")
console.log(string2)

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(string3){
    return string3.slice(1,-1);
}
let string3 = cutString("Strive School")
console.log(string3)

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/