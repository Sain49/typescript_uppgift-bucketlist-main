import { deleteDream, toggleDream } from "../services/DreamService.js";
const dreamList = document.querySelector(".dream-list");
export function renderDreams(dreams) {
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
            toggleDream(d.id, checkbox.checked); // toggle dream
        });
        const label = document.createElement("label");
        label.htmlFor = `dream-check-${d.id}`;
        label.innerHTML = `${d.name}, <span class="dream-theme">${d.theme}</span>`;
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerHTML = `<img src="../assets/images/trash_delete.png">`;
        deleteBtn.addEventListener("click", () => {
            deleteDream(d.id); // delete dream
            renderDreams(dreams);
        });
        dreamItem.appendChild(checkbox);
        dreamItem.appendChild(label);
        dreamItem.appendChild(deleteBtn);
        dreamList.appendChild(dreamItem);
    });
}
//# sourceMappingURL=DreamRenderer.js.map