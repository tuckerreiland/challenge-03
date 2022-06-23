var length;
var availableCharacters = "";


function generatePassword(){
  //1.prompt user for parameters
  //length, special chars, numbers, uppercase, lowercase
  getParameters();
  //could make this an object with variables too, look into that
  //2. create a random password from available characters
  //for loop run the number of times that user sets length to add random chracter to password

  for (i=0; i<length; i++){
    //add q random character to the password
  }

  return password
}

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


//is this how we do it with the parame=ters in an object?
function getParameters(){
  //set length via prompt
  //add characters to availablCharacters via prompts (different yes or no prompt)
  var parameters = {
    length: 0,
    availableCharacters:""
  }
  parameters.length = prompt()
  if (length<8)[

  ]
}

//this doesn't include the checks to see if they selected soemthing
//an empty string would be a way to return a no value