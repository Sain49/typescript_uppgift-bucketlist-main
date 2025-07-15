import { dreams, name } from "../services/UserData.js";
const username = document.getElementById("user-name");
const dreamList = document.querySelector(".dream-list");
function renderDreams() {
    dreamList.innerHTML = "";
    dreams.forEach((d) => {
        const dreamItem = document.createElement("li");
        dreamItem.classList.add("dream-list_item");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("dream-check");
        checkbox.id = `dream-check-${d.id}`;
        checkbox.checked = d.checked;
        checkbox.addEventListener("change", () => {
            d.checked = checkbox.checked;
        });
        const label = document.createElement("label");
        label.htmlFor = `dream-check-${d.id}`;
        label.innerHTML = `${d.name}, <span class="dream-theme">${d.theme}</span>`;
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerHTML = `<img src="../assets/images/trash_delete.png">`;
        deleteBtn.addEventListener("click", () => {
            const dreamIndex = dreams.findIndex((dr) => dr.id === d.id);
            if (dreamIndex > -1) {
                dreams.splice(dreamIndex, 1);
                renderDreams();
            }
        });
        dreamItem.appendChild(checkbox);
        dreamItem.appendChild(label);
        dreamItem.appendChild(deleteBtn);
        dreamList.appendChild(dreamItem);
    });
}
username.textContent = name;
renderDreams();
//# sourceMappingURL=Dashboard.js.map