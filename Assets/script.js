// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialcharacters = "!@#$%^&*()-+"
var numericcharacters = "1234567890"
var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
  return ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
