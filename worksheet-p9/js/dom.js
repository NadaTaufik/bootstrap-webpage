
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


/*
 * =====================================================
 * SHEET D — FORM VALIDATION
 * =====================================================
 */

// Select the form and its fields
const goalForm = document.querySelector("#goal-form");

const skillName = document.querySelector("#skill-name");
const targetLevel = document.querySelector("#target-level");
const targetDate = document.querySelector("#target-date");

const submitButton = document.querySelector("#submit-goal");
const successMessage = document.querySelector("#form-success");

// Select the error-message elements
const skillNameError =
    document.querySelector("#skill-name-error");

const targetLevelError =
    document.querySelector("#target-level-error");

const targetDateError =
    document.querySelector("#target-date-error");


// -----------------------------------------------------
// Display or remove an error for one field
// -----------------------------------------------------

function setFieldError(field, errorElement, message) {
    errorElement.textContent = message;

    const invalid = message !== "";

    field.setAttribute("aria-invalid", String(invalid));

    field.classList.toggle("is-invalid", invalid);
    field.classList.toggle("is-valid", !invalid);
}


// -----------------------------------------------------
// Validate all three fields
// -----------------------------------------------------

function validateForm() {
    const name = skillName.value.trim();
    const level = targetLevel.value.trim();
    const date = targetDate.value.trim();

    let valid = true;

    // Validate skill name
    if (name === "") {
        setFieldError(
            skillName,
            skillNameError,
            "Please enter a skill name."
        );
        valid = false;
    } else {
        setFieldError(skillName, skillNameError, "");
    }

    // Validate target level
    if (level === "") {
        setFieldError(
            targetLevel,
            targetLevelError,
            "Please select a target level."
        );
        valid = false;
    } else {
        setFieldError(targetLevel, targetLevelError, "");
    }

    // Validate target date
    if (date === "") {
        setFieldError(
            targetDate,
            targetDateError,
            "Please choose a target date."
        );
        valid = false;
    } else if (!targetDate.validity.valid) {
        setFieldError(
            targetDate,
            targetDateError,
            "Please enter a valid target date."
        );
        valid = false;
    } else {
        setFieldError(targetDate, targetDateError, "");
    }

    // Enable submission only when all fields are valid
    submitButton.disabled = !valid;

    return valid;
}


// -----------------------------------------------------
// Validate while the user interacts
// -----------------------------------------------------

skillName.addEventListener("input", () => {
    successMessage.hidden = true;
    validateForm();
});

targetLevel.addEventListener("change", () => {
    successMessage.hidden = true;
    validateForm();
});

targetDate.addEventListener("input", () => {
    successMessage.hidden = true;
    validateForm();
});

targetDate.addEventListener("change", () => {
    successMessage.hidden = true;
    validateForm();
});


// -----------------------------------------------------
// Handle form submission without reloading
// -----------------------------------------------------

goalForm.addEventListener("submit", (event) => {
    // Stop the browser from reloading the page
    event.preventDefault();

    // Check every field before accepting submission
    if (!validateForm()) {
        const firstInvalid =
            goalForm.querySelector('[aria-invalid="true"]');

        if (firstInvalid) {
            firstInvalid.focus();
        }

        return;
    }

    // Read the validated values
    const newGoal = {
        skill: skillName.value.trim(),
        target: targetLevel.value,
        date: targetDate.value
    };

    console.log("New learning goal submitted:", newGoal);

    // Show confirmation
    successMessage.textContent =
        `Learning goal "${newGoal.skill}" submitted successfully.`;

    successMessage.hidden = false;

    // Clear form after successful submission
    goalForm.reset();

    // Return to the initial disabled state
    submitButton.disabled = true;

    [skillName, targetLevel, targetDate].forEach((field) => {
        field.classList.remove("is-valid", "is-invalid");
        field.removeAttribute("aria-invalid");
    });
});


// -----------------------------------------------------
// Initial validation
// -----------------------------------------------------

validateForm();

console.log("Sheet D: Form validation initialized.");
