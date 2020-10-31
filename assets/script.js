// Assignment Code

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("");
var character = "`~!@#$%^&*()-_=+[{]}\|;:',<.>/?".split("");
var password = [];
var passwordText = password.join("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// Creating all array possibilities & Validate input data
  for (var i = 0; i < 1; i++) {
    var charUpper = confirm("Would you like your password to contain uppercase characters?");
    var charLower = confirm("Would you like your password to contain lowercase characters?");
    var charNumber = confirm("Would you like your password to contain number characters?");
    var charSpecial = confirm("Would you like your password to contain special characters?");
    if (charUpper === true && charLower === false && charNumber === false && charSpecial === false) {
      var random = upperCase;
      console.log(random);
    } else if (charUpper === false && charLower === true && charNumber === false && charSpecial === false) {
      var random = lowerCase;
      console.log(random);
    } else if (charUpper === false && charLower === false && charNumber === true && charSpecial === false) {
      var random = number;
      console.log(random);
    } else if (charUpper === false && charLower === false && charNumber === false && charSpecial === true) {
      var random = character;
      console.log(random);
    } else if (charUpper === true && charLower === true && charNumber === false && charSpecial === false) {
      var random = upperCase.concat(lowerCase);
      console.log(random);
    } else if (charUpper === true && charLower === false && charNumber === true && charSpecial === false) {
      var random = upperCase.concat(number);
      console.log(random);
    } else if (charUpper === true && charLower === false && charNumber === false && charSpecial === true) {
      var random = upperCase.concat(character);
      console.log(random);
    } else if (charUpper === false && charLower === true && charNumber === true && charSpecial === false) {
      var random = lowerCase.concat(number);
      console.log(random);
    } else if (charUpper === false && charLower === true && charNumber === false && charSpecial === true) {
      var random = lowerCase.concat(character);
      console.log(random);
    } else if (charUpper === false && charLower === false && charNumber === true && charSpecial === true) {
      var random = number.concat(character);
      console.log(random);
    } else if (charUpper === true && charLower === true && charNumber === true && charSpecial === false) {
      var random = upperCase.concat(lowerCase, number);
      console.log(random);
    } else if (charUpper === false && charLower === true && charNumber === true && charSpecial === true) {
      var random = lowerCase.concat(number, character);
      console.log(random);
    } else if (charUpper === true && charLower === true && charNumber === false && charSpecial === true) {
      var random = upperCase.concat(lowerCase, character);
      console.log(random);
    } else if (charUpper === true && charLower === false && charNumber === true && charSpecial === true) {
      var random = upperCase.concat(number, character);
      console.log(random);
    } else if (charUpper === true && charLower === true && charNumber === true && charSpecial === true) {
      var random = upperCase.concat(lowerCase, number, character);
      console.log(random);
    } else if (charUpper === false && charLower === false && charNumber === false && charSpecial === false) {
      i = -1;
      alert("You must select at least one valid character type for function to be valid. Password can be between 1-4 characters types.");
    }
  }  

  // Creating password length & Validate input data
  for (var i = 0; i < 1; i++) {
    var charLength = prompt("Your password can be between 10-128 characters in length. How many characters would you like your password to contain?");
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      i = -1;
      alert("This password length does not work. Please re-enter. Password can be between 10-128 characters in length.");
    } else if (charLength % Math.floor(charLength) > 0) {
      i = -1;
      alert("Password cannot contain decimal. Please enter whole number to continue.");
    } else {
      alert("Great! Please click 'OK' to see your secure password!");
    }
  }

  for (var i = 0; i < charLength; i++) {
    var randomChar = random[Math.floor(Math.random() * random.length)];
    password.push(randomChar);
  }

  console.log(password.join(""));
  password = password.join("");
}

// Write password to HTML
function generatePassword() {
  writePassword();
  console.log("string",password);
  document.querySelector("#password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
