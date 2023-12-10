// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  var userInput = window.prompt("How many characters would you like to include in your password?\nEnter a value between 8 - 128");
  if (userInput === null) {
    return;
  } else if (userInput < 8 || userInput > 128) {
    window.alert("Please enter a valid number.");
  } else {
    generatePassword();
  };
  //passwordText.value = password;

}

function generatePassword() {
  // log all values in different arrays to be utilised 
  var passwordUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
  var passwordSpecial = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":",]
  // we are adding above values to this array using if statement below
  var allCharacters = []

  var includeUppercase = window.confirm("Would you like to include uppercase characters?");
  if (includeUppercase === true) {
    allCharacters = allCharacters.concat(passwordUppercase);
  }

  var includeLowercase = window.confirm("Would you like to include lowercase characters?");
  if (includeLowercase === true) {
    allCharacters = allCharacters.concat(passwordLowercase);
  }

  var includeNumbers = window.confirm("Would you like to include numeric characters?");
  if (includeNumbers === true) {
    allCharacters = allCharacters.concat(passwordNumbers);
  }

  var includeSpecial = window.confirm("would you like to include special characters?");
  if (includeSpecial === true) {
    allCharacters = allCharacters.concat(passwordSpecial);
  }

  console.log(allCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*How to tackle this problem?
-̶ u̶s̶e̶ a̶n̶ a̶r̶r̶a̶y̶ t̶o̶ l̶o̶g̶ a̶l̶l̶ v̶a̶l̶u̶e̶s̶
-̶ g̶e̶n̶e̶r̶a̶t̶e̶ p̶r̶o̶m̶p̶t̶s̶ u̶s̶i̶n̶g̶ w̶i̶n̶d̶o̶w̶.̶p̶r̶o̶m̶p̶t̶/̶w̶i̶n̶d̶o̶w̶.̶c̶o̶n̶f̶i̶r̶m̶ t̶o̶ g̶e̶t̶ u̶s̶e̶r̶ i̶n̶p̶u̶t̶s̶
-̶ u̶s̶e̶ i̶f̶/̶e̶l̶s̶e̶ s̶t̶a̶t̶e̶m̶e̶n̶t̶ d̶o̶ d̶e̶t̶e̶r̶m̶i̶n̶e̶ w̶h̶a̶t̶ t̶o̶ d̶o̶ w̶i̶t̶h̶ t̶h̶e̶ u̶s̶e̶r̶ i̶n̶p̶u̶t̶
- use for loop to iterate over values in the array
- how to generate random values? (math.random/math.floor)
- call function generatePassword
- remember to add semicolons :)

*/