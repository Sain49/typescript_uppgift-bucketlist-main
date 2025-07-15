import { Dream } from "../models/IDream.js";

export function retrieveDataFromLS<T>(key: string): T[] {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : [];
}

export function updateDataToLS<T>(key: string, newData: T): void {
  localStorage.setItem(key, JSON.stringify(newData));
}
