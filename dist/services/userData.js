export const themes = [
    "teknikdrömmar",
    "vardagsdrömmar",
    "husdrömmar",
    "sportdrömmar",
    "resdrömmar",
];
const userLoginString = localStorage.getItem("userLogin");
const userLogin = userLoginString ? JSON.parse(userLoginString) : null;
export let name = userLogin ? userLogin.name : "NAMN";
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
    {
        id: 4,
        name: "En dröm som tar flera rader lorem ipsum",
        theme: "Out of the blue",
        checked: true,
    },
];
//# sourceMappingURL=UserData.js.map