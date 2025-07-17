// här är det bara level-up!
import { Theme } from "../models/Theme.js";
import { name } from "../services/UserDataService.js";
import { Auth } from "../services/Auth.js";
import { UserLogin } from "../models/Login.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";

const userDataManager = new LocalStorageManager<UserLogin>("userLogin");
const themesManager = new LocalStorageManager<Theme[]>("themes");
let themes = themesManager.getData();

const nameInput = document.getElementById("name-input") as HTMLInputElement;
nameInput.value = name;
const changeUsernameBtn = document.getElementById(
  "change-username-btn"
) as HTMLButtonElement;
const themeInput = document.getElementById("theme-input") as HTMLInputElement;
const addThemeBtn = document.getElementById(
  "add-theme-btn"
) as HTMLButtonElement;
const logOutBtn = document.querySelector(".logout") as HTMLButtonElement;

function changeUsername(name: string): boolean {
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
    } else alert("Försök igen, tack!");
  }
});

const themeList = document.getElementById("theme-list") as HTMLUListElement;

function listThemes(): void {
  if (themeList) {
    themeList.innerHTML = "";
    themes?.forEach((theme) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${theme.theme}</p> <img src="../assets/images/trash_delete.png" />`;
      themeList.appendChild(li);

      const deleteBtn = li.querySelector("img") as HTMLImageElement;
      deleteBtn?.addEventListener("click", () => {
        removeTheme(theme.id);
      });
    });
  }
}

function removeTheme(id: number): void {
  themes = themes?.filter((t) => t.id !== id) || null;
  if (themes) themesManager.setData(themes);

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

function addtheme(theme: Omit<Theme, "id">): void {
  const newTheme: Theme = {
    id: (themes ? themes.length : 0) + 1,
    ...theme,
  };

  themes?.push(newTheme);

  if (themes) themesManager.setData(themes);
}

// "logga ut"
logOutBtn?.addEventListener("click", Auth.logOut);

listThemes();
