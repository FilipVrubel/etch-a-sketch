const size = 640;
let gridSize = 16;
const container = document.querySelector("div");

function createGrid() {
    container.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row")
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.style.width = `${size / gridSize}px`;
            square.style.height = `${size / gridSize}px`;
            square.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "red")
            row.appendChild(square);

        }

        container.appendChild(row);
    }
}

createGrid();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("Enter new grid size (max 100):"))
    } while (gridSize > 100 || gridSize < 0 || Number.isNaN(gridSize));
    createGrid()
});
