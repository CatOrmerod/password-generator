// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseArray = uppercaseArray.toLowerCase();
var specialcharactersArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbersArray = "0123456789";

var passwordLength = prompt("How many characters (8-128) would you like in your password?");
var uppercaseIncluded = confirm("would you like to include uppercase characters?");
var lowercaseIncluded = confirm("would you like to include lowercase characters?");
var specialcharactersIncluded = confirm("Would you like to include special characters?");
var numbersIncluded = confirm("Would you like to include numbers?");

var userSelection = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
