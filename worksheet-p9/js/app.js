
/*
 * =====================================================
 * PABW MEETING 8 & 9
 * My Informatics Learning Roadmap
 * JavaScript ES6+, Functions, Arrays, and Data
 * =====================================================
 *
 * app.js: Profile data and existing functionality
 * dom.js: Meeting 9 DOM rendering and event handling
 */

// =====================================================
// SECTION B — PROFILE DATA
// =====================================================

const profil = {
    nama: "Nada Taufik Shahbal",
    peran: "Informatics Student",
    universitas: "Universitas Islam Indonesia",
    nim: "25523266",
    keahlian: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Java",
        "Python",
        "JavaScript"
    ],
    sedangBelajar: "JavaScript"
};

let pilihanAktif = "semua";

const kota = profil.alamat?.kota ?? "Not provided";

const kalimat = `My name is ${profil.nama}. I am an ${profil.peran} at ${profil.universitas}. I previously studied Java and Python, and I am currently learning ${profil.sedangBelajar}.`;

console.log("=== SECTION B ===");
console.log(kalimat);
console.log("City:", kota);
console.log("Name type:", typeof profil.nama);
console.log("Active selection:", pilihanAktif);


// =====================================================
// SECTION C — TWO PURE FUNCTIONS
// =====================================================

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log("=== SECTION C ===");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Test different arguments
console.log(
    buatPerkenalan({
        nama: "Test Student",
        peran: "Web Developer"
    })
);

console.log(
    formatKeahlian(["HTML", "CSS", "JavaScript"])
);


// =====================================================
// SECTION D — ARRAYS AND OBJECTS
// =====================================================

// Progress percentages are self-estimates.
// null means no percentage has been assigned.

const daftarKeahlian = [
    {
        nama: "HTML",
        tingkat: "Intermediate",
        target: "Advanced",
        status: "In Progress",
        progress: 75,
        icon: "bi-filetype-html",
        warna: "primary",
        deskripsi: "Building semantic and accessible webpages."
    },
    {
        nama: "CSS",
        tingkat: "Learning",
        target: "Intermediate",
        status: "Learning",
        progress: null,
        icon: "bi-palette",
        warna: "info",
        deskripsi: "Practising layouts and responsive styling."
    },
    {
        nama: "Bootstrap",
        tingkat: "Beginner",
        target: "Intermediate",
        status: "Learning",
        progress: 45,
        icon: "bi-bootstrap",
        warna: "warning",
        deskripsi: "Learning responsive grids and components."
    },
    {
        nama: "Java",
        tingkat: "Intermediate",
        target: "Advanced",
        status: "In Progress",
        progress: 70,
        icon: "bi-cup-hot",
        warna: "success",
        deskripsi: "Previously studied OOP and algorithms."
    },
    {
        nama: "Python",
        tingkat: "Previously Studied",
        target: "Intermediate",
        status: "Previously Studied",
        progress: null,
        icon: "bi-code-square",
        warna: "secondary",
        deskripsi: "Previously studied Python fundamentals."
    },
    {
        nama: "JavaScript",
        tingkat: "Beginner",
        target: "Intermediate",
        status: "Learning",
        progress: null,
        icon: "bi-filetype-js",
        warna: "warning",
        deskripsi: "Currently learning ES6+, functions, and arrays."
    }
];


// =====================================================
// PROJECT DATA — EXPORTED FOR MEETING 9
// =====================================================

// This array is imported by dom.js.
// Preserve the original project information.

export const daftarProyek = [
    {
        judul: "My Informatics Learning Roadmap",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "JamuSync",
        tahun: 2026,
        selesai: false
    }
];

const jumlahProyek = daftarProyek.length;

console.log("=== SECTION D ===");
console.log("Number of projects:", jumlahProyek);
console.table(profil.keahlian);
console.table(daftarKeahlian);
console.table(daftarProyek);


// =====================================================
// ARRAY METHODS — MAP, FILTER, FIND, SORT
// =====================================================

// MAP — Transform projects into titles
const judulProyek = daftarProyek.map(
    (proyek) => proyek.judul
);

console.log("Project titles:", judulProyek);


// FILTER — Select completed projects
const proyekSelesai = daftarProyek.filter(
    (proyek) => proyek.selesai === true
);

console.table(proyekSelesai);


// FIND — Find one project
const proyekRoadmap = daftarProyek.find(
    (proyek) =>
        proyek.judul === "My Informatics Learning Roadmap"
);

console.log("Found project:", proyekRoadmap);


// FILTER — Skills currently being learned
const keahlianLearning = daftarKeahlian.filter(
    (keahlian) => keahlian.status === "Learning"
);

console.table(keahlianLearning);


// MAP — All skill names
const namaKeahlian = daftarKeahlian.map(
    (keahlian) => keahlian.nama
);

console.log("Skill names:", namaKeahlian);


// COPY + SORT — Do not mutate the original array
const proyekUrut = [...daftarProyek].sort(
    (a, b) => a.judul.localeCompare(b.judul)
);

console.log("Sorted project copy:");
console.table(proyekUrut);

