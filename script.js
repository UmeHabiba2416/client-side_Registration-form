const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

// Utility functions
function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  input.className = "error";
  small.innerText = message;
  small.classList.add("show");
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  input.className = "success";
  small.classList.remove("show");
}

// Validators
function checkName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function checkEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Invalid email format");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function checkPassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function checkConfirmPassword() {
  if (confirmInput.value !== passwordInput.value || confirmInput.value === "") {
    showError(confirmInput, "Passwords do not match");
    return false;
  }
  showSuccess(confirmInput);
  return true;
}

// Real-time validation
nameInput.addEventListener("keyup", checkName);
emailInput.addEventListener("keyup", checkEmail);
passwordInput.addEventListener("keyup", checkPassword);
confirmInput.addEventListener("keyup", checkConfirmPassword);

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = checkName();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isConfirmValid = checkConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    alert("🎉 Registration Successful!");
    form.reset();
    document.querySelectorAll("input").forEach(i => i.className = "");
  }
});
