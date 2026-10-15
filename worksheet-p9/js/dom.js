
/*
 * =====================================================
 * PABW Meeting 9
 * DOM, Events, and Interactivity
 * My Informatics Learning Roadmap
 *
 * Sheet B - Rendering Projects from Data
 * Sheet C - Event Delegation and Filters
 * =====================================================
 */

import { daftarProyek } from "./app.js";


// =====================================================
// SECTION A — SELECT HTML ELEMENTS
// =====================================================

const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const empty = document.querySelector("#empty");


// =====================================================
// SECTION B — CREATE PROJECT CARDS
// =====================================================

function buildCard(project) {

    // Create list item
    const li = document.createElement("li");
    li.className = "col-md-6";

    // Create Bootstrap card
    const card = document.createElement("article");
    card.className =
        "card project-card h-100 border-0 shadow-sm rounded-4";

    // Card body
    const body = document.createElement("div");
    body.className = "card-body p-4";

    // Project title
    const title = document.createElement("h3");
    title.className = "h5 fw-bold";
    title.textContent = project.judul;

    // Project year
    const year = document.createElement("p");
    year.className = "text-secondary mb-2";
    year.textContent = `Year: ${project.tahun}`;

    // Project category
    const category = document.createElement("p");
    category.className = "text-secondary small mb-2";
    category.textContent = `Category: ${project.category}`;

    // Project completion status
    const status = document.createElement("span");

    status.className = project.selesai
        ? "badge text-bg-success"
        : "badge text-bg-warning";

    status.textContent = project.selesai
        ? "Completed"
        : "In Progress";

    // Assemble elements
    body.append(title, year, category, status);
    card.append(body);
    li.append(card);

    return li;
}


// =====================================================
// SECTION C — RENDER PROJECTS
// =====================================================

function render(list) {

    // 1. Clear old cards first
    container.textContent = "";

    // 2. Handle empty results
    if (list.length === 0) {
        empty.hidden = false;
        return;
    }

    empty.hidden = true;

    // 3. Create project cards from data
    const fragment = document.createDocumentFragment();

    list.forEach((project) => {
        fragment.append(buildCard(project));
    });

    // 4. Insert cards into the page
    container.append(fragment);
}


// =====================================================
// SECTION D — MARK ACTIVE FILTER BUTTON
// =====================================================

function markActiveButton(activeButton) {

    const buttons = filterRow.querySelectorAll("button");

    buttons.forEach((button) => {

        const isActive = button === activeButton;

        button.classList.toggle("active", isActive);

        button.classList.toggle(
            "btn-primary",
            isActive
        );

        button.classList.toggle(
            "btn-outline-primary",
            !isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });
}


// =====================================================
// SECTION E — EVENT DELEGATION
// =====================================================

// ONE event listener attached to the parent
filterRow.addEventListener("click", (event) => {

    // Find the nearest clicked button
    const button = event.target.closest("button");

    // Ignore clicks outside the filter buttons
    if (!button || !filterRow.contains(button)) {
        return;
    }

    // Read category from data-category
    const selectedCategory = button.dataset.category;

    // Filter the original project array
    const selectedProjects = daftarProyek.filter(
        (project) =>
            selectedCategory === "all" ||
            project.category === selectedCategory
    );

    // Render filtered projects
    render(selectedProjects);

    // Update the active button
    markActiveButton(button);

    // Console verification
    console.log("Selected category:", selectedCategory);
    console.log("Matching projects:", selectedProjects.length);
});


// =====================================================
// SECTION F — INITIAL PAGE RENDER
// =====================================================

// Show all projects when the page first loads
render(daftarProyek);

// Mark "All" as active initially
const allButton = filterRow.querySelector(
    '[data-category="all"]'
);

markActiveButton(allButton);

console.log("=== MEETING 9 VERIFICATION ===");
console.log("Projects rendered:", daftarProyek.length);
console.log("Event delegation initialized successfully.");
