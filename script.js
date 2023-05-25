// Assignment Code
const generateBtn = document.querySelector("#generate");
const upperBtn = document.getElementById("upperCaseCheck");
const lowerBtn = document.getElementById("lowerCaseCheck");
const numberBtn = document.getElementById("numbersCheck");
const specialBtn = document.getElementById("specialCheck");

const chars = {
  lowerCase: "qwertyuioplkjhgfdsazxcvbnm",
  upperCase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
  num: "1234567890",
  special: "!@#$%^&*()",
};

let passwordLength = "12";

function generatePassword() {
  let passwordResult = "";
  let charSet = "";
  if (upperBtn.checked) {
    console.log(upperBtn.checked);
    charSet += chars.upperCase;
  }
  if (lowerBtn.checked) {
    console.log(lowerBtn.checked);
    charSet += chars.lowerCase;
  }
  if (numberBtn.checked) {
    console.log(numberBtn.checked);
    charSet += chars.num;
  }
  if (specialBtn.checked) {
    console.log(specialBtn.checked);
    charSet += chars.special;
  }

  for (i = 0; i < passwordLength; i++) {
    passwordResult += charSet.charAt(
      Math.floor(Math.random() * charSet.length)
    );
  }

  return passwordResult;
}

console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
