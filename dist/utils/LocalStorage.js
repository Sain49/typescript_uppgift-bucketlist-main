export function retrieveDataFromLS(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : {};
}
export function updateDataToLS(key, newData) {
    const existingData = localStorage.getItem(key);
    const data = existingData ? JSON.parse(existingData) : {};
    data.push(newData);
    localStorage.setItem(key, JSON.stringify(data));
}
//# sourceMappingURL=LocalStorage.js.map