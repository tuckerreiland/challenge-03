var availChar = []



chooseLength()


function chooseLength() {

var length = prompt ("How many character do you want in your password?")

if (8<length && length<129) {
  generatePassword()
}
else {
  alert("Please choose a number between 8 and 129.")
  chooseLength()
}
}

function generatePassword() {

if (confirm ("Would you like to use lowercase letters?")) {
  var lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))  
  availChar.push(...lowercase)
  }

if (confirm ("Would you like to use uppercase letters?")) {
  var uppercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65))  
  availChar.push(...uppercase)
  }

if (confirm ("Would you like to use numbers?")) {
  var numbers = [...Array(10).keys()]  
  availChar.push(...numbers)
  }

if (confirm ("Would you like to use special characters?")) {
  var special = ["~","!","@","#","$","%","^","&","*","(",")","_","+","|","}","{","[","]","\\",":","'","<",",",">",".","?","/","`"]  
  availChar.push(...special)
  }

var randNum = (Math.floor(Math.random()*availChar.length))
var randChar = availChar [randNum]

}






// var lowercase = ""
// var numbers = ""
// var special = ""

// //1. User presses button
//   // Length prompt
//  var length = prompt ("How many character do you want in your password?")
//   // lowerCase
//   confirm ("Would you like to use lowercase letters?")
//   // upperCase
//   confirm ("Would you like to use uppercase letters?")
//   // numbers
//   confirm ("Would you like to use numbers?")
//   // special
//   confirm ("Would you like to use special characters?")





// if








// function generatePassword(){
//   //1.prompt user for parameters
//   //length, special chars, numbers, uppercase, lowercase
//   getParameters();
//   //could make this an object with variables too, look into that
//   //2. create a random password from available characters
//   //for loop run the number of times that user sets length to add random chracter to password

//   for (i=0; i<length; i++){
//     //add q random character to the password
//   }

//   return password
// }

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// //is this how we do it with the parame=ters in an object?
// function getParameters(){
//   //set length via prompt
//   //add characters to availablCharacters via prompts (different yes or no prompt)
//   var parameters = {
//     length: 0,
//     availableCharacters:""
//   }
//   parameters.length = prompt()
//   if (length<8)[

//   ]
// }

// //this doesn't include the checks to see if they selected soemthing
// //an empty string would be a way to return a no value