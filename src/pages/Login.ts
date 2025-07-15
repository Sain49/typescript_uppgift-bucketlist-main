const form = document.querySelector("form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const pswInput = document.getElementById("passowrd") as HTMLInputElement;
const togglePswBtn = document.querySelector(
  ".toggle-password"
) as HTMLButtonElement;
const usernameErrorMsg = document.getElementById(
  "username-error-message"
) as HTMLParagraphElement;
const passwordErrorMsg = document.getElementById(
  "password-error-message"
) as HTMLParagraphElement;
