export class FormManager {
  constructor(private form: HTMLFormElement) {}

  public populateSelect<T>(
    selectElm: HTMLSelectElement,
    options: T[],
    getTheme: (o: T) => string
  ): void {
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

  public resetForm(): void {
    this.form.reset();
  }
}
