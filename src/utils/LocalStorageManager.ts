export class LocalStorageManager<T> {
  constructor(private key: string) {}

  public getData(): T | null {
    const storedData = localStorage.getItem(this.key);

    return storedData ? JSON.parse(storedData) : null;
  }

  public setData(newData: T): void {
    localStorage.setItem(this.key, JSON.stringify(newData));
  }

  public removeItem(): void {
    localStorage.removeItem(this.key);
  }
}
