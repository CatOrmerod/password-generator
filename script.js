// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialcharactersArray = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];

var passwordLength = prompt("How many characters (8-128) would you like in your password?");
var uppercaseIncluded = confirm("would you like to include uppercase characters?");
var lowercaseIncluded = confirm("would you like to include lowercase characters?");
var specialcharactersIncluded = confirm("Would you like to include special characters?");
var numbersIncluded = confirm("Would you like to include numbers?");

var userSelection = [];

// User Selection
if (!passwordLength) {
  alert("Please enter a value between 8-128");
}

if (passwordLength <8 || passwordLength>128 ) {
  passwordLength = prompt("Please enter a value between 8-128");
}

if (uppercaseIncluded) {
  userSelection = userSelection.concat(uppercaseArray);
}

if (lowercaseIncluded) {
  userSelection = userSelection.concat(lowercaseArray);
}

if (specialcharactersIncluded) {
  userSelection = userSelection.concat(specialcharactersArray);
}

if (numbersIncluded) {
  userSelection = userSelection.concat(numbersArray);
}
console.log(userSelection);

if (!uppercaseIncluded && !lowercaseIncluded && !specialcharactersIncluded && !numbersIncluded) {
  userSelection = alert("You must include at least one criteria");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
