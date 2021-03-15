// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // variable arrays
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = uppercase.toLowerCase();
  var uppercaseArray = uppercase.split('');
  var lowercaseArray = lowercase.split('');
  var specialcharactersArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // user selection prompts
  do {  
    var passwordLength = prompt("How many characters (8-128) would you like in your password?");
  } while (passwordLength<8 || passwordLength>128);
  
  
  do { 
    var error = false
    var uppercaseIncluded = confirm("would you like to include uppercase characters?");
    var lowercaseIncluded = confirm("would you like to include lowercase characters?");
    var specialcharactersIncluded = confirm("Would you like to include special characters?");
    var numbersIncluded = confirm("Would you like to include numbers?");
    if (!uppercaseIncluded && !lowercaseIncluded && !specialcharactersIncluded && !numbersIncluded) {
      alert("You must include at least one criteria")
      error=true
    }

  } while (error)
  
  var userSelection = [];


  // user selection grouped

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

  //loop for generating password
  passwordFinal = [];

  for (var i = 0; i < passwordLength; i++) {
    var passwordSelection = userSelection[Math.floor(Math.random() * userSelection.length)];
    passwordFinal.push(passwordSelection);
  }
  console.log(passwordFinal);
  return passwordFinal.join("");

}
