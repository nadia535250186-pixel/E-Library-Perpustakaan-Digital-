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

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Email/Username dan password harus diisi.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const oldUser = JSON.parse(localStorage.getItem("userData"));

        if (users.length === 0 && oldUser) {
            users.push(oldUser);
            localStorage.setItem("users", JSON.stringify(users));
        }

        const user = users.find(function(account) {
            return account.email === email && account.password === password;
        });

        if (!user) {
            alert("Email atau password salah.");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Login berhasil!");
        window.location.href = "profile.html";
    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
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

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const oldUser = JSON.parse(localStorage.getItem("userData"));

        if (users.length === 0 && oldUser) {
            users.push(oldUser);
        }

        const emailExists = users.some(function(account) {
            return account.email === email;
        });

        if (emailExists) {
            alert("Email sudah terdaftar.");
            return;
        }

        let memberNumber = localStorage.getItem("nextMemberNumber");

        if (!memberNumber) {
            memberNumber = 1;
        }

        const formattedMemberNumber = "LIB" + String(memberNumber).padStart(4, "0");

        const userData = {
            name: name,
            email: email,
            password: password,
            memberNumber: formattedMemberNumber
        };

        users.push(userData);

        localStorage.setItem("users", JSON.stringify(users));

        memberNumber++;
        localStorage.setItem("nextMemberNumber", memberNumber);

        alert("Registrasi berhasil!\nNomor Anggota Anda: " + formattedMemberNumber);
        window.location.href = "login.html";
    });
}


const profileName = document.getElementById("profileName");

if (profileName) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("profileName").textContent = currentUser.name;
        document.getElementById("profileEmail").textContent = currentUser.email;
        document.getElementById("profileNameInfo").textContent = currentUser.name;
        document.getElementById("profileEmailInfo").textContent = currentUser.email;
        document.getElementById("profileMemberInfo").textContent = currentUser.memberNumber;
    }
}


const editProfile = document.getElementById("editProfile");

if (editProfile) {
    editProfile.addEventListener("click", function() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            return;
        }

        const newName = prompt("Masukkan nama baru:", currentUser.name);
        const newEmail = prompt("Masukkan email baru:", currentUser.email);

        if (newName === null || newEmail === null) {
            return;
        }

        if (newName === "" || newEmail === "") {
            alert("Nama dan email tidak boleh kosong.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        currentUser.name = newName;
        currentUser.email = newEmail;

        users = users.map(function(account) {
            if (account.memberNumber === currentUser.memberNumber) {
                return currentUser;
            }

            return account;
        });

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        document.getElementById("profileName").textContent = newName;
        document.getElementById("profileEmail").textContent = newEmail;
        document.getElementById("profileNameInfo").textContent = newName;
        document.getElementById("profileEmailInfo").textContent = newEmail;

        alert("Profile berhasil diperbarui.");
    });
}


const logout = document.getElementById("logout");

if (logout) {
    logout.addEventListener("click", function() {
        localStorage.removeItem("currentUser");

        alert("Anda berhasil logout.");
        window.location.href = "login.html";
    });
}


const profileNav = document.getElementById("profileNav");

if (profileNav) {
    profileNav.addEventListener("click", function(event) {
        event.preventDefault();

        const currentUser = localStorage.getItem("currentUser");

        if (currentUser) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "login.html";
        }
    });
}