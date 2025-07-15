import { dreams, themes, name } from "../services/UserData.js";
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const dreamSelect = document.getElementById("dream-select");
const dreamErrMsg = document.getElementById("dream-error-message");
const themeErrMsg = document.getElementById("theme-error-message");
const userName = document.getElementById("user-name");
function populateThemes() {
    while (dreamSelect.options.length > 1) {
        dreamSelect.remove(1);
    }
    themes.forEach((t) => {
        const option = document.createElement("option");
        option.value = t;
        option.textContent = t;
        dreamSelect.appendChild(option);
    });
}
addDreamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dreamName = dreamInput.value.trim();
    const dreamTheme = dreamSelect.value;
    let valid = true;
    if (dreamName === "") {
        dreamErrMsg.style.display = "block";
        valid = false;
    }
    else
        dreamErrMsg.style.display = "none";
    if (dreamTheme === "") {
        themeErrMsg.style.display = "block";
        valid = false;
    }
    else
        themeErrMsg.style.display = "none";
    if (valid) {
        const newDream = {
            id: Date.now(),
            name: dreamName,
            theme: dreamTheme,
            checked: false,
        };
        dreams.push(newDream);
        addDreamForm.reset();
        alert("Dröm tillagd!");
        window.location.href = "dashboard.html";
    }
});
userName.textContent = name;
populateThemes();
//# sourceMappingURL=AddDream.js.map