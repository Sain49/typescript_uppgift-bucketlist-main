export class FormManager {
    constructor(form) {
        this.form = form;
    }
    populateSelect(selectElm, options, getTheme) {
        while (selectElm.options.length > 1) {
            selectElm.remove(1);
        }
        options.forEach((o) => {
            const option = document.createElement("option");
            option.value = getTheme(o);
            option.textContent = getTheme(o);
            selectElm.appendChild(option);
        });
    }
    resetForm() {
        this.form.reset();
    }
}
//# sourceMappingURL=FormManager.js.map