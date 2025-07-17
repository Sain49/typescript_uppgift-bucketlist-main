import { name } from "../services/UserDataService.js";
import { addDream } from "../services/DreamService.js";
import { validationForm } from "../utils/FormValidator.js";
import { FormManager } from "../utils/FormManager.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const themesLsManager = new LocalStorageManager("themes");
const themesData = themesLsManager.getData();
const themes = Array.isArray(themesData) ? themesData : [];
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const dreamSelect = document.getElementById("dream-select");
const dreamErrMsg = document.getElementById("dream-error-message");
const themeErrMsg = document.getElementById("theme-error-message");
const userName = document.getElementById("user-name");
const formManager = new FormManager(addDreamForm);
formManager.populateSelect(dreamSelect, themes, (theme) => theme.theme);
userName.textContent = name;
addDreamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const validationRules = [
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
//# sourceMappingURL=AddDream.js.map