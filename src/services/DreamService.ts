import { Dream } from "../models/Dream.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";

const dreamManager = new LocalStorageManager<Dream[]>("dreams");

let dreams = dreamManager.getData() || [];

export function getDreams(): Dream[] {
  return dreams;
}

export function addDream(dream: Omit<Dream, "id" | "checked">): void {
  const newDream: Dream = {
    id: dreams.length + 1,
    ...dream,
    checked: false,
  };

  dreams.push(newDream);

  dreamManager.setData(dreams);
}

export function deleteDream(id: number): void {
  const dreamIndex = dreams.findIndex((d) => d.id === id);
  if (dreamIndex > -1) {
    dreams.splice(dreamIndex, 1);

    dreamManager.setData(dreams);
  }
}

export function toggleDream(id: number, checked: boolean): void {
  const dream = dreams.find((d) => d.id === id);
  if (dream) {
    dream.checked = checked;

    dreamManager.setData(dreams);
  }
}
