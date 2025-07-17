import { Dream } from "../models/Dream.js";
import { Theme } from "../models/Theme.js";
import { UserLogin } from "../models/Login.js";
import { LocalStorageManager } from "../utils/LocalStorageManager.js";

const loginDataManager = new LocalStorageManager<UserLogin>("userLogin");

export const themes: Theme[] = [
  { id: 1, theme: "teknikdrömmar" },
  { id: 2, theme: "vardagsdrömmar" },
  { id: 3, theme: "husdrömmar" },
  { id: 4, theme: "sportdrömmar" },
  { id: 5, theme: "resdrömmar" },
];

const user = loginDataManager.getData();
export let name = user ? user.name : "NAMN";

export const dreams: Dream[] = [
  {
    id: 1,
    name: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true,
  },
  {
    id: 2,
    name: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false,
  },
  {
    id: 3,
    name: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false,
  },
];
