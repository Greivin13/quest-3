// Assignment code here
var symbol = '?.,<>)({}[]=+-/@#!$&*'
var upperLet = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
var lowerLet = 'qwertyuiopalksjdhfgmbnvcxz'
var passLength = 8<128
var number = '1234567890'
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Code for our password prompt
function getPrompts(){
 var passLength = parseInt(prompt("How long would you like your password to be?")("8-128 characters"))
 if (isNaN(passLength) || passLength < 8 || passLength > 128){
  alert("Submit answer between 8 - 128. Numbers only")
 }
}


  // funcition for generatePassword
function generatePassword() {

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
