var availChar = []
var password = []
var length;

var generateBtn = document.querySelector("#generate");

function writePassword() {
chooseLength()

function chooseLength() {

length = prompt ("How many character do you want in your password?")

if (8<length && length<129) {
  getParameters()
}
else {
  alert("Please choose a number between 8 and 129.")
  chooseLength()
}
}

function getParameters() {

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
}

function generatePassword(){
for(var i = 0; i < length; i++){
  var randNum = (Math.floor(Math.random()*availChar.length))
  var randChar = availChar[randNum]
  password.push(randChar);
}}

generatePassword()

var passwordText = document.querySelector("#password");

passwordText.value = password.join("");
}

generateBtn.addEventListener("click", writePassword);
