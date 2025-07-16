import { themes, name } from "../services/UserDataService.js";
import { Dream } from "../models/IDream.js";
import { updateDataToLS, retrieveDataFromLS } from "../utils/LocalStorage.js";

const dreams = retrieveDataFromLS<Dream>("dreams");

const addDreamForm = document.querySelector("form") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const dreamSelect = document.getElementById(
  "dream-select"
) as HTMLSelectElement;
const dreamErrMsg = document.getElementById(
  "dream-error-message"
) as HTMLParagraphElement;
const themeErrMsg = document.getElementById(
  "theme-error-message"
) as HTMLParagraphElement;
const userName = document.getElementById("user-name") as HTMLSpanElement;

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
  } else dreamErrMsg.style.display = "none";

  if (dreamTheme === "") {
    themeErrMsg.style.display = "block";
    valid = false;
  } else themeErrMsg.style.display = "none";

  if (valid) {
    const dreamsLength = dreams.length + 1;

    const newDream: Dream = {
      id: dreamsLength,
      name: dreamName,
      theme: dreamTheme,
      checked: false,
    };

    dreams.push(newDream);
    updateDataToLS<Dream[]>("dreams", dreams);

    addDreamForm.reset();
    alert("Dröm tillagd!");
    window.location.href = "dashboard.html";
  }
});

userName.textContent = name;

populateThemes();
