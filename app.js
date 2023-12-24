var button = document.getElementById("student");
var studentName = document.getElementById("myName");

button.onclick = function () {
  studentName.innerHTML = "Muhammad Sadiq CCO-116650";
};

document.write("<br><br><br>");
//---------------------------------------------------------------
//date function
var dateBtn = document.getElementById("dateButton");
var dateText = document.getElementById("date");
function getDate() {
  currentDate = new Date();
  return currentDate;
}
dateBtn.onclick = function () {
  dateText.innerHTML = getDate();
};

//-------------------------------------------------------------
//full name
var fullNameText = document.getElementById("fullNameAlert");
var nameButton = document.getElementById("fullName-button");
function fullName() {
  var fisrtName = prompt("What is your First Name?");
  var lastName = prompt("What is Your Last Name?");
  return fisrtName + " " + lastName;
}
nameButton.onclick = function () {
  fullNameText.innerHTML = fullName();
};

//-------------------------------------------------------------
//usr input sum
var sumButton = document.getElementById("calc");
var sumText = document.getElementById("input-sum");
function sum() {
  var a = parseFloat(prompt("Enter any number:"));
  var b = parseFloat(prompt("Enter second number: "));

  return a + b;
}

sumButton.onclick = function () {
  sumText.innerHTML = "sum of input value ==> " + sum();
};
document.write("<br><br><br>");

//---------------------------------------------------------------
//calculator by  entry

var calculatorButton = document.getElementById("calculator");
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
calculatorButton.onclick = function () {
  alert(calc());
};

//--------------------------------------------------------------
//square of argument
var squareText = document.getElementById("squareRoot");
var squarButton = document.getElementById("square-button");
function square(x) {
  return x * x;
}

squarButton.onclick = function () {
  squareText.innerHTML = "Square of Argument 20 ===> " + square(20);
};
//-------------------------------------------------------------
//factorial of a number
document.write("<br><br><br>");

var factButton = document.getElementById("fact-button");
var factInner = document.getElementById("factorialText");
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factButton.onclick = function () {
  factInner.innerHTML = "factorial of 5 is === > " + factorial(5);
};

document.write("<br><br><br>");

//---------------------------------------------------------------
//user input for starting and ending count

var seriesText = document.getElementById("series");
var seriesButton = document.getElementById("series-button");

function numberCount(startNumber, endNumber) {
  for (i = startNumber; i <= endNumber; i++) {
    document.write(i + "<br>");
  }
}

seriesButton.onclick = function () {
  var start = +prompt("Write a Number to Start Counting:");
  var end = +prompt("Write a Number to End Counting:");

  seriesText.innerHTML = numberCount(start, end);
};
document.write("<br><br><br>");

//Hypontunuse calculation
document.write("<h2></h2>");
var hypoText = document.getElementById("hypo");
var hypoButton = document.getElementById("hypo-button");
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
hypoButton.onclick = function () {
  var baseLength = parseFloat(prompt("Enter the length of the base:"));
  var perpendicularLength = parseFloat(
    prompt("Enter the length of the perpendicular:")
  );

  var result = calculateHypotenuse(baseLength, perpendicularLength);
  hypoText.innerHTML = "Hypotenuse: " + result;
};

//-------------------------------------------------------------

//Title Case

var capitalText = document.getElementById("capitalize");
var capitalButton = document.getElementById("cap-button");
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
capitalButton.onclick = function () {
  var inputString = prompt("Write any Sentence more than 2 Words:");
  var result = titleCase(inputString);

  capitalText.innerHTML = result;
};

// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   document.write(str.join(' '));
// }
// titleCase(prompt("please enter a sentence"));

//-------------------------------------------------------

//LONGEST WORD

//function ka naam or parameter
var longWordText = document.getElementById("longWord");
var longButton = document.getElementById("long-button");
function findLongestWord(str) {
  //variable jis me sentece split hoga
  var words = str.split(" ");

  //for loop k result ko store kerne k liye variables
  var longestWord = "";
  var maxlength = 0;

  //sab se bara word dhoondne k liye loop
  for (i = 0; i < words.length; i++) {
    var currentWord = words[i];

    //jab loop chale ga to longest word ko variable me store kerwane k liye logic
    if (currentWord.length > maxlength) {
      maxlength = currentWord.length;

      //jab longest word mil jaye ga to variable me longest word store ker dega
      longestWord = currentWord;
    }
  }
  return longestWord;
}
longButton.onclick = function () {
  var sentence = prompt("write a sentence");
  var result = findLongestWord(sentence);
  longWordText.innerHTML = "The longest word in the string is ===> " + result;
};
document.write("<br><br><br>");

//---------------------------------------------------------------

//find occurence of a letter
var fountText = document.getElementById("foundLetter")
var findButton = document.getElementById("find-button")


function findOccurance(newSentence) {
    var findLetter = prompt("what letter you want to find");
    newSentence.toLowerCase();
  var foundLetter = 0;

  for (i = 0; i < newSentence.length; i++) {
    if (newSentence.slice(i, i + findLetter.length) === findLetter) {
      foundLetter++;
    }
  }
  return foundLetter;
}

findButton.onclick=function(){
    var userSentence = prompt("Write a Sentence or any word");

  fountText.innerHTML="The letter you want to find is *" +
    findOccurance(userSentence) +
    "* times in the string"
};

// //find string and display count
// var para = "The quick brown fox jumps over the lazy dog"
// var paraUpdate = para.toLowerCase()
// var find = "the"
// var count =0
// for (i=0;i<para.length;i++){
//     if (paraUpdate.slice(i,i+find.length)===find){
//         count++
//     }
// }

//-------------------------------------------------------------

var rectangleText = document.getElementById("rectangleArea");
var rectangleButton = document.getElementById("rect-button");

function rectangleCalc(a, b) {
  return a * b;
}

rectangleButton.onclick = function () {
  var rectangleLength = +prompt("Enter Length of a Rectangle:");
  var rectangleWidth = +prompt("Enter widht of a Rectangle:");
  var result = rectangleCalc(rectangleLength, rectangleWidth) 
  rectangleText.innerHTML =
    "The Area of a Rectangle using arguments as variables is ===> " + result +
    "<br>";
    rectangleText.innerHTML +=
    "The Area of a Rectangle using arguments as variables is ===> " + rectangleCalc(12,4)

};

//-------------------------------------------------------------

var palInner = document.getElementById("palindromeResult")
var palButton = document.getElementById("pal-button")
function palindromChek(str) {
  if (str.split("").reverse().join("") === str) {
    document.write("The word " + strstr.toUpperCase() + " is **PALINDROME**");
  } else document.write("The word " + str.toUpperCase() + " is not **PALINDROME**");
}

palButton.onclick=function(){

    
    var userInput = prompt("Enter a word to check its palindrome or not");
    palInner.innerHTML=palindromChek(userInput);
    
}