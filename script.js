// Assignment Code
const generateBtn = document.querySelector("#generate");
const copyBtn = document.getElementById("copy")
const upperBtn = document.getElementById("upperCaseCheck");
const lowerBtn = document.getElementById("lowerCaseCheck");
const numberBtn = document.getElementById("numbersCheck");
const specialBtn = document.getElementById("specialCheck");
let numBox = document.getElementById("pass-length-box");

const chars = {
  lowerCase: "qwertyuioplkjhgfdsazxcvbnm",
  upperCase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
  num: "1234567890",
  special: "!@#$%^&*()",
};

function generatePassword() {
  let passwordResult = "";
  let charSet = "";
  let passwordLength = numBox.value;
  console.log (numBox.value);

  //Checks if uppercase, lowercase, etc boxes are selected
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
  if (!specialBtn.checked && !numberBtn.checked && !lowerBtn.checked && !upperBtn.checked) {
    alert('No boxes selected! Please choose one to set parameters.')
  }

  //for loop for password creation
  for (i = 0; i < (passwordLength); i++) {
    passwordResult += charSet.charAt(
      Math.floor(Math.random() * charSet.length)
    );
  }

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value)
}

// Select, Copies, and Alerts User when #copy button is pressed
function copyPassword() {
  const copyText = document.querySelector("#password")
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  alert("Text Copied!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
