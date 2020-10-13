// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var otherChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var passLength = prompt('How many characters would you like your password to contain? [please enter between 8-129 characters]')
    var hasLower = confirm('Click ok to confirm including lower case letters')
    var hasUpper = confirm('Click ok to confirm including upper case letters')
    var hasSpecial = confirm('Click ok to confirm including special characters')
    var hasNumber = confirm('Click ok to confirm including numbers')
    console.log(hasLower)

    var newPassword = ""
    for (var i = 0; i < passLength; i++) {
        var passValues = [];
        if (hasUpper) {
            var randIndex = Math.floor(Math.random() * upperLetters.length)
            passValues.push(upperLetters[randIndex]);
        }
        console.log(passValues);
        if (hasNumber) {
            var randIndex = Math.floor(Math.random() * numericCharacters.length)
            passValues.push(numericCharacters[randIndex]);
        }
        if (hasSpecial) {
            var randIndex = Math.floor(Math.random() * otherChar.length)
            passValues.push(otherChar[randIndex]);
        }
        if (hasLower) {
            var randIndex = Math.floor(Math.random() * lowerLetters.length)
            passValues.push(lowerLetters[randIndex]);
        }
        newPassword = newPassword + passValues.join("")
        newPassword = newPassword.substring(0,passLength)
        console.log(newPassword)
    } 
    
    return newPassword
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value= password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
