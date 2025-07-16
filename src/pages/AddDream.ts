import { themes, name } from "../services/UserDataService.js";
import { addDream } from "../services/DreamService.js";
import { validationForm, ValidationRule } from "../utils/FormValidator.js";
import { FormManager } from "../utils/FormManager.js";

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

const formManager = new FormManager(addDreamForm);
formManager.populateSelect(dreamSelect, themes);

userName.textContent = name;

addDreamForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const validationRules: ValidationRule[] = [
    {
      element: dreamInput,
      errorMsgElm: dreamErrMsg,
      validation: (v) => v !== "",
    },
    {
      element: dreamSelect,
      errorMsgElm: themeErrMsg,
      validation: (v) => v !== "",
    },
  ];

  if (validationForm(validationRules)) {
    addDream({ name: dreamInput.value, theme: dreamSelect.value });

    formManager.resetForm();

    alert("Dröm tillagd!");
    window.location.href = "dashboard.html";
  }
});
