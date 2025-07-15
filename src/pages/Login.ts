import { name } from "../services/variables";

const form = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const pswInput = document.getElementById("passowrd") as HTMLInputElement;
const togglePswBtn = document.querySelector(
  ".toggle-password"
) as HTMLButtonElement;
const usernameErrorMsg = document.getElementById(
  "username-error-message"
) as HTMLParagraphElement;
const pswErrorMsg = document.getElementById(
  "password-error-message"
) as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
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

  if (valid) {
    (window as any).name = username;
    window.location.href = "dashboard.html";
  }
});
