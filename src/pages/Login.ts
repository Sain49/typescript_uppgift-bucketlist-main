import { UserLogin } from "../models/Login.js";
import { Dream } from "../models/Dream.js";
import { dreams } from "../services/UserDataService.js";
import { validationForm, ValidationRule } from "../utils/FormValidator.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";

const dreamManager = new LocalStorageManager<Dream[]>("dreams");
const loginDataManager = new LocalStorageManager<UserLogin>("userLogin");

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

function handleLoginOnSubmit(event: Event) {
  event.preventDefault();

  const validationRules: ValidationRule[] = [
    {
      element: usernameInput,
      errorMsgElm: usernameErrorMsg,
      validation: (v) => v !== "",
    },
    {
      element: pswInput,
      errorMsgElm: pswErrorMsg,
      validation: (v) => v.length >= 4,
    },
  ];

  if (validationForm(validationRules)) {
    userLogin.name = usernameInput.value;
    userLogin.password = pswInput.value;

    loginDataManager.setData(userLogin);
    dreamManager.setData(dreams);

    window.location.href = "dashboard.html";
  }
}

loginForm.addEventListener("submit", handleLoginOnSubmit);

togglePswBtn.addEventListener("click", () => {
  if (pswInput.type === "password") pswInput.type = "text";
  else pswInput.type = "password";
});
