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
        // check if data stored
        const stored = localStorage.getItem(this.key);
        if (stored === null) {
            throw new Error("Failed to save data to localStorage.");
            return false;
        }
        return true;
    }
    removeItem() {
        localStorage.removeItem(this.key);
    }
}
//# sourceMappingURL=LocalStorageManager.js.map