import { LocalStorageManager } from "../utils/LocalStorageManager.js";
const loginDataManager = new LocalStorageManager("userLogin");
export const themes = [
    { id: 1, theme: "teknikdrömmar" },
    { id: 2, theme: "vardagsdrömmar" },
    { id: 3, theme: "husdrömmar" },
    { id: 4, theme: "sportdrömmar" },
    { id: 5, theme: "resdrömmar" },
];
const user = loginDataManager.getData();
export let name = user ? user.name : "NAMN";
export const dreams = [
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
//# sourceMappingURL=UserDataService.js.map