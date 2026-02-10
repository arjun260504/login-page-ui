function validateEmpty(input) {
  const errorText = input.nextElementSibling;
  if (input.value.trim() === "") {
    input.classList.add("error");
    errorText.style.display = "block";
  }
}

function clearError(input) {
  const errorText = input.nextElementSibling;
  input.classList.remove("error");
  errorText.style.display = "none";
}

function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

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

  const modal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  modal.show();

  return false;
}