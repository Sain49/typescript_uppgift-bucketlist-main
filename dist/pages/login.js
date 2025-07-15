const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const pswInput = document.getElementById("passowrd");
const togglePswBtn = document.querySelector(".toggle-password");
const usernameErrorMsg = document.getElementById("username-error-message");
const pswErrorMsg = document.getElementById("password-error-message");
form.addEventListener("submit", (e) => {
    const username = usernameInput.value.trim();
    const psw = pswInput.value.trim();
    let valid = true;
    const pswMinLength = 4;
    if (username === "") {
        usernameErrorMsg.style.display = "block";
        valid = false;
    }
    else
        usernameErrorMsg.style.display = "none";
    if (psw.length < pswMinLength) {
        pswErrorMsg.style.display = "block";
        pswErrorMsg.textContent = "Lösenord måste innehålla minst 4 tecken.";
        valid = false;
    }
    else
        pswErrorMsg.style.display = "none";
    if (valid) {
        window.name = username;
        window.location.href = "dashboard.html";
    }
});
export {};
//# sourceMappingURL=Login.js.map