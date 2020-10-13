// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passLength = 10
  var useUpper = true
  var useNumber = true
  var useOther = false

  var passValues= [lowerLetters]
  if (useUpper) { passValues.push(upperLetters)
  }
  if (useNumber) { passValues.push(number)
  }
  if (useOther) { passValues.push(other)
  }

  for (var i=0; i<passValues.length; i++)
  { console.log(passValues[Mathh.floor(math.random())*passValues.length)]}
  passwordText.value = password;

  var randomCharArray = passValues [math.floor(math.random()*passValues.length)]
  var randomChar = randomCharArray

  var hasLetter=false
  var hasSpecial=false
  var hasNumber=false

  if(useUpper && !hasLetter && random <1)
  { random=1
    hasLetter=true}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
