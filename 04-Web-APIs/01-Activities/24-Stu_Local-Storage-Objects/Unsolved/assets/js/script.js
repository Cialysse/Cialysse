var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var  user = {
  firstName: firstNameInput.value.trim(),
  lastName: lastNameInput.trim(),
  email:emailInput.value.trim(),
  password: passwordInput.value.trim(),
  }
  

  // TODO: Set new submission to local storage 
localStorage.setItem("user", JSON.stringify(user));

var output = localStorage.getItem("user");

console.log(output, typeof output);

});
