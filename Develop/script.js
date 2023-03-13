// Assignment code here
var symbolArray = ['?', '.', ',', '<', '>', ')','(','{','}','[',']','=','+','-','@','#','!','$','*']
var upperLetArray = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M']
var lowerLetArray = ['q','w','e','r','t','y','u','i','o','p','a','l','k','s','j','d','h','f','g','m','b','n','v','c','x','z']
var passLength = 8<128
var numberArray= ['1','2','3','4','5','6','7','8','9','0']
var choiceArray = []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Code for our password prompt
function getPrompts(){
  passLength = parseInt(prompt("How long would you like your password to be?")("8-128 characters"))
 if (isNaN(passLength) || passLength < 8 || passLength > 128){
  alert("Submit answer between 8 - 128. Numbers only")
  return false;
 }
 if (confirm("Would like lower case letters")){
 choice = choice.concat
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