console.log("Original project list:");
console.table(daftarProyek);


// Object copy demonstration
const salinanProfil = { ...profil };

salinanProfil.nama = "Example Student";

console.log("Original name:", profil.nama);
console.log("Copied name:", salinanProfil.nama);


// =====================================================
// DISPLAY PROFILE INFORMATION
// =====================================================

document.querySelector("#navbar-name").textContent =
    `${profil.nama.split(" ")[0]}'s Roadmap`;

document.querySelector("#hero-role").textContent =
    profil.peran;

document.querySelector("#about-description").textContent =
    `My name is ${profil.nama}. I study Informatics at ${profil.universitas}. I previously studied Java and Python, and I am currently learning ${profil.sedangBelajar} while improving my web development skills.`;

document.querySelector("#about-role").textContent =
    profil.peran;

document.querySelector("#footer-name").textContent =
    `© 2026 ${profil.nama}`;


// =====================================================
// D.5 — GENERATE TECHNICAL SKILL CARDS
// =====================================================

const skillsContainer =
    document.querySelector("#skills-container");

const badgeClasses = {
    "In Progress": "text-bg-primary",
    "Learning": "text-bg-warning",
    "Previously Studied": "text-bg-secondary"
};

function buatKartuKeahlian(keahlian) {
    const column = document.createElement("div");
    column.className = "col-md-4";

    const card = document.createElement("div");
    card.className =
        "card skill-card h-100 shadow-sm rounded-4";

    const body = document.createElement("div");
    body.className = "card-body p-4";

    // Icon
    const iconBox = document.createElement("div");
    iconBox.className =
        `icon-box bg-${keahlian.warna}-subtle text-${keahlian.warna} mb-4`;

    const icon = document.createElement("i");
    icon.className = `bi ${keahlian.icon}`;

    iconBox.appendChild(icon);

    // Title
    const title = document.createElement("h3");
    title.className = "h4 fw-bold";
    title.textContent = keahlian.nama;

    // Description
    const description = document.createElement("p");
    description.className = "text-secondary";
    description.textContent = keahlian.deskripsi;

    body.append(iconBox, title, description);

    // Progress
    if (keahlian.progress !== null) {
        const progressInfo = document.createElement("div");
        progressInfo.className =
            "d-flex justify-content-between mb-2";

        const label = document.createElement("span");
        label.className = "small fw-semibold";
        label.textContent = "Progress";

        const value = document.createElement("span");
        value.className = "small";
        value.textContent = `${keahlian.progress}%`;

        progressInfo.append(label, value);

        const progress = document.createElement("div");
        progress.className = "progress mb-3";

        const progressBar = document.createElement("div");
        progressBar.className =
            `progress-bar bg-${keahlian.warna}`;

        progressBar.style.width = `${keahlian.progress}%`;

        progressBar.setAttribute("role", "progressbar");
        progressBar.setAttribute(
            "aria-valuenow",
            String(keahlian.progress)
        );
        progressBar.setAttribute("aria-valuemin", "0");
        progressBar.setAttribute("aria-valuemax", "100");

        progress.appendChild(progressBar);
        body.append(progressInfo, progress);
    }

    // Status badge
    const badge = document.createElement("span");

    badge.className =
        `badge ${badgeClasses[keahlian.status] ?? "text-bg-secondary"}`;

    badge.textContent = keahlian.status;

    body.appendChild(badge);
    card.appendChild(body);
    column.appendChild(card);

    return column;
}

// Render skill cards
const kartuKeahlian = daftarKeahlian.map(buatKartuKeahlian);

skillsContainer.replaceChildren(...kartuKeahlian);


// =====================================================
// D.6 — GENERATE LEARNING GOALS TABLE
// =====================================================

const goalsTableBody =
    document.querySelector("#goals-table-body");

function buatBarisTujuan(keahlian) {
    const row = document.createElement("tr");

    // Skill name
    const skillCell = document.createElement("th");
    skillCell.className = "ps-4 py-3";
    skillCell.scope = "row";
    skillCell.textContent = keahlian.nama;

    // Current level
    const levelCell = document.createElement("td");
    levelCell.textContent = keahlian.tingkat;

    // Target level
    const targetCell = document.createElement("td");
    targetCell.textContent = keahlian.target;

    // Status
    const statusCell = document.createElement("td");

    const badge = document.createElement("span");

    badge.className =
        `badge ${badgeClasses[keahlian.status] ?? "text-bg-secondary"}`;

    badge.textContent = keahlian.status;

    statusCell.appendChild(badge);

    row.append(
        skillCell,
        levelCell,
        targetCell,
        statusCell
    );

    return row;
}

// Render learning goals table
const barisTujuan = daftarKeahlian.map(buatBarisTujuan);

goalsTableBody.replaceChildren(...barisTujuan);


// =====================================================
// FINAL VERIFICATION
// =====================================================

console.log("=== FINAL VERIFICATION ===");
console.log("Skills rendered:", kartuKeahlian.length);
console.log("Goals rendered:", barisTujuan.length);
console.log("Original profile name:", profil.nama);
console.log("=== SECTIONS B–D COMPLETE ===");
