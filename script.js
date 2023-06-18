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
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var captial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789";
  var special = "!?-_<>"
  var result = " "
  var characters = ""
  if (num < 8 || num > 128) {
    alert("enter a number between 8 and 128");
    return undefined;
  }
  characters += lower;
  if (hasUpperCase) {
     characters += captial;
  }
  if (hasNumbers) {
   characters += numbers
  }
  if (hasSpecialLetter) {
    characters += special
  }
  console.log(characters)
  for (i = 0; i < num; i++){
    console.log(result)
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return result
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
