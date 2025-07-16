// import { Dream } from "../models/IDream.js";
// import { name } from "../services/UserData.js";
// import { retrieveDataFromLS, updateDataToLS } from "../utils/LocalStorage.js";
// const dreams = retrieveDataFromLS<Dream>("dreams");
// const username = document.getElementById("user-name") as HTMLSpanElement;
// const dreamList = document.querySelector(".dream-list") as HTMLUListElement;
// console.log(dreams);
// function renderDreams() {
//   dreamList.innerHTML = "";
//   dreams.forEach((d: Dream) => {
//     const dreamItem = document.createElement("li");
//     dreamItem.classList.add("dream-list_item");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("dream-check");
//     checkbox.id = `dream-check-${d.id}`;
//     checkbox.checked = d.checked;
//     checkbox.addEventListener("change", () => {
//       d.checked = checkbox.checked;
//     });
//     const label = document.createElement("label");
//     label.htmlFor = `dream-check-${d.id}`;
//     label.innerHTML = `${d.name}, <span class="dream-theme">${d.theme}</span>`;
//     const deleteBtn = document.createElement("button");
//     deleteBtn.type = "button";
//     deleteBtn.innerHTML = `<img src="../assets/images/trash_delete.png">`;
//     deleteBtn.addEventListener("click", () => {
//       const dreamIndex = dreams.findIndex(
//         (dr: { id: number }) => dr.id === d.id
//       );
//       if (dreamIndex > -1) {
//         dreams.splice(dreamIndex, 1);
//         updateDataToLS<Dream[]>("dreams", dreams);
//         renderDreams();
//       }
//     });
//     dreamItem.appendChild(checkbox);
//     dreamItem.appendChild(label);
//     dreamItem.appendChild(deleteBtn);
//     dreamList.appendChild(dreamItem);
//   });
// }
// username.textContent = name;
// renderDreams();
import { getDreams } from "../services/DreamService.js";
import { name } from "../services/UserData.js";
import { renderDreams } from "./DreamRenderer.js";
const username = document.getElementById("user-name");
username.textContent = name;
renderDreams(getDreams());
//# sourceMappingURL=Dashboard.js.map