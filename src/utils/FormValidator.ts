export interface ValidationRule {
  element: HTMLInputElement | HTMLSelectElement;
  errorMsgElm: HTMLElement;
  validation: (value: string) => boolean;
}

export function validationForm(rules: ValidationRule[]): boolean {
  let isValid = true;

  rules.forEach((r) => {
    const { element, errorMsgElm, validation } = r;
    const value = element.value.trim();

    if (!validation(value)) {
      errorMsgElm.style.display = "block";
      isValid = false;
    } else {
      errorMsgElm.style.display = "none";
    }
  });

  return isValid;
}
