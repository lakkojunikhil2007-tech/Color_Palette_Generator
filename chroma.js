function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0");
}

let currentPalette = [];

function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = "";
    currentPalette = [];

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        currentPalette.push(color);

        const box = document.createElement("div");
        box.classList.add("color-box");
        box.style.background = color;
        box.textContent = color;
        box.style.animationDelay = `${i * 0.15}s`;

        box.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            alert("Copied: " + color);
        });

        palette.appendChild(box);
    }
}

/* ✅ Save Palette to localStorage */
function savePalette() {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    saved.push(currentPalette);
    localStorage.setItem("favorites", JSON.stringify(saved));

    loadFavorites();
}

/* ✅ Load favorites and display them */
function loadFavorites() {
    const favDiv = document.getElementById("favorites");
    favDiv.innerHTML = "";

    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    saved.forEach((palette, index) => {
        const card = document.createElement("div");
        card.classList.add("favorite-card");

        palette.forEach(color => {
            const small = document.createElement("div");
            small.classList.add("small-color");
            small.style.background = color;
            card.appendChild(small);
        });

        /* ✅ Click card → copy full palette */
        card.addEventListener("click", () => {
            navigator.clipboard.writeText(palette.join(", "));
            alert("Copied palette:\n" + palette.join(", "));
        });

        /* ✅ Delete button */
        const del = document.createElement("button");
        del.classList.add("delete-btn");
        del.textContent = "Delete";

        del.addEventListener("click", (e) => {
            e.stopPropagation();  // Prevent card click
            saved.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(saved));
            loadFavorites();
        });

        card.appendChild(del);
        favDiv.appendChild(card);
    });
}

document.getElementById("generateBtn").addEventListener("click", generatePalette);
document.getElementById("saveBtn").addEventListener("click", savePalette);

/* ✅ Initial load */
generatePalette();
loadFavorites();
