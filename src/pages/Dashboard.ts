import { getDreams } from "../services/DreamService.js";
import { name } from "../services/UserData.js";
import { renderDreams } from "./DreamRenderer.js";

const username = document.getElementById("user-name") as HTMLSpanElement;

username.textContent = name;

renderDreams(getDreams());
