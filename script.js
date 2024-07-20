
const container = document.querySelector("div");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row")
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.style.width = `${608 / 16}px`;
            square.style.height = `${608 / 16}px`;
            square.classList.toggle("square");
            square.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "red")
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

createGrid();