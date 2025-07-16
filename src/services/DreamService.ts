import { Dream } from "../models/IDream.js";
import { retrieveDataFromLS, updateDataToLS } from "../utils/LocalStorage.js";

let dreams = retrieveDataFromLS<Dream>("dreams");

export function getDreams(): Dream[] {
  return dreams;
}

export function deleteDream(id: number): void {
  const dreamIndex = dreams.findIndex((d) => d.id === id);
  if (dreamIndex > -1) {
    dreams.splice(dreamIndex, 1);

    updateDataToLS<Dream[]>("dreams", dreams);
  }
}

export function toggleDream(id: number, checked: boolean): void {
  const dream = dreams.find((d) => d.id === id);
  if (dream) {
    dream.checked = checked;

    updateDataToLS<Dream[]>("dreams", dreams);
  }
}
