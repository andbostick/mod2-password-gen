// Assignment Code
var generateBtn = document.querySelector("#generate");
var numOfChars;
var hasUpperCase;
var hasSpecialLetter;
var hasNumbers;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(numOfChars);
  var passwordText = document.querySelector("#password");

  includesNumbers();
  includesSpecial();
  includesUpperCase();
  getNumOfChars();
  
  passwordText.value = password;
}

function getNumOfChars() {
  numOfChars = parseInt(prompt("enter a number between 8 and 128"));
  if (numOfChars < 8 || numOfChars > 128) {
    alert("enter a number between 8 and 128");
    numOfChars = parseInt(prompt("enter a number between 8 and 128"));
  }
}
function includesUpperCase() {
  hasUpperCase = confirm("Include uppercase letters?");
}
function includesNumbers() {
  hasNumbers = confirm("Includes numbers?");
}
function includesSpecial() {
  hasSpecialLetter = confirm("Includes special letters?");
}

function generatePassword(num) {
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
