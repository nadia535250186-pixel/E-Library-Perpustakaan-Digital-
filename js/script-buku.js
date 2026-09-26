const BOOKS = [
    {
        id: "astawana-penjaga-condet",
        title: "Astawana Penjaga Condet",
        author: "Mutiara",
        illustrator: "Alfi Zackly",
        editor: "Setyo Untoro",
        publisher: "Badan Pengembangan dan Pembinaan Bahasa",
        year: 2021,
        pages: "24 halaman isi",
        language: "Indonesia",
        category: "Cerita Rakyat",
        format: "Buku Komik",
        theme: "Cerita Rakyat - Jakarta Timur",
        isbn: "978-623-307-853-5",
        cover: "assets/images/covers/Astawana Penjaga Condet.png",
        pdf: "assets/pdfs/Astawana Penjaga Condet.pdf",
        source: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
        description: "Komik ini memperkenalkan Astawana, seorang pangeran sekaligus menantu Pangeran Condet yang dikenal jujur dan pemberani. Cerita menggambarkan perjuangannya menghadapi kerja paksa dan perampasan tanah oleh penjajah. Buku ini merupakan adaptasi dari Legenda Condet karya Azhar (2016)."
    },
    {
        id: "keys-to-drawing",
        title: "Keys to Drawing",
        author: "Bert Dodson",
        publisher: "North Light Books",
        year: 1990,
        pages: "224 halaman",
        language: "English",
        category: "Pendidikan",
        format: "Buku Panduan Menggambar",
        theme: "Art / Techniques / Drawing",
        isbn: "978-0-89134-337-0",
        cover: "assets/images/covers/Keys_to_Drawing.png",
        pdf: "assets/pdfs/Keys_to_Drawing.pdf",
        source: "Penguin Random House / North Light Books",
        description: "Bert Dodson menyajikan sistem belajar menggambar melalui 55 'keys' untuk membantu pembaca mengamati, memahami, dan menggambarkan objek dengan lebih percaya diri. Materinya mencakup latihan, kontrol garis, cahaya, kedalaman, tekstur, hingga permainan kreatif."
    },
    {
        id: "the-apothecary-diaries-01",
        title: "The Apothecary Diaries 01",
        author: "Natsu Hyuuga & Nekokurage",
        compiledBy: "Itsuki Nanao",
        characterDesign: "Touko Shino",
        publisher: "Square Enix Manga",
        year: 2020,
        pages: "176 halaman",
        language: "English",
        category: "Komik & Manga",
        format: "Manga",
        theme: "Crime & Mystery / Historical Fiction",
        isbn: "978-164-609-070-9",
        cover: "assets/images/covers/The-Apothecary-Diaries.jpg",
        pdf: "assets/pdfs/The Apothecary Diaries v01 (2020) (Digital) (Shizu).pdf",
        source: "Penguin Random House / Square Enix Manga",
        description: "Maomao, seorang gadis yang terlatih dalam pengobatan herbal, dipaksa bekerja sebagai pelayan di istana kekaisaran. Setelah memecahkan misteri penyakit para pewaris takhta, ia menarik perhatian Jinshi dan mulai terlibat dalam berbagai misteri serta intrik di lingkungan istana."
    },
    {
        id: "computational-antitrust",
        title: "Computational Antitrust",
        author: "Wei Liu",
        publisher: "Springer Singapore",
        year: 2026,
        pages: "151 halaman isi",
        language: "English",
        category: "Teknologi",
        format: "Buku Open Access",
        theme: "AI, Machine Learning & Digital Economy",
        isbn: "978-981-95-5037-1",
        cover: "assets/images/covers/computational-antitrust.webp",
        pdf: "assets/pdfs/Computational-Antitrust.pdf",
        source: "Springer Nature",
        doi: "10.1007/978-981-95-5037-1",
        description: "Buku ini membahas penerapan komputasi, machine learning, dan large language models dalam pengawasan persaingan usaha pada ekonomi digital. Salah satu fokusnya adalah pendekatan berbasis data untuk mendeteksi pola diskriminasi harga dan perilaku monopoli pada platform digital."
    }
];

