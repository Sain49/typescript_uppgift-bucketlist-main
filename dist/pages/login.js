import { dreams } from "../services/UserDataService.js";
import { validationForm } from "../utils/FormValidator.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const dreamManager = new LocalStorageManager("dreams");
const loginDataManager = new LocalStorageManager("userLogin");
const userLogin = { name: "", password: "" };
const loginForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const pswInput = document.getElementById("password");
const togglePswBtn = document.querySelector(".toggle-password");
const usernameErrorMsg = document.getElementById("username-error-message");
const pswErrorMsg = document.getElementById("password-error-message");
function handleLoginOnSubmit(event) {
    event.preventDefault();
    const validationRules = [
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
        loginDataManager.setData([userLogin]);
        dreamManager.setData(dreams);
        window.location.href = "dashboard.html";
    }
}
loginForm.addEventListener("submit", handleLoginOnSubmit);
togglePswBtn.addEventListener("click", () => {
    if (pswInput.type === "password")
        pswInput.type = "text";
    else
        pswInput.type = "password";
});
//# sourceMappingURL=Login.js.map