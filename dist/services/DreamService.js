import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const dreamManager = new LocalStorageManager("dreams");
let dreams = dreamManager.getData() || [];
export function getDreams() {
    return dreams;
}
export function addDream(dream) {
    const newDream = Object.assign(Object.assign({ id: dreams.length + 1 }, dream), { checked: false });
    dreams.push(newDream);
    dreamManager.setData(dreams);
}
export function deleteDream(id) {
    const dreamIndex = dreams.findIndex((d) => d.id === id);
    if (dreamIndex > -1) {
        dreams.splice(dreamIndex, 1);
        dreamManager.setData(dreams);
    }
}
export function toggleDream(id, checked) {
    const dream = dreams.find((d) => d.id === id);
    if (dream) {
        dream.checked = checked;
        dreamManager.setData(dreams);
    }
}
//# sourceMappingURL=DreamService.js.map