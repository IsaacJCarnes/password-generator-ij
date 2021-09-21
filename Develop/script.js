var characters = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharacters: ['!','@','#','$','%','&','*','?']
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = 0;
  var password = "";
  var possibleCharacters = [];

  //prompts for password length
  passwordLength = prompt("How long would you like your password to be?\n(8-128 characters)");
  
  //Ensures password is valid length
  if(passwordLength > 128){
    alert(passwordLength + " is too many characters.\nPassword will be 128 characters.");
    passwordLength = 128;
  } else if(passwordLength < 8){
    alert(passwordLength + " is too little characters.\nPassword will be 8 characters.");
    passwordLength = 8;
  }

  //prompts for character pool
  if(confirm("Do you want to use lowercase characters?", " ")){
    possibleCharacters = possibleCharacters.concat(characters.lowercase);
  }
  if(confirm("Do you want to use uppercase characters?", " ")){
    possibleCharacters = possibleCharacters.concat(characters.uppercase);
  }
  if(confirm("Do you want to use number characters?", " ")){
    possibleCharacters = possibleCharacters.concat(characters.numbers);
  }
  if(confirm("Do you want to use special characters?", " ")){
    possibleCharacters = possibleCharacters.concat(characters.specialCharacters);
  }

  if(possibleCharacters.length == 0){ //Ensures a valid character pool
    alert("No characters were selected for use.\nLowercase and uppercase characters will be added to the password.");
    possibleCharacters = possibleCharacters.concat(characters.lowercase);
    possibleCharacters = possibleCharacters.concat(characters.uppercase);
  }

  for(var i = 0; i < passwordLength; i++){ //Compiles password from character pool
    password = password + possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
