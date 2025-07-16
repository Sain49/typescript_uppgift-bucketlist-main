export class FormManager {
    constructor(form) {
        this.form = form;
    }
    populateSelect(selectElm, options) {
        while (selectElm.options.length > 1) {
            selectElm.remove(1);
        }
        options.forEach((o) => {
            const option = document.createElement("option");
            option.value = o;
            option.textContent = o;
            selectElm.appendChild(option);
        });
    }
    resetForm() {
        this.form.reset();
    }
}
//# sourceMappingURL=FormManager.js.map