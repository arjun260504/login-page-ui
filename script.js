function validateEmpty(input) {
  const errorText = input.parentElement.querySelector(".error-text");

  if (input.value.trim() === "") {
    input.classList.add("error");
    setTimeout(() => {
      errorText.style.display = "block";
    }, 200);
  }
}

function clearError(input) {
  const errorText = input.parentElement.querySelector(".error-text");
  input.classList.remove("error");
  errorText.style.display = "none";
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.replace("bi-eye", "bi-eye-slash");
  }
}

function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginBtn = document.querySelector("button[type='submit']");

  const correctEmail = "samplemail@gmail.com";
  const correctPassword = "Samplepass123@";

  validateEmpty(email);
  validateEmpty(password);

  if (email.value.trim() === "" || password.value.trim() === "") {
    return false;
  }

  if (
    email.value !== correctEmail ||
    password.value !== correctPassword
  ) {
    alert("Invalid email or password");
    return false;
  }

  loginBtn.disabled = true;

  const modal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  modal.show();

  return false;
}
