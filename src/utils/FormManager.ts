export class FormManager {
  constructor(private form: HTMLFormElement) {}

  public populateSelect(selectElm: HTMLSelectElement, options: string[]): void {
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

  public resetForm(): void {
    this.form.reset();
  }
}