const STORAGE_KEY = "lafa-elibrary-favorites";
let favorites = [];
try {
    const storedFavorites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    favorites = Array.isArray(storedFavorites) ? storedFavorites : [];
} catch {
    favorites = [];
}

function getBook(id) {
    return BOOKS.find(book => book.id === id);
}

function isFavorite(id) {
    return favorites.includes(id);
}

function saveFavorites() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    const book = getBook(id);
    if (!book) return;

    if (index === -1) {
        favorites.push(id);
        showToast(`"${book.title}" disimpan ke favorit.`);
    } else {
        favorites.splice(index, 1);
        showToast(`"${book.title}" dihapus dari favorit.`);
    }
    saveFavorites();
    document.dispatchEvent(new CustomEvent("favorites-changed"));
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function createBookCard(book) {
    const favorite = isFavorite(book.id);
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
        <a class="book-cover" href="detail-buku.html?id=${encodeURIComponent(book.id)}" aria-label="Lihat detail ${escapeHtml(book.title)}">
            <img src="${book.cover}" alt="Cover ${escapeHtml(book.title)}" loading="lazy">
        </a>
        <div class="book-body">
            <span class="book-category">${escapeHtml(book.category)}</span>
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-author">${escapeHtml(book.author)}</p>
            <p class="book-year">Terbit ${book.year}</p>
            <div class="card-actions">
                <a class="button button-dark" href="detail-buku.html?id=${encodeURIComponent(book.id)}">Lihat Detail</a>
                <button class="button button-accent favorite-card-button" data-book-id="${book.id}" type="button">${favorite ? "♥ Tersimpan" : "♡ Simpan"}</button>
            </div>
        </div>
    `;
    card.querySelector(".favorite-card-button").addEventListener("click", () => toggleFavorite(book.id));
    return card;
}

function getCategories() {
    return [...new Set(BOOKS.map(book => book.category))];
}

function createChip(label, active, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${active ? " active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
}

function renderCatalog() {
    const grid = document.getElementById("bookGrid");
    const empty = document.getElementById("emptyState");
    const count = document.getElementById("resultCount");
    const chips = document.getElementById("catalogCategories");
    const searchInput = document.getElementById("searchInput");
    if (!grid || !empty || !count || !chips || !searchInput) return;

    let selectedCategory = "Semua";
    const render = () => {
        const keyword = searchInput.value.trim().toLowerCase();
        grid.innerHTML = "";
        chips.innerHTML = "";

        chips.appendChild(createChip("Semua", selectedCategory === "Semua", () => {
            selectedCategory = "Semua";
            render();
        }));
        getCategories().forEach(category => {
            chips.appendChild(createChip(category, selectedCategory === category, () => {
                selectedCategory = category;
                render();
            }));
        });

        const filtered = BOOKS.filter(book => {
            const categoryMatch = selectedCategory === "Semua" || book.category === selectedCategory;
            const searchMatch = [book.title, book.author, book.category, book.publisher, book.theme].join(" ").toLowerCase().includes(keyword);
            return categoryMatch && searchMatch;
        });

        count.textContent = `${filtered.length} buku ditemukan`;
        empty.hidden = filtered.length !== 0;
        filtered.forEach(book => grid.appendChild(createBookCard(book)));
    };

    document.getElementById("searchForm").addEventListener("submit", event => {
        event.preventDefault();
        render();
        document.getElementById("katalog").scrollIntoView({ behavior: "smooth" });
    });
    searchInput.addEventListener("input", render);
    render();

    document.addEventListener("favorites-changed", render);
}

function createCategoryItem(label, active, onClick, index) {
    const button = createChip(label, active, onClick);
    button.dataset.index = String(index).padStart(2, "0");
    return button;
}

function renderCategoriesPage() {
    const panel = document.getElementById("categoryPanel");
    const grid = document.getElementById("categoryGrid");
    const empty = document.getElementById("categoryEmpty");
    const title = document.getElementById("categoryTitle");
    const description = document.getElementById("categoryDescription");
    if (!panel || !grid || !empty || !title || !description) return;

    const params = new URLSearchParams(window.location.search);
    let selected = params.get("category") || "Semua";
    if (selected !== "Semua" && !getCategories().includes(selected)) selected = "Semua";

    const render = () => {
        panel.innerHTML = "";
        grid.innerHTML = "";

        panel.appendChild(createCategoryItem("Semua", selected === "Semua", () => setCategory("Semua"), 1));
        getCategories().forEach((category, index) => panel.appendChild(createCategoryItem(category, selected === category, () => setCategory(category), index + 2)));

        const filtered = selected === "Semua" ? BOOKS : BOOKS.filter(book => book.category === selected);
        title.textContent = selected === "Semua" ? "Semua Buku" : selected;
        description.textContent = selected === "Semua" ? "Menampilkan seluruh koleksi yang tersedia." : `Menampilkan ${filtered.length} koleksi dari kategori ${selected}.`;
        empty.hidden = filtered.length !== 0;
        filtered.forEach(book => grid.appendChild(createBookCard(book)));
    };

    function setCategory(category) {
        selected = category;
        const nextUrl = category === "Semua" ? "kategori-buku.html" : `kategori-buku.html?category=${encodeURIComponent(category)}`;
        history.pushState({}, "", nextUrl);
        render();
    }

    window.addEventListener("popstate", () => {
        const current = new URLSearchParams(window.location.search).get("category") || "Semua";
        selected = getCategories().includes(current) ? current : "Semua";
        render();
    });

    render();
    document.addEventListener("favorites-changed", render);
}

function renderDetailPage() {
    const wrapper = document.getElementById("detailContent");
    if (!wrapper) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const book = getBook(id);

    if (!book) {
        document.title = "Buku Tidak Ditemukan | LAFENADHER E-Library";
        wrapper.innerHTML = `
            <div class="not-found">
                <div class="empty-icon">📖</div>
                <h1>Buku tidak ditemukan</h1>
                <p class="section-heading">Silakan kembali ke katalog untuk memilih buku yang tersedia.</p>
                <a class="button button-dark" href="index.html">Kembali ke Katalog</a>
            </div>
        `;
        return;
    }

    document.title = `${book.title} | LAFENADHER E-Library`;
    const saved = isFavorite(book.id);
    const extraMeta = [
        ["Penerbit", book.publisher],
        ["Tahun Terbit", book.year],
        ["Halaman", book.pages],
        ["Bahasa", book.language],
        ["Format", book.format],
        ["Tema", book.theme]
    ];

    wrapper.innerHTML = `
        <a class="back-link" href="index.html">← Kembali ke Katalog</a>
        <div class="detail-layout">
            <div class="detail-cover">
                <img src="${book.cover}" alt="Cover ${escapeHtml(book.title)}">
            </div>
            <div>
                <span class="detail-badge">${escapeHtml(book.category)}</span>
                <h1 class="detail-title">${escapeHtml(book.title)}</h1>
                <p class="detail-author">Oleh <strong>${escapeHtml(book.author)}</strong>${book.illustrator ? ` · Ilustrator ${escapeHtml(book.illustrator)}` : ""}</p>

                <div class="detail-meta">
                    ${extraMeta.map(([label, value]) => `<div class="meta-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("")}
                </div>

                <div class="detail-description">
                    <h2>Sinopsis / Deskripsi</h2>
                    <p>${escapeHtml(book.description)}</p>
                    <p class="detail-source">Sumber bibliografi: ${escapeHtml(book.source)}${book.doi ? ` · DOI ${escapeHtml(book.doi)}` : ""}${book.isbn ? ` · ISBN ${escapeHtml(book.isbn)}` : ""}</p>
                </div>

                <div class="detail-actions">
                    <a class="button button-dark" href="${book.pdf}" target="_blank" rel="noopener">📖 Baca Buku</a>
                    <a class="button button-accent" href="${book.pdf}" download>⬇ Unduh Buku</a>
                    <button class="button button-outline favorite-button${saved ? " saved" : ""}" id="favoriteButton" type="button">${saved ? "♥ Sudah Disimpan" : "♡ Simpan ke Favorit"}</button>
                </div>

            </div>
        </div>
    `;

    const favoriteButton = document.getElementById("favoriteButton");
    favoriteButton.addEventListener("click", () => toggleFavorite(book.id));
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
}

const page = document.body.dataset.page;
if (page === "catalog") renderCatalog();
if (page === "category") renderCategoriesPage();
if (page === "detail") renderDetailPage();