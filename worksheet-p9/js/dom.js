
/*
 * PABW Meeting 9
 * Sheet B - Building Elements from Data
 * My Informatics Learning Roadmap
 */

import { daftarProyek } from "./app.js";

// Select the project list container
const container = document.querySelector("#list");

// Create one card for each project
function buildCard(project) {
    const li = document.createElement("li");
    li.className = "col-md-6";

    const card = document.createElement("article");
    card.className = "card project-card h-100 border-0 shadow-sm rounded-4";

    const body = document.createElement("div");
    body.className = "card-body p-4";

    const title = document.createElement("h3");
    title.className = "h5 fw-bold";
    title.textContent = project.judul;

    const year = document.createElement("p");
    year.className = "text-secondary mb-2";
    year.textContent = `Year: ${project.tahun}`;

    const status = document.createElement("span");
    status.className = project.selesai
        ? "badge text-bg-success"
        : "badge text-bg-warning";

    status.textContent = project.selesai
        ? "Completed"
        : "In Progress";

    body.append(title, year, status);
    card.append(body);
    li.append(card);

    return li;
}

// Render project cards from the original data
function render(list) {
    // Clear existing cards before adding new ones
    container.textContent = "";

    const fragment = document.createDocumentFragment();

    list.forEach((project) => {
        fragment.append(buildCard(project));
    });

    container.append(fragment);
}

// Initial rendering
render(daftarProyek);

console.log("Sheet B: Projects rendered successfully.");
