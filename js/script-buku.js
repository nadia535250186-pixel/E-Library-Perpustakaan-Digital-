const BOOKS = [
    {
        id: "mikrobiologi-kedokteran-jawetz",
        title: "Mikrobiologi Kedokteran Jawetz, Melnick, & Adelberg Edisi 23",
        author: "Geo F. Brooks dkk.",
        publisher: "McGraw-Hill / Lange",
        year: 2007,
        pages: "832 halaman",
        language: "English",
        category: "Kedokteran",
        format: "PDF",
        theme: "Mikrobiologi Kedokteran",
        isbn: "978-0-07-149608-0",
        cover: "assets/images/covers/Mikrobiologi-Kedokteran.webp",
        pdf: "assets/pdfs/Bidang Ilmu Kedokteran/393954562-Mikrobiologi-Kedokteran-Jawetz.pdf",
        source: "McGraw-Hill / Lange",
        description: "Buku rujukan mikrobiologi kedokteran yang membahas dasar-dasar mikrobiologi, imunologi, bakteriologi, mikologi, parasitologi, serta mikrobiologi diagnostik dan korelasi klinis."
    },
    {
        id: "biokimia-harper-edisi-27",
        title: "Biokimia Harper (Harper's Illustrated Biochemistry) 27th Ed.",
        author: "Robert K. Murray dkk.",
        publisher: "McGraw-Hill",
        year: 2006,
        pages: "688 halaman",
        language: "English",
        category: "Kedokteran",
        format: "PDF",
        theme: "Biokimia",
        isbn: "978-0-07-144090-4",
        cover: "assets/images/covers/Biokimia-Harper-Ed-27.webp",
        pdf: "assets/pdfs/Bidang Ilmu Kedokteran/BD-Biokimia-Harper-Ed-27-pdf.pdf",
        source: "McGraw-Hill",
        description: "Membahas struktur dan fungsi protein serta enzim, bioenergetika dan metabolisme karbohidrat maupun lipid, metabolisme protein dan asam amino, makromolekul pembawa informasi, komunikasi sel, serta berbagai topik khusus biokimia."
    },
    {
        id: "pengantar-mikrobiologi",
        title: "Pengantar Mikrobiologi",
        author: "Najmah",
        publisher: "Universitas Imelda Medan",
        year: 2024,
        pages: "",
        language: "Indonesia",
        category: "Kedokteran",
        format: "PDF",
        theme: "Mikrobiologi",
        cover: "assets/images/covers/Pengantar-Mikrobiologi-v.jpg",
        pdf: "assets/pdfs/Bidang Ilmu Kedokteran/740966742-24-01-39-eBook-Pengantar-Mikrobiologi-v.pdf",
        source: "Universitas Imelda Medan",
        description: "Buku pengantar yang membahas klasifikasi dan fisiologi mikroba, sterilisasi, teknik isolasi bakteri, pertumbuhan mikroba, teknik laboratorium dan mikroskopi, infeksi virus, imunologi, flora normal, kualitas air, serta daya antibakteri antiseptik."
    },
    
    {
        id: "contemporary-dental-pharmacology",
        title: "Contemporary Dental Pharmacology: Evidence-Based Considerations Second Edition",
        author: "Arthur H. Jeske (editor)",
        publisher: "Springer",
        year: 2024,
        pages: "170 halaman",
        language: "English",
        category: "Kedokteran",
        format: "PDF",
        theme: "Farmakologi Kedokteran Gigi",
        isbn: "978-3-031-53954-1",
        cover: "assets/images/covers/Arthur H. Jeske (editor) - Contemporary Dental Pharmacology_ Evidence-Based Considerations-Springer (2024).png",
        pdf: "assets/pdfs/Bidang Ilmu Kedokteran/Arthur H. Jeske (editor) - Contemporary Dental Pharmacology_ Evidence-Based Considerations-Springer (2024).pdf",
        source: "Springer Nature",
        sourceLink: "https://link.springer.com/book/10.1007/978-3-031-53954-1",
        doi: "10.1007/978-3-031-53954-1",

    description:
        "Panduan farmakologi kedokteran gigi berbasis bukti yang membahas anestetik lokal, analgesik, antibiotik, sedatif, obat sistemik yang relevan dalam kedokteran gigi, penanganan keadaan darurat, dan rekomendasi klinis berbasis bukti."
   },

    {
        id: "psikologi-lintas-budaya",
        title: "Psikologi Lintas Budaya: Fenomena Perilaku Masyarakat dalam Konteks Lokalitas",
        author: "Akhmad Mukhlis & Sadid Al Muqim (editor)",
        publisher: "UIN-MALIKI Press",
        year: 2013,
        pages: "",
        language: "Indonesia",
        category: "Psikologi",
        format: "PDF",
        theme: "Psikologi Lintas Budaya",
        isbn: "978-602-958-476-9",
        cover: "assets/images/covers/Psikologi Lintas Budaya.png",
        pdf: "assets/pdfs/Psikologi/Psikologi Lintas Budaya.pdf",
        source: "UIN-MALIKI Press",
        description: "Kumpulan kajian psikologi lintas budaya yang melihat perilaku manusia dalam konteks lokalitas, termasuk kesenian, tradisi masyarakat, permainan tradisional, identitas diri, adat, ritual, dan kehidupan komunitas di berbagai daerah Indonesia."
    },
    {
        id: "psikologi-belajar",
        title: "Psikologi Belajar",
        author: "Syarifah Nurjan",
        publisher: "",
        year: 2015,
        pages: "",
        language: "Indonesia",
        category: "Psikologi",
        format: "PDF",
        theme: "Psikologi Pendidikan",
        cover: "assets/images/covers/Buku Psikologi Belajar.png",
        pdf: "assets/pdfs/Psikologi/Buku Psikologi Belajar.pdf",
        source: "Koleksi e-Book Universitas Imelda Medan",
        description: "Membahas hakikat psikologi belajar, perilaku belajar, karakteristik belajar, berbagai teori belajar seperti behavioristik, kognitif, dan humanistik, motivasi belajar, kesulitan belajar, serta diagnosis dan teknik penanganannya."
    },
    {
        id: "ternyata-aku-masih-perawan",
        title: "Ternyata Aku Masih Perawan",
        author: "Dono Baswardono",
        publisher: "",
        year: 2009,
        pages: "",
        language: "Indonesia",
        category: "Psikologi",
        format: "PDF",
        theme: "Seksualitas & Psikologi",
        cover: "assets/images/covers/Ternyata-aku-masih-perawan.png",
        pdf: "assets/pdfs/Psikologi/Ternyata-aku-masih-perawan.pdf",
        source: "Koleksi e-Book",
        description: "Buku populer yang membahas pengetahuan tentang keperawanan dan seksualitas melalui topik seperti mitos dan tanda-tanda keperawanan, malam pertama, persiapan, serta efek dan pemahaman seksualitas."
    },
    {
        id: "psikologi-kaum-muda-pengguna-narkoba",
        title: "Psikologi Kaum Muda Pengguna Narkoba",
        author: "Reza Indragiri Amriel",
        publisher: "Salemba Humanika",
        year: 2008,
        pages: "100 halaman",
        language: "Indonesia",
        category: "Psikologi",
        format: "PDF",
        theme: "Psikologi Remaja & Narkoba",
        isbn: "978-979-3027-51-7",
        cover: "assets/images/covers/Psikologi-kaum-muda-pengguna-narkoba.png",
        pdf: "assets/pdfs/Psikologi/Psikologi-kaum-muda-pengguna-narkoba.pdf",
        source: "Salemba Humanika",
        description: "Membahas pengguna narkoba ilegal, tugas perkembangan pemuda, faktor sosial dan psikologis penggunaan narkoba, dampak penyalahgunaan, serta proses pemulihan dari ketergantungan."
    },
    {
        id: "lifespan-development",
        title: "Lifespan Development: A Psychological Perspective Second Edition",
        author: "Martha Lally & Suzanne Valentine-French",
        publisher: "Open Textbook Library",
        year: 2017,
        pages: "",
        language: "English",
        category: "Psikologi",
        format: "Open Textbook PDF",
        theme: "Psikologi Perkembangan",
        cover: "assets/images/covers/Development A Psichological Perspective Second Edition.png",
        pdf: "assets/pdfs/Psikologi/Lifespan Development A Psichological Perspective Second Edition.pdf",
        source: "Open Textbook Library / OER Universitas Airlangga",
        sourceLink: "https://oer.unair.ac.id/items/show/460",
        license: "CC BY-NC-SA 3.0",
        description: "Buku teks psikologi perkembangan yang membahas perubahan dan kesinambungan manusia sepanjang kehidupan, mulai dari proses fisik dan psikofisiologis hingga kognisi, bahasa, perkembangan psikososial, keluarga, teman sebaya, masa dewasa, dan penuaan."
    },

    {
        id: "buku-ajar-keperawatan-gigi-farmakologi",
        title: "Buku Ajar Keperawatan Gigi: Farmakologi",
        author: "Nita Noviani",
        publisher: "",
        year: 2018,
        pages: "",
        language: "Indonesia",
        category: "Farmasi",
        format: "PDF",
        theme: "Farmakologi Kedokteran Gigi",
        cover: "assets/images/covers/374559326-Farmakologi-bab-1-3.png",
        pdf: "assets/pdfs/Farmasi/374559326-Farmakologi-bab-1-3.pdf",
        source: "Koleksi e-Book",
        description: "Buku ajar yang memperkenalkan konsep dasar farmakologi, penggolongan obat, serta penggunaan dan pemberian obat pada pasien dalam perawatan gigi."
    },
    {
        id: "pedoman-pelayanan-kefarmasian-odha",
        title: "Pedoman Pelayanan Kefarmasian Untuk Orang Dengan HIV/AIDS (ODHA)",
        author: "Departemen Kesehatan Republik Indonesia",
        publisher: "Kementerian Kesehatan RI",
        year: 2006,
        pages: "85 halaman",
        language: "Indonesia",
        category: "Farmasi",
        format: "PDF",
        theme: "Pelayanan Kefarmasian HIV/AIDS",
        cover: "assets/images/covers/56. Pedoman-Pelayanan-Farmasi-Untuk-Odha.png",
        pdf: "assets/pdfs/Farmasi/56. Pedoman-Pelayanan-Farmasi-Untuk-Odha.pdf",
        source: "Kementerian Kesehatan RI",
        sourceLink: "https://farmalkes.kemkes.go.id/unduh/pedoman-pelayanan-kefarmasian-untuk-orang-dengan-hiv-aids-odha/",
        description: "Pedoman pelayanan kefarmasian bagi orang dengan HIV/AIDS yang membahas peran tenaga farmasi, pengelolaan obat antiretroviral, penggunaan obat secara tepat, serta konseling untuk meningkatkan kepatuhan terapi."
    },
    {
        id: "rempah-herba-kebun-pekarangan",
        title: "Rempah & Herba Kebun-Pekarangan Rumah Masyarakat: Keragaman, Sumber Fitofarmaka dan Wisata Kesehatan-Kebugaran",
        author: "Luchman Hakim",
        publisher: "Selaras Media",
        year: 2015,
        pages: "189 halaman",
        language: "Indonesia",
        category: "Farmasi",
        format: "PDF",
        theme: "Fitofarmaka & Kesehatan",
        isbn: "978-602-73737-6-1",
        cover: "assets/images/covers/33. REMPAH DAN HERBAL.png",
        pdf: "assets/pdfs/Farmasi/33. REMPAH DAN HERBAL.pdf",
        source: "Selaras Media / Bintangpusnas Edu",
        sourceLink: "https://bintangpusnas.perpusnas.go.id/konten/BK53545/rempah-dan-herba-kebun-pekarangan-rumah-masyarakat",
        description: "Membahas keragaman rempah dan herba yang dapat dibudidayakan di kebun atau pekarangan, potensinya sebagai sumber fitofarmaka, serta kaitannya dengan kesehatan dan kebugaran masyarakat."
    },
    {
        id: "kimia-organik-fenny-wolawan",
        title: "Kimia Organik (Tata Nama, Struktur dan Fungsi)",
        author: "Fenny R. Wolawan, Rahmawaty Hadju & Meity R. Imbar",
        publisher: "CV. Patra Media Grafindo",
        year: 2022,
        pages: "78 halaman",
        language: "Indonesia",
        category: "Farmasi",
        format: "PDF",
        theme: "Kimia Organik",
        isbn: "978-623-5481-84-5",
        cover: "assets/images/covers/4. KIMIA ORGANIK.png",
        pdf: "assets/pdfs/Farmasi/4. KIMIA ORGANIK.pdf",
        source: "CV. Patra Media Grafindo",
        sourceLink: "https://repo.unsrat.ac.id/5047/1/Buku%20Kimia%20Organik%20Fenny.pdf",
        description: "Buku pengantar kimia organik yang membahas tata nama, struktur, sifat, dan fungsi senyawa organik sebagai dasar untuk memahami berbagai materi kimia di bidang kesehatan."
    },
    {
        id: "pedoman-spmi",
        title: "Pedoman Sistem Penjaminan Mutu Internal",
        author: "RISTEKDIKTI",
        publisher: "RISTEKDIKTI",
        year: 2018,
        pages: "",
        language: "Indonesia",
        category: "Farmasi",
        format: "PDF",
        theme: "Penjaminan Mutu Pendidikan",
        cover: "assets/images/covers/Buku Pedoman SPMI 2018.png",
        pdf: "assets/pdfs/Farmasi/Buku Pedoman SPMI 2018.pdf",
        source: "RISTEKDIKTI",
        description: "Pedoman mengenai penerapan Sistem Penjaminan Mutu Internal, termasuk prinsip, mekanisme, siklus, pelaksanaan, evaluasi, pengendalian, dan peningkatan mutu internal pada perguruan tinggi."
    },

    {
        id: "the-fate-of-the-tearling",
        title: "The Fate of the Tearling",
        author: "Erika Johansen",
        publisher: "Fantasi",
        year: 2017,
        pages: "556 halaman",
        language: "Indonesia",
        category: "Novel",
        format: "PDF",
        theme: "Fantasy",
        isbn: "978-602-6699-07-7",
        cover: "assets/images/covers/the-fate-of-the-tearling-erika-johansen.webp",
        pdf: "assets/pdfs/Novel/The Fate Of The Tearling by Erika Johansen.pdf",
        source: "Perpustakaan Jakarta",
        description: "Kelsea berada dalam penjara dan Tearling masih terancam oleh Gereja Arvath serta iblis gelap yang bebas dari Pegunungan Fairwitch. Sambil melihat visi masa lalu, Kelsea berusaha memahami kesalahan yang telah terjadi dan mencari jalan untuk menyelamatkan Tearling."
    },
    {
        id: "descision",
        title: "Des(c)ision",
        author: "Almira Raharjani",
        publisher: "Gramedia Pustaka Utama",
        year: 2012,
        pages: "224 halaman",
        language: "Indonesia",
        category: "Novel",
        format: "PDF",
        theme: "Romance",
        isbn: "978-979-22-8632-8",
        cover: "assets/images/covers/Des(c)ision.jpg",
        pdf: null,
        source: "Gramedia Pustaka Utama",
        sourceLink: "https://www.goodreads.com/book/show/15733557-des-c-ision",
        description: "Desi memutuskan hubungan dengan De karena merasa hubungan mereka hambar. Setelah berpisah, ia justru dihantui rasa kehilangan, masalah persahabatan, urusan kuliah, dan perasaan yang belum selesai."
    },
    {
        id: "death-note-l-change-the-world",
        title: "Death Note: L Change the World",
        author: "M",
        publisher: "VIZ Media",
        year: 2009,
        pages: "174 halaman",
        language: "English",
        category: "Novel",
        format: "PDF",
        theme: "Crime & Thriller",
        isbn: "978-142-153-225-7",
        cover: "assets/images/covers/Death Note   L Change the World.png",
        pdf: "assets/pdfs/Novel/Death Note - L Change the World [Scans].pdf",
        source: "VIZ Media / Simon & Schuster",
        sourceLink: "https://www.simonandschuster.com/books/Death-Note-L-Change-the-WorLd/M/Death-Note-L-Change-the-WorLd-%28Novel%29/9781421532257",
        description: "Dalam kontinuitas alternatif Death Note, L hanya memiliki waktu terbatas untuk menghentikan kelompok teroris yang membawa ancaman virus mematikan. Ia harus menggunakan kemampuan detektifnya untuk menyelamatkan dunia sambil menghadapi batas waktu yang semakin sempit."
    },
    {
        id: "planet-manga-katalog-2005",
        title: "Planet Manga Januar/Juni 2005 Vorschau Mangakatalog",
        author: "Planet Manga",
        publisher: "Planet Manga / Panini Comics",
        year: 2005,
        pages: "",
        language: "German",
        category: "Komik & Manga",
        format: "Katalog Manga",
        theme: "Manga Catalog",
        cover: "assets/images/covers/mangakatalog2005_0000.jpg",
        pdf: "assets/pdfs/Comic/mangakatalog2005.pdf",
        source: "Internet Archive / Panini Comics",
        description: "Katalog pratinjau Planet Manga yang memuat daftar dan materi promosi manga yang diterbitkan atau dipasarkan pada periode Januari–Juni 2005."
    },
    {
        id: "ayah-andrea-hirata",
        title: "Ayah",
        author: "Andrea Hirata",
        publisher: "Bentang Pustaka",
        year: 2015,
        pages: "432 halaman",
        language: "Indonesia",
        category: "Novel",
        format: "PDF",
        theme: "Fiksi Indonesia",
        isbn: "978-602-291-102-9",
        cover: "assets/images/covers/Ayah - Andrea Hirata.png",
        pdf: "assets/pdfs/Novel/Ayah - Andrea Hirata.pdf",
        source: "Bentang Pustaka",
        description: "Novel Andrea Hirata yang mengangkat tema keluarga, kasih sayang, perjuangan, dan sosok ayah dalam kehidupan. Ceritanya menyoroti hubungan antarmanusia dan nilai pengorbanan yang tumbuh dari kehidupan sehari-hari."
    },
    {
        id: "senja-hujan-cerita",
        title: "Senja, Hujan, & Cerita yang Telah Usai",
        author: "Boy Candra",
        publisher: "Media Kita / Grasindo",
        year: 2015,
        pages: "240 halaman",
        language: "Indonesia",
        category: "Novel",
        format: "PDF",
        theme: "Romance & Refleksi",
        isbn: "979-794-499-9",
        cover: "assets/images/covers/Boy Candra - Senja_ Hujan_ Cerita yang Telah Usai.png",
        pdf: "assets/pdfs/Novel/Boy Candra - Senja_ Hujan_ Cerita yang Telah Usai .pdf",
        source: "Media Kita / Grasindo",
        description: "Kumpulan tulisan reflektif tentang perasaan, kenangan, jatuh cinta, kehilangan, dan belajar merelakan. Senja dan hujan digunakan sebagai latar emosional untuk menggambarkan perjalanan hati setelah sebuah hubungan berakhir."
    },
    {
        id: "yang-fana-adalah-waktu",
        title: "Yang Fana Adalah Waktu",
        author: "Sapardi Djoko Damono",
        publisher: "Gramedia Pustaka Utama",
        year: 2018,
        pages: "152 halaman",
        language: "Indonesia",
        category: "Novel",
        format: "PDF",
        theme: "Sastra Indonesia",
        isbn: "978-602-03-8305-7",
        cover: "assets/images/covers/Yang fana adalah waktu.png",
        pdf: "assets/pdfs/Novel/Yang fana adalah waktu.pdf",
        source: "Gramedia Pustaka Utama / Perpustakaan Jakarta",
        sourceLink: "https://perpustakaan.jakarta.go.id/book/detail?cn=INLIS000000000780073",
        description: "Novel ketiga dari Trilogi Hujan Bulan Juni yang mengikuti akhir perjalanan Pingkan dan Sarwono. Kisahnya kembali mempertanyakan hubungan cinta, waktu, dan takdir yang dapat mempertemukan sekaligus memisahkan manusia."
    },
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
        category: "Komik & Manga",
        format: "Buku Komik",
        theme: "Cerita Rakyat - Jakarta Timur",
        isbn: "978-623-307-853-5",
        cover: "assets/images/covers/Astawana Penjaga Condet.png",
        pdf: "assets/pdfs/Comic/Astawana Penjaga Condet.pdf",
        source: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
        sourceLink: "https://budi.kemendikdasmen.go.id/storage/content/jV1DDOJVtdIklMLzu5eUmsoL9iqQnMA1nSP0YpnF.pdf",
        description: "Komik cerita rakyat tentang Astawana, pangeran sekaligus menantu Pangeran Condet yang dikenal jujur dan pemberani. Cerita menggambarkan perjuangannya menghadapi kerja paksa dan perampasan tanah oleh penjajah."
    },
    {
        id: "keys-to-drawing",
        title: "Keys to Drawing",
        author: "Bert Dodson",
        publisher: "North Light Books",
        year: 1990,
        pages: "224 halaman",
        language: "English",
        category: "Seni & Pendidikan",
        format: "Buku Panduan Menggambar",
        theme: "Art / Techniques / Drawing",
        isbn: "978-0-89134-337-0",
        cover: "assets/images/covers/Keys_to_Drawing.png",
        pdf: "assets/pdfs/Novel/Keys_to_Drawing.pdf",
        source: "North Light Books / Penguin Random House",
        sourceLink: "https://www.penguinrandomhouse.com/books/627906/keys-to-drawing-by-bert-dodson/",
        description: "Panduan menggambar Bert Dodson yang menyusun 55 kunci latihan untuk melatih pengamatan, kontrol garis, cahaya, kedalaman, tekstur, dan permainan kreatif agar pembaca lebih percaya diri saat menggambar."
    },
    {
        id: "the-apothecary-diaries-01",
        title: "The Apothecary Diaries 01",
        author: "Natsu Hyuuga & Nekokurage",
        compiledBy: "Itsuki Nanao",
        characterDesign: "Touco Shino",
        publisher: "Square Enix Manga",
        year: 2020,
        pages: "176 halaman",
        language: "English",
        category: "Komik & Manga",
        format: "Manga",
        theme: "Crime & Mystery / Historical Fiction",
        isbn: "978-1-64609-070-9",
        cover: "assets/images/covers/The-Apothecary-Diaries.jpg",
        pdf: "assets/pdfs/Comic/The Apothecary Diaries v01 (2020) (Digital) (Shizu).pdf",
        source: "Square Enix Manga",
        sourceLink: "https://books.google.com/books/about/The_Apothecary_Diaries_01_Manga.html?id=7rGQEAAAQBAJ",
        description: "Maomao, gadis yang terlatih dalam pengobatan herbal, dipaksa bekerja sebagai pelayan di istana kekaisaran. Setelah membantu memecahkan misteri penyakit para pewaris takhta, ia dipromosikan dan terlibat dalam berbagai kasus serta intrik istana."
    }
];

