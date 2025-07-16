export function validationForm(rules) {
    let isValid = true;
    rules.forEach((r) => {
        const { element, errorMsgElm, validation } = r;
        const value = element.value.trim();
        if (validation(value)) {
            errorMsgElm.style.display = "block";
            isValid = false;
        }
        else {
            errorMsgElm.style.display = "none";
        }
    });
    return isValid;
}
//# sourceMappingURL=FormValidator.js.map