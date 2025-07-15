import { Dream } from "../models/IDream.js";

export function retrieveDataFromLS<T>(key: string) {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : ({} as T);
}

export function updateDataToLS<T>(key: string, newData: T): void {
  const existingData = localStorage.getItem(key);
  const data = existingData ? JSON.parse(existingData) : ({} as T);

  data.push(newData);

  localStorage.setItem(key, JSON.stringify(data));
}
