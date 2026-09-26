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

        const userData = JSON.parse(localStorage.getItem("userData"));

        if (!userData) {
            alert("Akun belum terdaftar. Silakan register terlebih dahulu.");
            return;
        }

        if (email !== userData.email || password !== userData.password) {
            alert("Email atau password salah.");
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

        localStorage.setItem("userData", JSON.stringify(userData));

        memberNumber++;
        localStorage.setItem("nextMemberNumber", memberNumber);

        alert("Registrasi berhasil!\nNomor Anggota Anda: " + formattedMemberNumber);
        window.location.href = "login.html";
    });
}


const profileName = document.getElementById("profileName");

if (profileName) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        document.getElementById("profileName").textContent = userData.name;
        document.getElementById("profileEmail").textContent = userData.email;
        document.getElementById("profileNameInfo").textContent = userData.name;
        document.getElementById("profileEmailInfo").textContent = userData.email;
        document.getElementById("profileMemberInfo").textContent = userData.memberNumber;
    }
}


const editProfile = document.getElementById("editProfile");

if (editProfile) {
    editProfile.addEventListener("click", function() {
        const userData = JSON.parse(localStorage.getItem("userData"));

        const newName = prompt("Masukkan nama baru:", userData.name);
        const newEmail = prompt("Masukkan email baru:", userData.email);

        if (newName === null || newEmail === null) {
            return;
        }

        if (newName === "" || newEmail === "") {
            alert("Nama dan email tidak boleh kosong.");
            return;
        }

        userData.name = newName;
        userData.email = newEmail;

        localStorage.setItem("userData", JSON.stringify(userData));

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
        localStorage.removeItem("userData");

        alert("Anda berhasil logout.");
        window.location.href = "login.html";
    });
}