const size = 640;
let gridSize = 16;
const container = document.querySelector("div");

function createGrid() {
    container.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row")
    
        for (let j = 0; j < gridSize; j++) {
            createSquare(row);
        }
        container.appendChild(row);
    }
}

function createSquare(row) {
    const square = document.createElement("div");
    square.style.width = `${size / gridSize}px`;
    square.style.height = `${size / gridSize}px`;
    square.style.opacity = "0";
    square.addEventListener("mouseover", (e) => {
        let red = getRandomRGB();
        let green = getRandomRGB(); 
        let blue = getRandomRGB();
        square.style.opacity = Math.min(parseFloat(square.style.opacity) + 0.1, 1) + "";
        e.target.style.backgroundColor = `rgb(${red} ${green} ${blue} / ${square.style.opacity})`;
    })
    row.appendChild(square);
}

createGrid();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("Enter new grid size (max 100):"))
    } while (gridSize > 100 || gridSize < 0 || Number.isNaN(gridSize));
    createGrid()
});

let getRandomRGB = () => Math.floor(Math.random() * 256);

