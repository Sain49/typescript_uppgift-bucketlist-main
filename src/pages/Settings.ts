// här är det bara level-up!
import { name, themes } from "../services/UserDataService.js";
import { Auth } from "../services/Auth.js";
import { UserLogin } from "../models/Login.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";

const userDataManager = new LocalStorageManager<UserLogin>("userLogin");

const nameInput = document.getElementById("name-input") as HTMLInputElement;
nameInput.value = name;
const changeUsernameBtn = document.querySelector(
  ".confirm-input"
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
  const username = nameInput.value.trim();
  if (username !== null) {
    if (changeUsername(username)) {
      alert("Användarnamn ändrat!");
    } else alert("Försök igen, tack!");
  }
});

const themeList = document.getElementById("theme-list") as HTMLUListElement;
if (themeList) {
  themes.forEach((theme) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
    themeList.appendChild(li);
  });
}

function poulateThemes(theme: string): void {}

// "logga ut"
logOutBtn?.addEventListener("click", Auth.logOut);
