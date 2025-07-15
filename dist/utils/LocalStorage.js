export function retrieveDataFromLS(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}
export function updateDataToLS(key, newData) {
    localStorage.setItem(key, JSON.stringify(newData));
}
//# sourceMappingURL=LocalStorage.js.map