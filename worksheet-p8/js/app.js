
// =============================================
// PABW MEETING 8
// JavaScript ES6+, Objects, Functions, Arrays
// My Informatics Learning Roadmap
// =============================================


// =============================================
// SECTION B — PROFILE DATA
// =============================================

// B.1 — Object, const, and let
const profil = {
    nama: "Nada Taufik Shahbal",
    peran: "Informatics Student",
    universitas: "Universitas Islam Indonesia",
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

// This variable can change when filtering data
let pilihanAktif = "semua";

// B.2 — Template literals
const kalimat = `My name is ${profil.nama}. I am an ${profil.peran} at ${profil.universitas}. I previously studied Java and Python, and I am currently learning ${profil.sedangBelajar}.`;

console.log("=== SECTION B ===");
console.log(kalimat);
console.log("Skills:", profil.keahlian);
console.log("Active selection:", pilihanAktif);

// B.3 — Optional chaining and nullish coalescing
const kota = profil.alamat?.kota ?? "Not provided";

console.log("City:", kota);
console.log("Name type:", typeof profil.nama);


// =============================================
// SECTION C — TWO PURE FUNCTIONS
// =============================================

// C.1 — Introduction function
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// C.2 — Skill formatting function
const formatKeahlian = (daftar) => daftar.join(" · ");

// C.3 — Test the functions
console.log("=== SECTION C ===");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Different arguments
console.log(
    buatPerkenalan({
        nama: "Test Student",
        peran: "Web Developer"
    })
);

console.log(
    formatKeahlian(["HTML", "CSS", "JavaScript"])
);


// =============================================
// SECTION D — DATA STRUCTURES
// =============================================

// D.1 — Array of objects: technical skills
// Progress values are personal estimates.
// null means no percentage has been assessed.
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
        deskripsi: "Practising layouts, responsive design, and styling."
    },
    {
        nama: "Bootstrap",
        tingkat: "Beginner",
        target: "Intermediate",
        status: "Learning",
        progress: 45,
        icon: "bi-bootstrap",
        warna: "warning",
        deskripsi: "Learning responsive grids and reusable components."
    },
    {
        nama: "Java",
        tingkat: "Intermediate",
        target: "Advanced",
        status: "In Progress",
        progress: 70,
        icon: "bi-cup-hot",
        warna: "success",
        deskripsi: "Previously studied OOP, algorithms, and application development."
    },
    {
        nama: "Python",
        tingkat: "Previously Studied",
        target: "Intermediate",
        status: "Previously Studied",
        progress: null,
        icon: "bi-code-square",
        warna: "secondary",
        deskripsi: "Previously studied Python programming fundamentals."
    },
    {
        nama: "JavaScript",
        tingkat: "Beginner",
        target: "Intermediate",
        status: "Learning",
        progress: null,
        icon: "bi-filetype-js",
        warna: "warning",
        deskripsi: "Currently learning ES6+, functions, objects, and arrays."
    }
];

// D.2 — Array of objects: actual coursework projects
// Check and update completion statuses if needed.
const daftarProyek = [
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

console.log("Number of projects:", jumlahProyek);

// D.3 — Display data as tables
console.log("=== SECTION D ===");

console.table(daftarKeahlian);
console.table(daftarProyek);

// MAP — Create an array of project titles
const judulProyek = daftarProyek.map(
    (proyek) => proyek.judul
);

console.log("Project titles:", judulProyek);

// FILTER — Get completed projects
const proyekSelesai = daftarProyek.filter(
    (proyek) => proyek.selesai === true
);

console.log("Completed projects:");
console.table(proyekSelesai);

// FIND — Get a specific project
const proyekRoadmap = daftarProyek.find(
    (proyek) =>
        proyek.judul === "My Informatics Learning Roadmap"
);

console.log("Found project:", proyekRoadmap);

// FILTER — Find skills currently being learned
const keahlianLearning = daftarKeahlian.filter(
    (keahlian) => keahlian.status === "Learning"
);

console.log("Currently learning:");
console.table(keahlianLearning);

// MAP — Get skill names
const namaKeahlian = daftarKeahlian.map(
    (keahlian) => keahlian.nama
);

console.log("Skill names:", namaKeahlian);

// D.4 — Sort a copy, preserving the original array
const proyekUrut = [...daftarProyek].sort(
    (a, b) => a.judul.localeCompare(b.judul)
);

console.log("Sorted project copy:");
console.table(proyekUrut);

console.log("Original projects:");
console.table(daftarProyek);


// =============================================
// DISPLAY PROFILE DATA IN HTML
// =============================================

const navbarName = document.querySelector("#navbar-name");
const heroRole = document.querySelector("#hero-role");
const aboutDescription = document.querySelector("#about-description");
const aboutRole = document.querySelector("#about-role");
const footerName = document.querySelector("#footer-name");

navbarName.textContent =
    `${profil.nama.split(" ")[0]}'s Roadmap`;

heroRole.textContent = profil.peran;

aboutDescription.textContent =
    `My name is ${profil.nama}. I study Informatics at ${profil.universitas}. I previously studied Java and Python, and I am currently learning ${profil.sedangBelajar} while developing my web development skills.`;

aboutRole.textContent = profil.peran;

footerName.textContent = `© 2026 ${profil.nama}`;


// =============================================
// D.5 — GENERATE SKILL CARDS
// =============================================

const skillsContainer =
    document.querySelector("#skills-container");

const badgeClasses = {
    "In Progress": "text-bg-primary",
    "Learning": "text-bg-warning",
    "Previously Studied": "text-bg-secondary"
};

// Build cards using DOM methods
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

    // Skill name
    const title = document.createElement("h3");
    title.className = "h4 fw-bold";
    title.textContent = keahlian.nama;

    // Description
    const description = document.createElement("p");
    description.className = "text-secondary";
    description.textContent = keahlian.deskripsi;

    body.append(iconBox, title, description);

    // Progress, when a percentage is available
    if (keahlian.progress !== null) {
        const progressInfo = document.createElement("div");
        progressInfo.className =
            "d-flex justify-content-between mb-2";

        const progressLabel = document.createElement("span");
        progressLabel.className = "small fw-semibold";
        progressLabel.textContent = "Progress";

        const progressValue = document.createElement("span");
        progressValue.className = "small";
        progressValue.textContent = `${keahlian.progress}%`;

        progressInfo.append(progressLabel, progressValue);

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

// MAP creates the six card elements
const kartuKeahlian = daftarKeahlian.map(buatKartuKeahlian);

skillsContainer.replaceChildren(...kartuKeahlian);


// =============================================
// D.6 — GENERATE LEARNING GOALS TABLE
// =============================================

const goalsTableBody =
    document.querySelector("#goals-table-body");

console.log("Goals table found:", goalsTableBody);

function buatBarisTujuan(keahlian) {
    const row = document.createElement("tr");

    const skillCell = document.createElement("th");
    skillCell.className = "ps-4 py-3";
    skillCell.scope = "row";
    skillCell.textContent = keahlian.nama;

    const levelCell = document.createElement("td");
    levelCell.textContent = keahlian.tingkat;

    const targetCell = document.createElement("td");
    targetCell.textContent = keahlian.target;

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

// Generate table rows from the same array
const barisTujuan = daftarKeahlian.map(buatBarisTujuan);

goalsTableBody.replaceChildren(...barisTujuan);

// Final verification
console.log("Skills rendered:", kartuKeahlian.length);
console.log("Goals rendered:", barisTujuan.length);
console.log("=== SECTION D COMPLETE ===");
