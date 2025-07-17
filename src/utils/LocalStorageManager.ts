export class LocalStorageManager<T> {
  constructor(private key: string) {}

  public getData(): T | null {
    const storedData = localStorage.getItem(this.key);

    return storedData ? JSON.parse(storedData) : null;
  }

  public setData(newData: T): boolean {
    localStorage.setItem(this.key, JSON.stringify(newData));

    // check if data stored
    const stored = localStorage.getItem(this.key);
    if (stored === null) {
      throw new Error("Failed to save data to localStorage.");
      return false;
    }

    return true;
  }

  public removeItem(): void {
    localStorage.removeItem(this.key);
  }
}
