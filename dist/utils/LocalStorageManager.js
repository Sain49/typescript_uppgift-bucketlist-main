export class LocalStorageManager {
    constructor(key) {
        this.key = key;
    }
    getData() {
        const storedData = localStorage.getItem(this.key);
        return storedData ? JSON.parse(storedData) : null;
    }
    setData(newData) {
        localStorage.setItem(this.key, JSON.stringify(newData));
    }
    removeItem() {
        localStorage.removeItem(this.key);
    }
}
//# sourceMappingURL=LocalStorageManager.js.map