const STORAGE_KEY = "lafa-elibrary-favorites";
const HISTORY_KEY = "lafa-elibrary-reading-history";

function readStoredIds(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(value) ? value.filter(id => typeof id === "string") : [];
    } catch {
        return [];
    }
}

function writeStoredIds(key, ids) {
    try {
        localStorage.setItem(key, JSON.stringify(ids));
        return true;
    } catch {
        showToast("Browser tidak dapat menyimpan perubahan. Periksa pengaturan penyimpanan.");
        return false;
    }
}

let favorites = [...new Set(readStoredIds(STORAGE_KEY))];

function getBook(id) {
    return BOOKS.find(book => book.id === id);
}

function isFavorite(id) {
    return favorites.includes(id);
}

function saveFavorites() {
    writeStoredIds(STORAGE_KEY, favorites);
}

function getHistoryIds() {
    return [...new Set(readStoredIds(HISTORY_KEY))].filter(id => getBook(id));
}

function recordRead(id) {
    if (!getBook(id)) return;
    const historyIds = getHistoryIds().filter(savedId => savedId !== id);
    historyIds.unshift(id);
    writeStoredIds(HISTORY_KEY, historyIds.slice(0, 50));
    document.dispatchEvent(new CustomEvent("history-changed"));
}

function clearReadHistory() {
    writeStoredIds(HISTORY_KEY, []);
    document.dispatchEvent(new CustomEvent("history-changed"));
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

function getCoverMarkup(book, overlay = true) {
    const fallback = escapeHtml(book.title.slice(0, 2).toUpperCase());
    const fallbackMarkup = `<div class="cover-fallback" aria-hidden="true" hidden><strong>${fallback}</strong><span>Cover belum tersedia</span></div>`;
    const image = book.cover
        ? `<img src="${escapeAttribute(book.cover)}" alt="Cover ${escapeHtml(book.title)}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false; this.closest('.book-cover, .detail-cover')?.classList.add('cover-missing');">${fallbackMarkup}`
        : `<div class="cover-fallback" aria-hidden="true"><strong>${fallback}</strong><span>Cover belum tersedia</span></div>`;

    const synopsis = overlay
        ? `<div class="cover-synopsis"><span>Sinopsis</span><p>${escapeHtml(book.description)}</p><small>Klik untuk melihat detail</small></div>`
        : "";

    return `${image}${synopsis}`;
}

function createBookCard(book) {
    const favorite = isFavorite(book.id);
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
        <a class="book-cover" href="detail-buku.html?id=${encodeURIComponent(book.id)}" aria-label="Lihat detail ${escapeHtml(book.title)}">
            ${getCoverMarkup(book, true)}
        </a>
        <div class="book-body">
            <span class="book-category">${escapeHtml(book.category)}</span>
            <h3 class="book-title">${escapeHtml(book.title)}</h3>
            <p class="book-author">${escapeHtml(book.author)}</p>
            ${book.year ? `<p class="book-year">Terbit ${escapeHtml(String(book.year))}</p>` : ""}
            <div class="card-actions">
                <a class="button button-dark" href="detail-buku.html?id=${encodeURIComponent(book.id)}">Lihat Detail</a>
                <button class="button button-accent favorite-card-button" data-book-id="${escapeAttribute(book.id)}" type="button">${favorite ? "♥ Tersimpan" : "♡ Simpan"}</button>
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
    const searchForm = document.getElementById("searchForm");
    if (!grid || !empty || !count || !chips || !searchInput || !searchForm) return;

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
            const searchText = [book.title, book.author, book.category, book.publisher, book.theme, book.description].join(" ").toLowerCase();
            const searchMatch = searchText.includes(keyword);
            return categoryMatch && searchMatch;
        });

        count.textContent = `${filtered.length} buku ditemukan`;
        empty.hidden = filtered.length !== 0;
        filtered.forEach(book => grid.appendChild(createBookCard(book)));
    };

    searchForm.addEventListener("submit", event => {
        event.preventDefault();
        render();
        document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
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
        description.textContent = selected === "Semua" ? `Menampilkan seluruh ${BOOKS.length} koleksi yang tersedia.` : `Menampilkan ${filtered.length} koleksi dari bidang ${selected}.`;
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

function createReadActions(book, saved) {
    const buttons = [];

    if (book.pdf) {
        buttons.push(`<a class="button button-dark" href="baca-buku.html?id=${encodeURIComponent(book.id)}">📖 Baca Buku</a>`);
        buttons.push(`<a class="button button-accent" href="${escapeAttribute(book.pdf)}" download>⬇ Unduh PDF</a>`);
    } else if (book.sourceLink) {
        buttons.push(`<a class="button button-dark" href="${escapeAttribute(book.sourceLink)}" target="_blank" rel="noopener">🔗 Lihat Sumber</a>`);
    } else {
        buttons.push(`<button class="button button-dark" type="button" disabled title="PDF lokal belum tersedia">📄 PDF Belum Tersedia</button>`);
    }

    buttons.push(`<button class="button button-outline favorite-button${saved ? " saved" : ""}" id="favoriteButton" type="button">${saved ? "♥ Sudah Disimpan" : "♡ Simpan ke Favorit"}</button>`);
    return buttons.join("");
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
                <p>Silakan kembali ke katalog untuk memilih buku yang tersedia.</p>
                <a class="button button-dark" href="katalog-buku.html">Kembali ke Katalog</a>
            </div>
        `;
        return;
    }

    document.title = `${book.title} | LAFENADHER E-Library`;
    const saved = isFavorite(book.id);
    const extraMeta = [
        ["Bidang", book.category],
        ["Penerbit", book.publisher || "Tidak dicantumkan"],
        ["Tahun Terbit", book.year || "Tidak dicantumkan"],
        ["Halaman", book.pages || "Tidak dicantumkan"],
        ["Bahasa", book.language || "Tidak dicantumkan"],
        ["Format", book.format || "Tidak dicantumkan"],
        ["Tema", book.theme || "Tidak dicantumkan"]
    ];

    wrapper.innerHTML = `
        <a class="back-link" href="katalog-buku.html">← Kembali ke Katalog</a>
        <div class="detail-layout">
            <div class="detail-cover ${book.cover ? "" : "detail-cover-missing"}">
                ${getCoverMarkup(book, false)}
            </div>
            <div>
                <span class="detail-badge">${escapeHtml(book.category)}</span>
                <h1 class="detail-title">${escapeHtml(book.title)}</h1>
                <p class="detail-author">Oleh <strong>${escapeHtml(book.author)}</strong>${book.illustrator ? ` · Ilustrator ${escapeHtml(book.illustrator)}` : ""}${book.editor ? ` · Editor ${escapeHtml(book.editor)}` : ""}</p>

                <div class="detail-meta">
                    ${extraMeta.map(([label, value]) => `<div class="meta-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`).join("")}
                </div>

                <div class="detail-description">
                    <h2>Sinopsis</h2>
                    <p>${escapeHtml(book.description)}</p>
                    <p class="detail-source">Sumber bibliografi: ${escapeHtml(book.source || "Tidak dicantumkan")}${book.doi ? ` · DOI ${escapeHtml(book.doi)}` : ""}${book.isbn ? ` · ISBN ${escapeHtml(book.isbn)}` : ""}${book.license ? ` · Lisensi ${escapeHtml(book.license)}` : ""}</p>
                </div>

                <div class="detail-actions">
                    ${createReadActions(book, saved)}
                </div>
            </div>
        </div>
    `;

    const favoriteButton = document.getElementById("favoriteButton");
    favoriteButton?.addEventListener("click", () => toggleFavorite(book.id));
    document.addEventListener("favorites-changed", () => {
        const isSaved = isFavorite(book.id);
        favoriteButton?.classList.toggle("saved", isSaved);
        if (favoriteButton) favoriteButton.textContent = isSaved ? "♥ Sudah Disimpan" : "♡ Simpan ke Favorit";
    });
}

function renderReaderPage() {
    const wrapper = document.getElementById("readerContent");
    if (!wrapper) return;

    const availableBooks = BOOKS.filter(book => book.pdf);
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id") || "biokimia-harper-edisi-27";
    const book = getBook(requestedId);
    const readerCount = document.getElementById("readerCount");

    if (readerCount) readerCount.textContent = String(availableBooks.length).padStart(2, "0");

    if (!book) {
        document.title = "Buku Tidak Ditemukan | LAFENADHER E-Library";
        wrapper.innerHTML = `
            <div class="reader-empty error-message">
                <span class="reader-empty-mark" aria-hidden="true">L</span>
                <h2>Buku tidak ditemukan</h2>
                <p>Pilih buku dari rak atau kembali ke katalog untuk menemukan bacaan.</p>
                <a class="button button-dark" href="katalog-buku.html">Kembali ke Katalog</a>
            </div>
        `;
        return;
    }

    document.title = `Baca ${book.title} | LAFENADHER E-Library`;
    if (book.pdf) recordRead(book.id);

    const encodeAssetPath = path => path.split("/").map(part => encodeURIComponent(part)).join("/");
    const pdfUrl = book.pdf ? encodeAssetPath(book.pdf) : "";
    const categories = [...new Set(availableBooks.map(item => item.category))];
    const selectedCategory = params.get("kategori") || "Semua";
    const viewerContent = book.pdf
        ? `
            <div class="pdf-container">
                <iframe src="${escapeAttribute(pdfUrl)}#toolbar=1&navpanes=0&view=FitH" title="Pembaca PDF: ${escapeHtml(book.title)}"></iframe>
            </div>
            <div class="reader-pdf-fallback">
                <span class="reader-pdf-note"><span class="reader-pdf-dot" aria-hidden="true"></span> File PDF lokal siap dibaca</span>
                <a class="reader-open-link" href="${escapeAttribute(pdfUrl)}" target="_blank" rel="noopener noreferrer">Buka di tab baru <span aria-hidden="true">↗</span></a>
            </div>
        `
        : `
            <div class="reader-empty error-message">
                <span class="reader-empty-mark" aria-hidden="true">PDF</span>
                <h2>PDF belum tersedia</h2>
                <p>Buku ini belum memiliki berkas PDF di perpustakaan.</p>
                ${book.sourceLink ? `<a class="button button-dark" href="${escapeAttribute(book.sourceLink)}" target="_blank" rel="noopener noreferrer">Buka sumber buku</a>` : ""}
            </div>
        `;

    wrapper.innerHTML = `
        <div class="reader-workspace">
            <aside class="reader-library" aria-label="Rak buku PDF">
                <div class="reader-library-heading">
                    <div>
                        <span class="reader-kicker">KOLEKSI</span>
                        <h2>Rak bacaan</h2>
                    </div>
                    <span class="reader-library-count">${availableBooks.length} buku</span>
                </div>
                <label class="reader-search">
                    <span class="reader-search-icon" aria-hidden="true">⌕</span>
                    <span class="sr-only">Cari buku</span>
                    <input id="readerSearch" type="search" placeholder="Cari judul atau penulis" autocomplete="off">
                    <kbd>/</kbd>
                </label>
                <label class="reader-category-label" for="readerCategory">Jelajahi kategori</label>
                <select id="readerCategory" class="reader-category-select" aria-label="Filter kategori buku">
                    <option value="Semua">Semua kategori</option>
                    ${categories.map(category => `<option value="${escapeAttribute(category)}"${category === selectedCategory ? " selected" : ""}>${escapeHtml(category)}</option>`).join("")}
                </select>
                <div class="reader-list-caption"><span>SEMUA BUKU</span><span id="readerResultCount">${availableBooks.length}</span></div>
                <div class="reader-library-list" id="readerLibraryList" role="list"></div>
                <a class="reader-library-footer" href="katalog-buku.html"><span aria-hidden="true">＋</span> Temukan buku lain</a>
            </aside>

            <section class="reader-main" aria-label="Pembaca buku">
                <div class="reader-book-heading">
                    <div class="reader-book-heading-copy">
                        <a class="reader-back-link" href="detail-buku.html?id=${encodeURIComponent(book.id)}"><span aria-hidden="true">←</span> Detail buku</a>
                        <div class="reader-title-line">
                            <h1>${escapeHtml(book.title)}</h1>
                            ${book.pdf ? '<span class="reader-format">PDF</span>' : '<span class="reader-format is-unavailable">BELUM ADA PDF</span>'}
                        </div>
                        <p class="reader-meta">${escapeHtml(book.author)} <span aria-hidden="true">·</span> ${escapeHtml(book.category)}${book.year ? ` <span aria-hidden="true">·</span> ${escapeHtml(String(book.year))}` : ""}</p>
                    </div>
                    <div class="reader-buttons">
                        <a class="reader-detail-button" href="detail-buku.html?id=${encodeURIComponent(book.id)}">Info buku</a>
                        ${book.pdf ? `<a class="reader-download-button" href="${escapeAttribute(pdfUrl)}" download><span aria-hidden="true">↓</span> Unduh PDF</a>` : ""}
                    </div>
                </div>
                <section class="reader-book" aria-label="Berkas buku ${escapeHtml(book.title)}">
                    ${viewerContent}
                </section>
                <p class="reader-privacy-note"><span aria-hidden="true">✦</span> Ruang baca pribadi · Koleksi tersimpan di perpustakaan ini</p>
            </section>
        </div>
    `;

    const list = document.getElementById("readerLibraryList");
    const search = document.getElementById("readerSearch");
    const categorySelect = document.getElementById("readerCategory");
    const resultCount = document.getElementById("readerResultCount");

    const renderLibraryList = () => {
        const keyword = search.value.trim().toLowerCase();
        const category = categorySelect.value;
        const filtered = availableBooks.filter(item => {
            const text = `${item.title} ${item.author} ${item.category}`.toLowerCase();
            return text.includes(keyword) && (category === "Semua" || item.category === category);
        });

        resultCount.textContent = String(filtered.length).padStart(2, "0");
        list.innerHTML = filtered.length
            ? filtered.map(item => `
                <button class="reader-book-option${item.id === book.id ? " is-active" : ""}" type="button" role="listitem" data-book-id="${escapeAttribute(item.id)}" aria-current="${item.id === book.id ? "true" : "false"}">
                    <span class="reader-thumb">${item.cover ? `<img src="${escapeAttribute(encodeAssetPath(item.cover))}" alt="" loading="lazy">` : `<span>${escapeHtml(item.title.slice(0, 2).toUpperCase())}</span>`}</span>
                    <span class="reader-option-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.category)} <span aria-hidden="true">·</span> PDF</small></span>
                    ${item.id === book.id ? '<span class="reader-option-indicator" aria-hidden="true">●</span>' : ""}
                </button>
            `).join("")
            : `<div class="reader-list-empty"><span aria-hidden="true">⌕</span><strong>Buku tidak ditemukan</strong><small>Coba kata kunci atau kategori lain.</small></div>`;

        list.querySelectorAll("[data-book-id]").forEach(button => {
            button.addEventListener("click", () => {
                const nextId = button.dataset.bookId;
                if (!nextId || nextId === book.id) return;
                history.pushState({}, "", `baca-buku.html?id=${encodeURIComponent(nextId)}${categorySelect.value !== "Semua" ? `&kategori=${encodeURIComponent(categorySelect.value)}` : ""}`);
                renderReaderPage();
            });
        });
    };

    search.addEventListener("input", renderLibraryList);
    categorySelect.addEventListener("change", renderLibraryList);
    renderLibraryList();
}

let readerPopstateBound = false;
if (!readerPopstateBound && document.body.dataset.page === "reader") {
    window.addEventListener("popstate", renderReaderPage);
    readerPopstateBound = true;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    })[char]);
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

const page = document.body.dataset.page;
if (page === "catalog") renderCatalog();
if (page === "category") renderCategoriesPage();
if (page === "detail") renderDetailPage();
if (page === "reader") renderReaderPage();
