import { name } from "../services/UserDataService.js";
import { Auth } from "../services/Auth.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const userDataManager = new LocalStorageManager("userLogin");
const themesManager = new LocalStorageManager("themes");
let themes = themesManager.getData();
const nameInput = document.getElementById("name-input");
nameInput.value = name;
const changeUsernameBtn = document.getElementById("change-username-btn");
const themeInput = document.getElementById("theme-input");
const addThemeBtn = document.getElementById("add-theme-btn");
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
            li.innerHTML = `<p>${theme.theme}</p> <img src="../assets/images/trash_delete.png" />`;
            themeList.appendChild(li);
            const deleteBtn = li.querySelector("img");
            deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", () => {
                removeTheme(theme.id);
            });
        });
    }
}
function removeTheme(id) {
    themes = (themes === null || themes === void 0 ? void 0 : themes.filter((t) => t.id !== id)) || null;
    if (themes)
        themesManager.setData(themes);
    listThemes();
}
addThemeBtn.addEventListener("click", () => {
    const input = themeInput.value.trim();
    if (input) {
        addtheme({ theme: input });
        themeInput.value = "";
        listThemes();
    }
});
function addtheme(theme) {
    const newTheme = Object.assign({ id: (themes ? themes.length : 0) + 1 }, theme);
    themes === null || themes === void 0 ? void 0 : themes.push(newTheme);
    if (themes)
        themesManager.setData(themes);
}
// "logga ut"
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", Auth.logOut);
listThemes();
//# sourceMappingURL=Settings.js.map