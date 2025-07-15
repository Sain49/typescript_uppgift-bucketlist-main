import { UserLogin } from "../models/ILogin";

const userLogin: UserLogin = { name: "", password: "" };

const loginForm = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const pswInput = document.getElementById("password") as HTMLInputElement;
const togglePswBtn = document.querySelector(
  ".toggle-password"
) as HTMLButtonElement;
const usernameErrorMsg = document.getElementById(
  "username-error-message"
) as HTMLParagraphElement;
const pswErrorMsg = document.getElementById(
  "password-error-message"
) as HTMLParagraphElement;

function isValidInput() {
  const username = usernameInput.value.trim();
  const psw = pswInput.value.trim();

  let valid = true;
  const pswMinLength = 4;

  if (username === "") {
    usernameErrorMsg.style.display = "block";
    valid = false;
  } else usernameErrorMsg.style.display = "none";

  if (psw.length < pswMinLength) {
    pswErrorMsg.style.display = "block";
    pswErrorMsg.textContent = "Lösenord måste innehålla minst 4 tecken.";
    valid = false;
  } else pswErrorMsg.style.display = "none";

  userLogin.name = username;
  userLogin.password = psw;

  return valid;
}

function handleLoginOnSubmit(event: Event) {
  event.preventDefault();

  if (isValidInput()) {
    // store name and password to local storage
    storeLoginDataToLS();
    window.location.href = "dashboard.html";
  }
}

loginForm.addEventListener("submit", handleLoginOnSubmit);

togglePswBtn.addEventListener("click", () => {
  if (pswInput.type === "password") pswInput.type = "text";
  else pswInput.type = "password";
});

function storeLoginDataToLS() {
  localStorage.setItem("userLogin", JSON.stringify(userLogin));
}
