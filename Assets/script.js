// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all characters necessary for the generated password
var specialCharacters = "!@#$%^&*()-+"
var numericCharacters = "1234567890"
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// Write password to the #password input
function writePassword() {
  // Prompt and confirms for password details
  var passLength = prompt("How many characters long would you like your password?");
  var includeSpecial = confirm("Would you like your password to include special characters?");
  var includeNumeric = confirm("Would you like your password to include numeric characters?");
  var includeLower = confirm("Would you like your password to include lowercased characters?");
  var includeUpper = confirm("Would you like your password to include uppercased characters?");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword () {
  return ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page