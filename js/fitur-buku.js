/* =========================================
   FITUR BUKU - FAVORIT
   ========================================= */

const FAVORITE_KEY = "lafa-elibrary-favorites";


/* =========================================
   MENGAMBIL ID BUKU FAVORIT
   ========================================= */

function getFavoriteIds() {

    try {

        const data = JSON.parse(
            localStorage.getItem(FAVORITE_KEY) || "[]"
        );

        return Array.isArray(data) ? data : [];

    } catch (error) {

        console.error(
            "Gagal membaca data favorit:",
            error
        );

        return [];

    }
}


/* =========================================
   MENGAMBIL DATA BUKU FAVORIT
   ========================================= */

function getFavoriteBooks() {

    const favoriteIds = getFavoriteIds();

    return favoriteIds
        .map(id => getBook(id))
        .filter(book => book !== undefined);

}


/* =========================================
   MEMBUAT CARD BUKU FAVORIT
   ========================================= */

function createFavoriteCard(book) {

    const card = document.createElement("article");

    card.className = "book-card";

    card.innerHTML = `

        <a
            class="book-cover"
            href="detail-buku.html?id=${encodeURIComponent(book.id)}"
        >

            ${getCoverMarkup(book, false)}

        </a>

        <div class="book-body">

            <span class="book-category">
                ${escapeHtml(book.category)}
            </span>

            <h3 class="book-title">
                ${escapeHtml(book.title)}
            </h3>

            <p class="book-author">
                ${escapeHtml(book.author)}
            </p>

            <p class="book-year">
                Terbit ${book.year}
            </p>

            <div class="card-actions">

                <a
                    class="button button-dark"
                    href="detail-buku.html?id=${encodeURIComponent(book.id)}"
                >
                    Lihat Detail
                </a>

                <button
                    class="button button-accent"
                    type="button"
                    data-favorite-id="${escapeAttribute(book.id)}"
                >
                    ♥ Hapus Favorit
                </button>

            </div>

        </div>
    `;


    const deleteButton =
        card.querySelector("[data-favorite-id]");


    deleteButton.addEventListener(
        "click",
        function () {

            toggleFavorite(book.id);

        }
    );


    return card;
}


/* =========================================
   MENAMPILKAN HALAMAN FAVORIT
   ========================================= */

function renderFavoritePage() {

    const grid =
        document.getElementById("favoriteGrid");

    const empty =
        document.getElementById("favoriteEmpty");

    const count =
        document.getElementById("favoriteCount");


    if (!grid || !empty || !count) {
        return;
    }


    const books = getFavoriteBooks();


    grid.innerHTML = "";


    count.textContent =
        `${books.length} buku favorit`;


    if (books.length === 0) {

        empty.hidden = false;

        return;

    }


    empty.hidden = true;


    books.forEach(function (book) {

        grid.appendChild(
            createFavoriteCard(book)
        );

    });
}


function createHistoryCard(book) {
    const card = document.createElement("article");
    card.className = "book-card history-card";
    card.innerHTML = `
        <a class="book-cover" href="baca-buku.html?id=${encodeURIComponent(book.id)}" aria-label="Lanjutkan membaca ${escapeHtml(book.title)}">
            ${getCoverMarkup(book, false)}
        </a>
        <div class="book-body">
            <span class="book-category">${escapeHtml(book.category)}</span>
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-author">${escapeHtml(book.author)}</p>
            <div class="card-actions">
                <a class="button button-dark" href="baca-buku.html?id=${encodeURIComponent(book.id)}">Lanjutkan Baca</a>
                <a class="button button-outline" href="detail-buku.html?id=${encodeURIComponent(book.id)}">Detail</a>
            </div>
        </div>
    `;
    return card;
}


function renderHistoryPage() {
    const grid = document.getElementById("historyGrid");
    const empty = document.getElementById("historyEmpty");
    const count = document.getElementById("historyCount");
    const clearButton = document.getElementById("clearHistory");
    if (!grid || !empty || !count) return;

    const books = getHistoryIds().map(id => getBook(id)).filter(Boolean);
    grid.replaceChildren();
    count.textContent = `${books.length} buku terakhir dibuka`;
    empty.hidden = books.length > 0;
    if (clearButton) clearButton.hidden = books.length === 0;
    books.forEach(book => grid.appendChild(createHistoryCard(book)));
}


/* =========================================
   UPDATE SAAT FAVORIT BERUBAH
   ========================================= */

document.addEventListener(
    "favorites-changed",
    function () {

        if (
            document.body.dataset.page ===
            "favorite"
        ) {

            renderFavoritePage();

        }

    }
);


/* =========================================
   JALANKAN HALAMAN FAVORIT
   ========================================= */

if (
    document.body.dataset.page ===
    "favorite"
) {

    renderFavoritePage();

}


const clearHistoryButton = document.getElementById("clearHistory");
if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", clearReadHistory);
}

if (document.body.dataset.page === "history") {
    renderHistoryPage();
    document.addEventListener("history-changed", renderHistoryPage);
}
