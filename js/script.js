function readLocalValue(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function writeLocalValue(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}

function readLocalJson(key, fallback) {
    try {
        const raw = readLocalValue(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function writeLocalJson(key, value) {
    return writeLocalValue(key, JSON.stringify(value));
}

function removeLocalValue(key) {
    try {
        localStorage.removeItem(key);
    } catch {
        // The page still works if browser storage is disabled.
    }
}

const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slide");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const dots = document.querySelectorAll(".slider-dot");

if (slider && slides.length > 0) {
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    let startX = 0;

    slider.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        const difference = startX - endX;

        if (difference > 50) {
            showSlide(currentSlide + 1);
        } else if (difference < -50) {
            showSlide(currentSlide - 1);
        }
    });

    showSlide(0);
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Email dan password harus diisi.");
            return;
        }

        let users = readLocalJson("users", []);
        if (!Array.isArray(users)) users = [];
        users = users.filter(account => account && typeof account === "object");

        const oldUser = readLocalJson("userData", null);

        if (users.length === 0 && oldUser && typeof oldUser === "object") {
            users.push(oldUser);
            writeLocalJson("users", users);
        }

        const user = users.find(function(account) {
            return String(account.email || "").trim().toLowerCase() === email && account.password === password;
        });

        if (!user) {
            alert("Email atau password salah.");
            return;
        }

        if (!writeLocalJson("currentUser", user)) {
            alert("Browser tidak mengizinkan penyimpanan sesi. Aktifkan penyimpanan lokal lalu coba lagi.");
            return;
        }

        alert("Login berhasil!");
        window.location.href = "profile.html";
    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Semua data harus diisi.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Konfirmasi password tidak sesuai.");
            return;
        }

        let users = readLocalJson("users", []);
        if (!Array.isArray(users)) users = [];
        users = users.filter(account => account && typeof account === "object");

        const oldUser = readLocalJson("userData", null);

        if (users.length === 0 && oldUser && typeof oldUser === "object") {
            users.push(oldUser);
            writeLocalJson("users", users);
        }

        const emailExists = users.some(function(account) {
            return String(account.email || "").trim().toLowerCase() === email;
        });

        if (emailExists) {
            alert("Email sudah terdaftar.");
            return;
        }

        const nextMemberNumber = Number.parseInt(readLocalValue("nextMemberNumber"), 10) || 1;
        const highestMemberNumber = users.reduce(function(highest, account) {
            const match = String(account.memberNumber || "").match(/^LIB(\d+)$/i);
            return match ? Math.max(highest, Number(match[1]) + 1) : highest;
        }, 1);
        const memberNumber = Math.max(nextMemberNumber, highestMemberNumber);

        const formattedMemberNumber = "LIB" + String(memberNumber).padStart(4, "0");

        const userData = {
            name: name,
            email: email,
            password: password,
            memberNumber: formattedMemberNumber
        };

        users.push(userData);

        if (!writeLocalJson("users", users)) {
            alert("Browser tidak mengizinkan penyimpanan akun. Aktifkan penyimpanan lokal lalu coba lagi.");
            return;
        }

        writeLocalValue("nextMemberNumber", String(memberNumber + 1));

        alert("Registrasi berhasil!\nNomor Anggota Anda: " + formattedMemberNumber);
        window.location.href = "login.html";
    });
}


const profileName = document.getElementById("profileName");

if (profileName) {
    const currentUser = readLocalJson("currentUser", null);

    if (currentUser) {
        document.getElementById("profileName").textContent = currentUser.name;
        document.getElementById("profileEmail").textContent = currentUser.email;
        document.getElementById("profileNameInfo").textContent = currentUser.name;
        document.getElementById("profileEmailInfo").textContent = currentUser.email;
        document.getElementById("profileMemberInfo").textContent = currentUser.memberNumber || "Belum tersedia";
    } else {
        window.location.replace("login.html");
    }
}


const editProfile = document.getElementById("editProfile");

if (editProfile) {
    editProfile.addEventListener("click", function() {
        const currentUser = readLocalJson("currentUser", null);

        if (!currentUser) {
            return;
        }

        const newName = prompt("Masukkan nama baru:", currentUser.name);
        const newEmail = prompt("Masukkan email baru:", currentUser.email);

        if (newName === null || newEmail === null) {
            return;
        }

        const normalizedName = newName.trim();
        const normalizedEmail = newEmail.trim().toLowerCase();

        if (!normalizedName || !normalizedEmail) {
            alert("Nama dan email tidak boleh kosong.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            alert("Masukkan alamat email yang valid.");
            return;
        }

        let users = readLocalJson("users", []);
        if (!Array.isArray(users)) users = [];
        users = users.filter(account => account && typeof account === "object");

        const duplicateEmail = users.some(function(account) {
            const sameAccount = currentUser.memberNumber
                ? account.memberNumber === currentUser.memberNumber
                : String(account.email || "").trim().toLowerCase() === String(currentUser.email || "").trim().toLowerCase();
            return !sameAccount &&
                String(account.email || "").trim().toLowerCase() === normalizedEmail;
        });

        if (duplicateEmail) {
            alert("Email tersebut sudah digunakan akun lain.");
            return;
        }

        currentUser.name = normalizedName;
        currentUser.email = normalizedEmail;

        const userIndex = users.findIndex(function(account) {
            return currentUser.memberNumber
                ? account.memberNumber === currentUser.memberNumber
                : String(account.email || "").trim().toLowerCase() === String(currentUser.email || "").trim().toLowerCase();
        });
        if (userIndex === -1) users.push(currentUser);
        else users[userIndex] = currentUser;

        if (!writeLocalJson("users", users) || !writeLocalJson("currentUser", currentUser)) {
            alert("Perubahan profil tidak dapat disimpan oleh browser.");
            return;
        }

        document.getElementById("profileName").textContent = normalizedName;
        document.getElementById("profileEmail").textContent = normalizedEmail;
        document.getElementById("profileNameInfo").textContent = normalizedName;
        document.getElementById("profileEmailInfo").textContent = normalizedEmail;

        alert("Profile berhasil diperbarui.");
    });
}


const logout = document.getElementById("logout");

if (logout) {
    logout.addEventListener("click", function() {
        removeLocalValue("currentUser");

        alert("Anda berhasil logout.");
        window.location.href = "login.html";
    });
}


const profileNav = document.getElementById("profileNav");

if (profileNav) {
    profileNav.addEventListener("click", function(event) {
        event.preventDefault();

        const currentUser = readLocalJson("currentUser", null);

        if (currentUser) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "login.html";
        }
    });
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("pesan").value.trim();
        const subject = encodeURIComponent(`Pesan dari ${name} — LAFENADHER E-Library`);
        const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
        const status = document.getElementById("contactFormStatus");

        if (status) {
            status.textContent = "Aplikasi email dibuka untuk menyelesaikan pengiriman pesan.";
        }

        window.location.href = `mailto:elibrary@example.com?subject=${subject}&body=${body}`;
    });
}


document.querySelectorAll(".menu-dropdown").forEach(function(menu) {
    const button = menu.querySelector(".menu-button");
    if (!button) return;

    button.addEventListener("click", function() {
        const isOpen = menu.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target)) {
            menu.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        }
    });

    menu.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            menu.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
            button.focus();
        }
    });
});
