import { retrieveDataFromLS, updateDataToLS } from "../utils/LocalStorage.js";
let dreams = retrieveDataFromLS("dreams");
export function getDreams() {
    return dreams;
}
export function deleteDream(id) {
    const dreamIndex = dreams.findIndex((d) => d.id === id);
    if (dreamIndex > -1) {
        dreams.splice(dreamIndex, 1);
        updateDataToLS("dreams", dreams);
    }
}
export function toggleDream(id, checked) {
    const dream = dreams.find((d) => d.id === id);
    if (dream) {
        dream.checked = checked;
        updateDataToLS("dreams", dreams);
    }
}
//# sourceMappingURL=DreamService.js.map