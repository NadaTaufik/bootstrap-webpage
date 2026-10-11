
// SECTION B — Profile Data

// B.1 — Variables and objects
const profil = {
    nama: "Nada Taufik Shahbal",
    peran: "Informatics Student",
    universitas: "Universitas Islam Indonesia",
    keahlian: [
        "Java",
        "Python",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript"
    ],
    sedangBelajar: "JavaScript"
};

// A value that can change
let pilihanAktif = "semua";

// Update this when your project list is confirmed
const jumlahProyek = 2;

// B.2 — Template literals
const kalimat = `My name is ${profil.nama}. I am an ${profil.peran} at ${profil.universitas}. I have studied Java and Python, and I am currently learning ${profil.sedangBelajar}.`;

// Display results in the Console
console.log("=== SECTION B ===");
console.log(kalimat);
console.log("Skills:", profil.keahlian);
console.log("Number of projects:", jumlahProyek);
console.log("Active selection:", pilihanAktif);

// B.3 — Optional chaining and nullish coalescing
const kota = profil.alamat?.kota ?? "Not provided";

console.log("City:", kota);
console.log("Name type:", typeof profil.nama);
console.log("Project count type:", typeof jumlahProyek);

// B.4 — Display profile data in HTML
const navbarName = document.querySelector("#navbar-name");
const heroRole = document.querySelector("#hero-role");
const aboutDescription = document.querySelector("#about-description");
const footerName = document.querySelector("#footer-name");

navbarName.textContent = `${profil.nama.split(" ")[0]}'s Roadmap`;

heroRole.textContent = profil.peran;

aboutDescription.textContent =
    `My name is ${profil.nama}. I study Informatics at ${profil.universitas}. I previously studied Java and Python, and I am currently learning ${profil.sedangBelajar} while developing my web development skills.`;

footerName.textContent = `© 2026 ${profil.nama}`;


// SECTION C — Two Pure Functions

// C.1 — Create an introduction using profile data
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// C.2 — Format a list of skills into one line
const formatKeahlian = (daftar) => daftar.join(" · ");

// C.3 — Test both functions
console.log("=== SECTION C ===");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// C.4 — Test with different arguments
console.log(buatPerkenalan({
    nama: "Test Student",
    peran: "Web Developer"
}));

console.log(formatKeahlian(["HTML", "CSS", "JavaScript"]));


// D.5 — Display the learning goals dynamically

const goalsTableBody = document.querySelector("#goals-table-body");

const statusClasses = {
    "In Progress": "text-bg-primary",
    "Learning": "text-bg-warning",
    "Continuing": "text-bg-info"
};

daftarKeahlian.forEach((keahlian) => {
    const row = document.createElement("tr");

    const skillCell = document.createElement("th");
    skillCell.scope = "row";
    skillCell.className = "ps-4 py-3";
    skillCell.textContent = keahlian.nama;

    const levelCell = document.createElement("td");
    levelCell.textContent = keahlian.tingkat;

    const targetCell = document.createElement("td");
    targetCell.textContent = keahlian.target;

    const statusCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className =
        `badge ${statusClasses[keahlian.status] ?? "text-bg-secondary"}`;
    badge.textContent = keahlian.status;
    statusCell.appendChild(badge);

    row.append(skillCell, levelCell, targetCell, statusCell);
    goalsTableBody.appendChild(row);
});
