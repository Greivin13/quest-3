// Choice arrays for our code
var symbolArray = ['?', '.', ',', '<', '>', ')','(','{','}','[',']','=','+','-','@','#','!','$','*']
var upperLetArray = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M']
var lowerLetArray = ['q','w','e','r','t','y','u','i','o','p','a','l','k','s','j','d','h','f','g','m','b','n','v','c','x','z']
var numberArray= ['1','2','3','4','5','6','7','8','9','0']
var passLength = 8;
var choiceArray = []


// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(correctPrompts){
   var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else{
    [passwordText.value = ""]
  }
}

// funcition for generatePassword
function generatePassword() {
var password = "";
for( var i = 0; i < passLength; i++){
   var randomLetter = Math.floor(Math.random() * choiceArray.length);
   password = password + choiceArray[randomLetter];
}
 return password;
}

//Code for our password prompt
function getPrompts(){
  //  setting choice array in blank so it resets in blank
  choiceArray=[]

  passLength = parseInt(prompt("How long would you like your password to be? (8 - 128 characters"))
 if (isNaN(passLength) || passLength < 8 || passLength > 128){
  alert("Submit answer between 8 - 128. Numbers only")
  return false;
 }
  if (confirm("Would like symbols in your password?")){
 choiceArray = choiceArray.concat(symbolArray);
 }
 
 if (confirm("Would like Upper case letters in your password?")){
  choiceArray = choiceArray.concat(upperLetArray);
  }

 if (confirm("Would like lower case letters in your password?")){
    choiceArray = choiceArray.concat(lowerLetArray);
  }

 if (confirm("Would like numbers in your password?")){
      choiceArray= choiceArray.concat(numberArray);
  }
  return true;
}





