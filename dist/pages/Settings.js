// här är det bara level-up!
import { name } from "../services/UserDataService.js";
import { Auth } from "../services/Auth.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const userDataManager = new LocalStorageManager("userLogin");
const themesManager = new LocalStorageManager("themes");
let themes = themesManager.getData();
const nameInput = document.getElementById("name-input");
nameInput.value = name;
const changeUsernameBtn = document.querySelector(".confirm-input");
const themeInput = document.getElementById("theme-input");
const addThemeBtn = document.querySelector(".confirm-input");
const logOutBtn = document.querySelector(".logout");
function changeUsername(name) {
    let currentUser = userDataManager.getData();
    if (currentUser) {
        currentUser.name = name;
        return userDataManager.setData(currentUser);
    }
    return false;
}
changeUsernameBtn.addEventListener("click", () => {
    const newUsername = nameInput.value.trim();
    if (newUsername) {
        if (changeUsername(newUsername)) {
            alert("Användarnamn ändrat!");
        }
        else
            alert("Försök igen, tack!");
    }
});
const themeList = document.getElementById("theme-list");
function listThemes() {
    if (themeList) {
        themeList.innerHTML = "";
        themes === null || themes === void 0 ? void 0 : themes.forEach((theme) => {
            const li = document.createElement("li");
            li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
            themeList.appendChild(li);
        });
    }
}
addThemeBtn.addEventListener("click", () => {
    const newTheme = themeInput.value.trim();
    if (newTheme) {
        addthemes(newTheme);
        listThemes();
    }
});
function addthemes(theme) {
    themes === null || themes === void 0 ? void 0 : themes.push(theme);
    if (themes)
        themesManager.setData(themes);
}
// "logga ut"
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", Auth.logOut);
listThemes();
//# sourceMappingURL=Settings.js.map