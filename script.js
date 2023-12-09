// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*How to tackle this problem?
- use an array to log all values
- generate prompts using window.prompt to get user inputs
- use if/else statement do determine what to do with the user input
- use for loop to iterate over values in the array
- how to generate random values? (math.random/math.floor)
- call function generatePassword

*/