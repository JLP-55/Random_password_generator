// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // we are adding values to this array using if statement below
  var allCharacters = []
  
  // all possible characters have been assigned to different arrays 
  // add selected values from these arrays to the variable allCharacters using below if statements
  var passwordUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var passwordSpecial = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":",]

  // sets the value of password to an empty string
  // a value will then be assigned to it by running the for loop below
  var password = "";
  
  var userInput = window.prompt("How many characters would you like to include in your password?\nEnter a value between 8 - 128");
  if (userInput === false) {
    return;
  } else if (userInput < 8 || userInput > 128) {
    window.alert("Please enter a valid number.");
    return;
  } else (userInput === !passwordNumbers); {
    window.alert("Please enter a valid input.");
    // return;
  };
  
  var includeUppercase = window.confirm("Would you like to include uppercase characters?");
  if (includeUppercase === true) {
    allCharacters = allCharacters.concat(passwordUppercase);
  };

  var includeLowercase = window.confirm("Would you like to include lowercase characters?");
  if (includeLowercase === true) {
    allCharacters = allCharacters.concat(passwordLowercase);
  };

  var includeNumbers = window.confirm("Would you like to include numeric characters?");
  if (includeNumbers === true) {
    allCharacters = allCharacters.concat(passwordNumbers);
  };

  var includeSpecial = window.confirm("would you like to include special characters?");
  if (includeSpecial === true) {
    allCharacters = allCharacters.concat(passwordSpecial);
  };

  if (includeUppercase === false && includeLowercase === false && includeNumbers === false && includeSpecial === false) {
    window.alert("You should include at lease one character type.");
    // this will end the code here and not run the for loop
    return;
  };

  for (var i = 0; i < userInput; i++) {
    // the addition assignment operator "+=" will take all values from the right of the operator and add them to the variable on the left
    password += allCharacters[(Math.floor(Math.random() * allCharacters.length))];
  };

  console.log(password);

  //targets #password id selector in the html
  var passwordText = document.querySelector("#password");
  // assigns the value of password to the passwordText variable
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


/*How to tackle this problem?
-̶ u̶s̶e̶ a̶n̶ a̶r̶r̶a̶y̶ t̶o̶ l̶o̶g̶ a̶l̶l̶ v̶a̶l̶u̶e̶s̶
-̶ g̶e̶n̶e̶r̶a̶t̶e̶ p̶r̶o̶m̶p̶t̶s̶ u̶s̶i̶n̶g̶ w̶i̶n̶d̶o̶w̶.̶p̶r̶o̶m̶p̶t̶/̶w̶i̶n̶d̶o̶w̶.̶c̶o̶n̶f̶i̶r̶m̶ t̶o̶ g̶e̶t̶ u̶s̶e̶r̶ i̶n̶p̶u̶t̶s̶
-̶ u̶s̶e̶ i̶f̶/̶e̶l̶s̶e̶ s̶t̶a̶t̶e̶m̶e̶n̶t̶ d̶o̶ d̶e̶t̶e̶r̶m̶i̶n̶e̶ w̶h̶a̶t̶ t̶o̶ d̶o̶ w̶i̶t̶h̶ t̶h̶e̶ u̶s̶e̶r̶ i̶n̶p̶u̶t̶
-̶ u̶s̶e̶ f̶o̶r̶ l̶o̶o̶p̶ t̶o̶ i̶t̶e̶r̶a̶t̶e̶ o̶v̶e̶r̶ v̶a̶l̶u̶e̶s̶ i̶n̶ t̶h̶e̶ a̶r̶r̶a̶y̶
-̶ h̶o̶w̶ t̶o̶ g̶e̶n̶e̶r̶a̶t̶e̶ r̶a̶n̶d̶o̶m̶ v̶a̶l̶u̶e̶s̶?̶ (̶m̶a̶t̶h̶.̶r̶a̶n̶d̶o̶m̶/̶m̶a̶t̶h̶.̶f̶l̶o̶o̶r̶)̶
- remember to add semicolons :)
*/