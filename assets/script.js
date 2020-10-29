// Assignment Code
var UpperCase = confirm("Would you like your password to contain uppercase letters?")
var lowerCase = confirm("Would you like your password to contain lowercase letters?")
var numbers = confirm("Would you like your password to contain numbers?")
var characters = confirm("Would you like your password to contain special characters?")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
