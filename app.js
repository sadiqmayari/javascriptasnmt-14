document.write("<br><br><br>");

//date function
function getDate() {
  currentDate = new Date();
  return currentDate;
}
document.write(getDate());

document.write("<br><br><br>");

//full name
function fullName() {
  var fisrtName = prompt("What is your First Name?");
  var lastName = prompt("What is Your Last Name?");
  return fisrtName + " " + lastName;
}
alert(fullName());

//usr input sum
function sum() {
  var a = parseFloat(prompt("Enter any number:"));
  var b = parseFloat(prompt("Enter second number: "));

  return a + b;
}

document.write("sum of input value ==> " + sum());

document.write("<br><br><br>");

//calculator by  entry
function calc() {
  var num1 = parseFloat(prompt("Enter any number:"));
  var num2 = parseFloat(prompt("Enter second number: "));
  var operator = prompt(
    "Put Sign of Add(+) or Sub(-) or Multipy(*) or Divide(/)"
  );

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "wrong entry";
  }
}
alert(calc());

//square of argument

function square(x) {
  return x * x;
}

document.write("Square of Argument 20 ===> " + square(20));

//factorial of a number
document.write("<br><br><br>");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

document.write("factorial of 5 is === > " + factorial(5));

document.write("<br><br><br>");

//user input for starting and ending count
function numberCount(startNumber, endNumber) {
  for (i = startNumber; i <= endNumber; i++) {
    document.write(i + "<br>");
  }
}

var start = +prompt("Write a Number to Start Counting:");
var end = +prompt("Write a Number to End Counting:");

numberCount(start, end);

document.write("<br><br><br>");

//Hypontunuse calculation
function calculateHypotenuse(base, perpendicular) {
  // Inner function to calculate the square of a number
  function calculateSquare(side) {
    return side * side;
  }

  // Calculate the squares of base and perpendicular
  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);

  // Calculate the hypotenuse using the Pythagorean theorem
  var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

  return hypotenuse;
}

// Example usage
var baseLength = parseFloat(prompt("Enter the length of the base:"));
var perpendicularLength = parseFloat(
  prompt("Enter the length of the perpendicular:")
);

var result = calculateHypotenuse(baseLength, perpendicularLength);
document.write("Hypotenuse:", result);


document.write("<br><br><br>");


//Title Case 
function titleCase(inputString) {
  var words = inputString.split(" ");
  var capitalizedWords = [];
  for (i = 0; i < words.length; i++) {
    var singleWord = words[i];
    var capitalizedWord =
      singleWord.charAt(0).toUpperCase() + singleWord.slice(1);
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(" ");
}

var inputString = prompt("Write any Sentence more than 2 Words:");
var result = titleCase(inputString);

document.write(result);
