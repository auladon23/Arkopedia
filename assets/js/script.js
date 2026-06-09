// ============================================================
//  DATA
// ============================================================

const materiData = {
    1: {
        title: 'Pengantar Arsitektur Komputer',
        summary: 'Menetapkan landasan: apa itu arsitektur, tujuan, dan ruang lingkup desain sistem komputer.',
        video: '79lZWW66Rvs',
        content: `
            <h1>Pengantar Arsitektur Komputer</h1>
            <p>Arsitektur komputer menghubungkan desain hardware dengan kebutuhan perangkat lunak. Fokusnya pada bagaimana sistem terlihat bagi pemrogram dan bagaimana sumber daya dikelola untuk mengeksekusi instruksi.</p>
            <h2>Fokus Utama</h2>
            <ul>
                <li><strong>Instruction Set Architecture (ISA)</strong> — antarmuka antara hardware dan software</li>
                <li><strong>Organisasi hardware</strong> — bagaimana komponen diimplementasikan dan dihubungkan</li>
                <li><strong>Performansi</strong> — kecepatan, skalabilitas, dan efisiensi energi</li>
            </ul>
            <p>Definisi profesional membantu Anda membedakan antara rancangan konsep dan implementasi fisik sistem komputer.</p>
        `
    },
    2: {
        title: 'Arsitektur vs Organisasi',
        summary: 'Memahami perbedaan penting antara rancangan sistem dan cara komponen diimplementasikan.',
        content: `
            <h1>Arsitektur vs Organisasi Komputer</h1>
            <p>Arsitektur komputer adalah spesifikasi fungsional dan perilaku sistem. Organisasi adalah bagaimana spesifikasi itu direalisasikan secara fisik.</p>
            <h2>Contoh Perbedaan</h2>
            <ul>
                <li><strong>Instruksi yang tersedia</strong> — arsitektur</li>
                <li><strong>Jenis memori cache</strong> — organisasi</li>
                <li><strong>Lebar bus data</strong> — organisasi</li>
            </ul>
            <blockquote>Analogi: arsitektur seperti <em>blueprint</em>, organisasi seperti teknik konstruksi dan bahan bangunan.</blockquote>
        `
    },
    3: {
        title: 'Model Von Neumann & Harvard',
        summary: 'Membedah dua arsitektur klasik dan dampaknya pada pengolahan instruksi dan data.',
        video: 'Ml3-kVYLNr8',
        content: `
            <h1>Von Neumann dan Harvard</h1>
            <p>Model Von Neumann menyimpan instruksi dan data di memori yang sama. Model Harvard memisahkan memori instruksi dan memori data.</p>
            <h2>Keunggulan dan Keterbatasan</h2>
            <ul>
                <li><strong>Von Neumann:</strong> lebih sederhana, tetapi rentan pada <em>bottleneck</em> memori.</li>
                <li><strong>Harvard:</strong> memungkinkan akses paralel, tetapi lebih kompleks dan mahal.</li>
            </ul>
            <p>Pemahaman model ini penting untuk desain sistem <em>embedded</em>, mikroprosesor, dan arsitektur modern.</p>
        `
    },
    4: {
        title: 'Struktur CPU',
        summary: 'Memahami komponen internal prosesor dan alur eksekusi instruksi.',
        video: 'cNN_tTXABUA',
        content: `
            <h1>Struktur CPU</h1>
            <p>CPU terdiri dari unit kontrol, unit aritmatika/logika, register, dan jalur data. Setiap siklus instruksi melibatkan <em>fetch, decode, execute,</em> dan <em>write-back</em>.</p>
            <h2>Elemen Utama</h2>
            <ol>
                <li><strong>Control Unit:</strong> mengatur sinyal dan urutan eksekusi.</li>
                <li><strong>ALU:</strong> memproses operasi aritmatika dan logika.</li>
                <li><strong>Register:</strong> penyimpanan internal berkecepatan tinggi.</li>
            </ol>
            <p>Siklus instruksi mendasari semua optimasi performa mikroarsitektur.</p>
        `
    },
    5: {
        title: 'Instruction Set Architecture (ISA)',
        summary: 'Menjelaskan konsep ISA, jenis instruksi, dan dampaknya terhadap program.',
        video: '6fgbLOL7bis',
        content: `
            <h1>Instruction Set Architecture</h1>
            <p>ISA adalah kontrak antara perangkat lunak dan hardware. Termasuk format instruksi, <em>addressing mode</em>, dan operasi yang tersedia.</p>
            <h2>Elemen ISA</h2>
            <ul>
                <li>Format instruksi dan <em>opcode</em></li>
                <li>Mode pengalamatan</li>
                <li>Register yang tersedia</li>
            </ul>
            <p>ISA mempengaruhi kompilator, performa, dan fleksibilitas sistem.</p>
        `
    },
    6: {
        title: 'Representasi Data & Register',
        summary: 'Mengenal biner, representasi angka, dan peran register dalam CPU.',
        content: `
            <h1>Register dan Representasi Data</h1>
            <p>Komputer menggunakan representasi biner untuk angka, karakter, dan instruksi. Register menyimpan data yang sedang diproses dengan kecepatan sangat tinggi.</p>
            <h2>Tipe Data Biner</h2>
            <ul>
                <li><strong>Unsigned</strong> dan <strong>signed integer</strong></li>
                <li><strong>Floating point</strong></li>
                <li>Representasi karakter (ASCII / UTF-8)</li>
            </ul>
            <p>Register bekerja dengan lebar bit yang menentukan kapasitas data dan alamat yang dapat diakses.</p>
        `
    },
    7: {
        title: 'Bahasa Mesin & Assembly',
        summary: 'Pelajari hubungan antara bahasa mesin, assembly, dan perintah tingkat tinggi.',
        video: '7_msVNDxC8s',
        content: `
            <h1>Bahasa Mesin dan Assembly</h1>
            <p>Bahasa mesin adalah instruksi biner langsung. Assembly adalah representasi teks yang lebih mudah dibaca dari bahasa mesin.</p>
            <h2>Konversi Kode</h2>
            <ul>
                <li><strong>Compiling:</strong> tingkat tinggi → assembly / <em>machine code</em></li>
                <li><strong>Assembling:</strong> assembly → <em>machine code</em></li>
                <li><strong>Debugging:</strong> memahami hubungan antara kode dan register</li>
            </ul>
            <p>Memahami assembly membantu menganalisa performa dan perilaku mesin secara detail.</p>
        `
    },
    8: {
        title: 'Hirarki Memori',
        summary: 'Mengurai posisi cache, RAM, dan penyimpanan sekunder dalam sistem.',
        video: 'JogSnkvENr0',
        content: `
            <h1>Hirarki Memori</h1>
            <p>Desain memori bertumpuk berdasarkan biaya, kapasitas, dan latensi. Semakin dekat ke CPU, semakin cepat dan semakin kecil kapasitasnya.</p>
            <ol>
                <li><strong>Register CPU</strong> — kecepatan tertinggi, kapasitas terkecil</li>
                <li><strong>Cache</strong> (L1 / L2 / L3)</li>
                <li><strong>RAM</strong> utama</li>
                <li><strong>Penyimpanan sekunder</strong> (SSD / HDD)</li>
            </ol>
            <p>Memahami hirarki memori penting untuk optimasi algoritma dan arsitektur sistem.</p>
        `
    },
    9: {
        title: 'Cache & Locality',
        summary: 'Memahami bagaimana cache meningkatkan performa melalui prinsip locality.',
        video: 'zF4VMombo7U',
        content: `
            <h1>Cache dan Locality</h1>
            <p>Cache menyimpan data yang sering diakses untuk mengurangi waktu tunggu CPU. Dua prinsip utama adalah <em>temporal</em> dan <em>spatial locality</em>.</p>
            <h2>Prinsip Locality</h2>
            <ul>
                <li><strong>Temporal:</strong> data yang baru diakses cenderung akan diakses lagi.</li>
                <li><strong>Spatial:</strong> data yang berdekatan cenderung akan diakses bersama.</li>
            </ul>
            <p>Desain cache mempengaruhi kecepatan program dan efektivitas <em>pipeline</em> CPU.</p>
        `
    },
    10: {
        title: 'Pengalamatan Cache',
        summary: 'Pelajari direct-mapped, associative, dan fully associative cache.',
        content: `
            <h1>Pengalamatan Cache</h1>
            <p>Tiga strategi utama untuk menempatkan blok data ke dalam cache: <em>direct-mapped, set-associative,</em> dan <em>fully associative</em>.</p>
            <h2>Perbandingan</h2>
            <ul>
                <li><strong>Direct-mapped:</strong> sederhana dan cepat, tetapi rawan konflik.</li>
                <li><strong>Set-associative:</strong> seimbang antara kompleksitas dan fleksibilitas.</li>
                <li><strong>Fully associative:</strong> paling fleksibel, tetapi lebih mahal.</li>
            </ul>
            <p>Pemilihan metode pengalamatan mempengaruhi <em>miss rate</em> dan latensi sistem.</p>
        `
    },
    11: {
        title: 'Pipelining',
        summary: 'Membongkar teknik pipelining untuk memaksimalkan throughput CPU.',
        video: 'eVRdfl4zxfI',
        content: `
            <h1>Pipelining</h1>
            <p>Pipelining memecah eksekusi instruksi menjadi beberapa tahapan sehingga beberapa instruksi dapat diproses secara paralel.</p>
            <h2>Manfaat dan Hambatan</h2>
            <ul>
                <li><strong>Meningkatkan</strong> <em>throughput</em> eksekusi.</li>
                <li>Menimbulkan <strong>hazard</strong> data, kontrol, dan struktural.</li>
                <li>Butuh strategi <em>forwarding</em> dan <em>stall</em> untuk menjaga kebenaran eksekusi.</li>
            </ul>
            <p>Pipelining adalah inti dari prosesor modern yang cepat.</p>
        `
    },
    12: {
        title: 'Hazard dan Branch Prediction',
        summary: 'Mendalami penanganan hazard dan prediksi cabang dalam pipeline.',
        content: `
            <h1>Hazard dan Branch Prediction</h1>
            <p>Hazard terjadi ketika urutan instruksi mempengaruhi nilai data atau kontrol. <em>Branch prediction</em> mengurangi penalti percabangan.</p>
            <h2>Strategi Penanganan</h2>
            <ul>
                <li><strong>Forwarding / bypassing</strong> untuk hazard data</li>
                <li><strong>Static</strong> dan <strong>dynamic branch prediction</strong></li>
                <li><strong>Branch target buffer</strong> untuk mempercepat pengambilan instruksi</li>
            </ul>
            <p>Strategi ini meningkatkan kinerja prosesor dengan menjaga <em>pipe</em> tetap terisi.</p>
        `
    },
    13: {
        title: 'Performa Sistem',
        summary: 'Mengukur performa dan memahami faktor utama dalam desain sistem komputer.',
        content: `
            <h1>Performansi Sistem</h1>
            <p>Performa bukan hanya <em>clock rate</em>. Ukuran utama meliputi CPI, <em>throughput</em>, <em>latency</em>, dan efisiensi memori.</p>
            <h2>Metodologi Penilaian</h2>
            <ul>
                <li><strong>Clock cycles per instruction (CPI)</strong></li>
                <li><strong>Throughput</strong> instruksi per detik</li>
                <li>Analisis <em>bottleneck</em> memori dan I/O</li>
            </ul>
            <p>Memahami metrik performa membantu memilih arsitektur yang tepat untuk aplikasi tertentu.</p>
        `
    },
    14: {
        title: 'RISC vs CISC',
        summary: 'Membandingkan filosofi desain prosesor modern dan keuntungan serta komprominya.',
        video: '1HA026lSWjE',
        content: `
            <h1>RISC vs CISC</h1>
            <p>RISC memfokuskan pada instruksi sederhana dan eksekusi cepat. CISC menyediakan instruksi kompleks dalam satu operasi.</p>
            <h2>Perbedaan Kunci</h2>
            <ul>
                <li><strong>RISC:</strong> instruksi tetap, <em>pipeline</em> mudah, lebih banyak register.</li>
                <li><strong>CISC:</strong> instruksi kompleks, <em>mikroprogramming</em>, ukuran kode lebih kecil.</li>
            </ul>
            <p>Pemilihan model mempengaruhi desain <em>compiler</em>, mikroarsitektur, dan ekosistem platform.</p>
        `
    },
    15: {
        title: 'I/O dan Bus Sistem',
        summary: 'Memahami mekanisme input/output dan interkoneksi bus dalam sistem komputer.',
        video: 'alYwqzO6ZEQ',
        content: `
            <h1>I/O dan Bus Sistem</h1>
            <p>Bus menghubungkan CPU, memori, dan perangkat I/O. Protokol bus menentukan cara transfer data dan sinkronisasi antar-komponen.</p>
            <h2>Komponen Utama</h2>
            <ul>
                <li><strong>Data bus</strong>, <strong>address bus</strong>, <strong>control bus</strong></li>
                <li>Sistem <strong>interrupt</strong> dan <strong>DMA</strong></li>
                <li>Antarmuka standar seperti <strong>PCIe</strong> dan <strong>USB</strong></li>
            </ul>
            <p>Desain I/O menentukan respon sistem terhadap perangkat eksternal dan beban kerja data intensif.</p>
        `
    },
    16: {
        title: 'Arsitektur Paralel & Multicore',
        summary: 'Mengulas strategi paralelisme untuk arsitektur modern dan tantangan skalabilitas.',
        video: 'DXhuQHk5-Tg',
        content: `
            <h1>Arsitektur Paralel dan Multicore</h1>
            <p>Prosesor <em>multicore</em> menggabungkan beberapa inti eksekusi untuk meningkatkan <em>throughput</em>. Arsitektur paralel memungkinkan aplikasi berjalan secara bersamaan.</p>
            <h2>Tipe Paralelisme</h2>
            <ul>
                <li><strong>Instruction-level parallelism (ILP)</strong></li>
                <li><strong>Data-level parallelism (SIMD)</strong></li>
                <li><strong>Task-level parallelism (MIMD / multicore)</strong></li>
            </ul>
            <p>Skalabilitas paralel memerlukan manajemen memori, sinkronisasi, dan minimisasi <em>overhead</em> komunikasi.</p>
        `
    }
};

const quizQuestions = [
    {
        question: 'Apa fokus utama Arsitektur Komputer?',
        options: [
            'Detail sinyal hardware di level transistor.',
            'Desain fungsional dan atribut sistem yang terlihat oleh pemrogram.',
            'Proses instalasi sistem operasi.',
            'Pengaturan layout motherboard.'
        ],
        answer: 1
    },
    {
        question: 'Apa perbedaan utama antara arsitektur dan organisasi komputer?',
        options: [
            'Arsitektur fokus pada hardware, organisasi fokus pada software.',
            'Arsitektur adalah spesifikasi fungsional, organisasi adalah implementasi fisik.',
            'Organisasi hanya mempelajari network.',
            'Tidak ada perbedaan, keduanya sama.'
        ],
        answer: 1
    },
    {
        question: 'Apa karakteristik utama arsitektur Von Neumann?',
        options: [
            'Memisahkan memori instruksi dan data.',
            'Menyimpan program dan data pada ruang memori yang sama.',
            'Tidak memiliki CPU terpisah.',
            'Tidak menggunakan bus kontrol.'
        ],
        answer: 1
    },
    {
        question: 'Tahap pertama dalam siklus instruksi CPU adalah...',
        options: [
            'Decode',
            'Execute',
            'Fetch',
            'Write-back'
        ],
        answer: 2
    },
    {
        question: 'Unit kontrol pada CPU bertugas...',
        options: [
            'Melakukan operasi aritmatika.',
            'Menyimpan semua data sementara.',
            'Mengambil dan mengatur eksekusi instruksi.',
            'Mengevaluasi performa memori.'
        ],
        answer: 2
    },
    {
        question: 'Instruction Set Architecture (ISA) adalah...',
        options: [
            'Format layout motherboard.',
            'Kumpulan instruksi dan model interaksi perangkat lunak-hardware.',
            'Standar jaringan komputer.',
            'Metode pengujian memori.'
        ],
        answer: 1
    },
    {
        question: 'Assembly language adalah...',
        options: [
            'Bahasa pemrograman tingkat tinggi.',
            'Representasi teks dari bahasa mesin.',
            'Bahasa markup web.',
            'Perintah langsung untuk GPU.'
        ],
        answer: 1
    },
    {
        question: 'Register CPU umumnya digunakan untuk...',
        options: [
            'Menyimpan data jangka panjang.',
            'Menyimpan data yang sedang diproses.',
            'Menyimpan firmware BIOS.',
            'Menyimpan data jaringan.'
        ],
        answer: 1
    },
    {
        question: 'Susunan memori tercepat hingga paling lambat adalah...',
        options: [
            'Register, Cache, RAM, SSD/HDD',
            'RAM, Cache, Register, SSD/HDD',
            'SSD/HDD, RAM, Cache, Register',
            'Cache, Register, RAM, SSD/HDD'
        ],
        answer: 0
    },
    {
        question: 'Strategi cache yang menawarkan fleksibilitas tertinggi adalah...',
        options: [
            'Direct-mapped',
            'Fully associative',
            'Set-associative',
            'Banked cache'
        ],
        answer: 1
    },
    {
        question: 'Pipelining bertujuan untuk...',
        options: [
            'Meningkatkan jumlah instruksi per detik dengan memproses beberapa tahapan sekaligus.',
            'Mengurangi ukuran register.',
            'Menghapus kebutuhan cache.',
            'Mempercepat booting sistem.'
        ],
        answer: 0
    },
    {
        question: 'Branch prediction digunakan untuk...',
        options: [
            'Menentukan arsitektur bus yang optimal.',
            'Memprediksi apakah percabangan akan dilalui untuk menjaga pipeline tetap terisi.',
            'Mengatur prioritas interrupt.',
            'Mengkompres data memori.'
        ],
        answer: 1
    },
    {
        question: 'Fungsi sistem bus adalah...',
        options: [
            'Menghubungkan CPU, memori, dan perangkat I/O.',
            'Menentukan mode pengalamatan register.',
            'Menyimpan instruksi mikro.',
            'Mengatur kecepatan clock CPU.'
        ],
        answer: 0
    },
    {
        question: 'Karakteristik utama arsitektur RISC adalah...',
        options: [
            'Instruksi kompleks dan variabel.',
            'Instruksi sederhana dan eksekusi cepat.',
            'Tidak menggunakan register.',
            'Bekerja tanpa compiler.'
        ],
        answer: 1
    },
    {
        question: 'SIMD adalah singkatan dari...',
        options: [
            'Single Instruction Multiple Data',
            'Simple Instruction Multiple Data',
            'Single Input Multiple Display',
            'System Instruction Multiple Device'
        ],
        answer: 0
    },
    {
        question: 'Hukum Amdahl menjelaskan bahwa...',
        options: [
            'Performa paralelisme dibatasi oleh bagian serial dari program.',
            'Clock rate selalu meningkatkan performa secara linear.',
            'Cache selalu mengurangi latency memori.',
            'Jumlah register tidak memengaruhi throughput.'
        ],
        answer: 0
    }
];

// ============================================================
//  STATE
// ============================================================

let currentMateriId = 1;
let currentQuizIndex = 0;
let score = 0;
let userAnswers = [];

// ============================================================
//  APP INIT
// ============================================================

function initializeApp() {
    renderCourseCards();
    showHome();
}

// ============================================================
//  NAVIGATION
// ============================================================

function showHome() {
    document.getElementById('home-section').classList.remove('d-none');
    document.getElementById('reader-section').classList.add('d-none');
    document.getElementById('quiz-section').classList.add('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateNav('home');
}

function goToSilabus() {
    showHome();
    setTimeout(() => {
        document.getElementById('silabus').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function showReader() {
    document.getElementById('home-section').classList.add('d-none');
    document.getElementById('reader-section').classList.remove('d-none');
    document.getElementById('quiz-section').classList.add('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateNav('reader');
}

function showQuiz() {
    document.getElementById('home-section').classList.add('d-none');
    document.getElementById('reader-section').classList.add('d-none');
    document.getElementById('quiz-section').classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateNav('quiz');
    initQuiz();
}

function updateNav(active) {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    const map = { home: 0, reader: 1, quiz: 2 };
    const links = document.querySelectorAll('.nav-link');
    if (links[map[active]]) links[map[active]].classList.add('active');
}

// ============================================================
//  COURSE CARDS
// ============================================================

let showAllCards = false;

function toggleCards() {
    showAllCards = !showAllCards;
    renderCourseCards();
    if (typeof AOS !== 'undefined') AOS.refresh();
    document.getElementById('silabus').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
//  MATERI READER
// ============================================================

function renderSidebar(activeId) {
    const list = document.getElementById('sidebar-list');
    if (!list) return;
    list.innerHTML = Object.entries(materiData).map(([id, m]) => `
        <div class="sidebar-item ${Number(id) === activeId ? 'active' : ''}" onclick="openMateri(${id})">
            <span class="num">${String(id).padStart(2, '0')}</span>
            <span>${m.title}</span>
        </div>
    `).join('');
}

function nextMateri() {
    const total = Object.keys(materiData).length;
    if (currentMateriId < total) openMateri(currentMateriId + 1);
}

function prevMateri() {
    if (currentMateriId > 1) openMateri(currentMateriId - 1);
}

// ============================================================
//  QUIZ
// ============================================================

function initQuiz() {
    currentQuizIndex = 0;
    score = 0;
    userAnswers = new Array(quizQuestions.length).fill(undefined);

    document.getElementById('quiz-result').classList.add('d-none');
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.remove('d-none');
    quizContainer.innerHTML = '';

    renderQuestion();
}

function renderQuestion() {
    const q = quizQuestions[currentQuizIndex];
    const container = document.getElementById('quiz-container');
    if (!q || !container) return;

    document.getElementById('q-current').textContent = currentQuizIndex + 1;
    document.getElementById('q-total').textContent = quizQuestions.length;
    document.getElementById('quiz-progress').style.width = `${((currentQuizIndex) / quizQuestions.length) * 100}%`;

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, index) => `
        <button class="quiz-option" onclick="selectAnswer(${index}, this)" data-index="${index}">
            <span class="letter">${letters[index]}</span>
            <span>${opt}</span>
        </button>
    `).join('');

    const isLast = currentQuizIndex === quizQuestions.length - 1;

    container.innerHTML = `
        <div class="quiz-question">${currentQuizIndex + 1}. ${q.question}</div>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="next-btn-wrap">
            <button id="btn-next-q" class="btn btn-primary d-none" onclick="nextQuestion()">
                ${isLast ? 'Lihat Hasil' : 'Selanjutnya'} <i class="bi bi-chevron-right ms-1"></i>
            </button>
        </div>
    `;
}

function selectAnswer(selectedIndex, element) {
    if (userAnswers[currentQuizIndex] !== undefined) return;

    userAnswers[currentQuizIndex] = selectedIndex;
    const q = quizQuestions[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');

    options.forEach(opt => opt.classList.add('disabled'));

    if (selectedIndex === q.answer) {
        element.classList.add('correct');
        score += 1;
    } else {
        element.classList.add('wrong');
        options[q.answer].classList.add('correct');
    }

    const btnNext = document.getElementById('btn-next-q');
    btnNext.classList.remove('d-none');
}

function nextQuestion() {
    currentQuizIndex += 1;
    if (currentQuizIndex < quizQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const container = document.getElementById('quiz-container');
    container.classList.add('d-none');
    document.getElementById('quiz-progress').style.width = '100%';

    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('d-none');

    const percent = Math.round((score / quizQuestions.length) * 100);
    animateScore(0, percent, 900);

    const msgEl = document.getElementById('result-message');
    const iconEl = document.getElementById('result-icon');
    const detailEl = document.getElementById('result-detail');

    if (percent >= 85) {
        msgEl.textContent = 'Excellent! Pemahaman Anda sangat kuat di bidang Arsitektur Komputer.';
        iconEl.style.color = '#10b981';
        iconEl.className = 'bi bi-award-fill';
    } else if (percent >= 60) {
        msgEl.textContent = 'Bagus! Tingkatkan lagi dengan membaca ulang beberapa topik yang masih keliru.';
        iconEl.style.color = '#f59e0b';
        iconEl.className = 'bi bi-check-circle-fill';
    } else {
        msgEl.textContent = 'Perlu lebih banyak latihan. Coba ulang materinya dan coba kuis lagi.';
        iconEl.style.color = '#ef4444';
        iconEl.className = 'bi bi-exclamation-circle-fill';
    }

    detailEl.innerHTML = `
        <div class="detail-item">
            <span class="detail-label">Jawaban Benar</span>
            <span class="detail-value" style="color: var(--success);">${score}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Jawaban Salah</span>
            <span class="detail-value" style="color: var(--danger);">${quizQuestions.length - score}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Total Soal</span>
            <span class="detail-value">${quizQuestions.length}</span>
        </div>
    `;
}

function animateScore(start, end, duration) {
    const display = document.getElementById('score-display');
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        display.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// ============================================================
//  QUICK QUIZ (Per-chapter from reader)
// ============================================================

function startQuickQuiz(chapterId) {
    const relevantQuestions = getQuestionsForChapter(chapterId);
    if (relevantQuestions.length === 0) {
        showQuiz();
        return;
    }
    showQuiz();
}

function getQuestionsForChapter(chapterId) {
    const map = {
        1: 0, 2: 1, 3: 2, 4: 3, 5: 4,
        6: 5, 7: 6, 8: 7, 9: 8, 10: 9,
        11: 10, 12: 11, 13: 12, 14: 13, 15: 14, 16: 15
    };
    const idx = map[chapterId];
    if (idx !== undefined) {
        return [quizQuestions[idx]];
    }
    return [];
}

// ============================================================
//  KEYBOARD NAV
// ============================================================

document.addEventListener('keydown', (e) => {
    const readerVisible = !document.getElementById('reader-section').classList.contains('d-none');
    if (!readerVisible) return;

    if (e.key === 'ArrowRight') {
        e.preventDefault();
        const btn = document.getElementById('next-btn');
        if (!btn.disabled) btn.click();
    }
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const btn = document.getElementById('prev-btn');
        if (!btn.disabled) btn.click();
    }
});

// ============================================================
//  TYPEWRITER EFFECT
// ============================================================

const typewriterPhrases = [
    'Materi • Pemrograman • Arsitektur',
    'CPU · Memori · Pipeline · ISA',
    '16 Pertemuan · 16 Soal Kuis',
    'Von Neumann · RISC · CISC · Multicore',
];

function initTypewriter() {
    const el = document.getElementById('typewriter-line');
    if (!el) return;
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const phrase = typewriterPhrases[phraseIdx];
        if (isDeleting) {
            el.textContent = phrase.substring(0, charIdx--);
            if (charIdx < 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % typewriterPhrases.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 30);
        } else {
            el.innerHTML = phrase.substring(0, charIdx + 1) + '<span class="cursor-blink"></span>';
            charIdx++;
            if (charIdx >= phrase.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
            setTimeout(type, 60);
        }
    }
    type();
}

// ============================================================
//  HERO BG SLIDE
// ============================================================

function initBgSlide() {
    // Fitur dinonaktifkan agar background tetap satu warna
    // dan teks dapat dibaca pada mode gelap maupun terang.
}

// ============================================================
//  CLICK RIPPLE
// ============================================================

function initClickRipple() {
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'click-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
}



// ============================================================
//  DARK MODE
// ============================================================

function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('ark-theme', isDark ? 'light' : 'dark');
    updateThemeIcon(!isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars';
}

function loadTheme() {
    const saved = localStorage.getItem('ark-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

// ============================================================
//  READING PROGRESS
// ============================================================

function getReadList() {
    try {
        return JSON.parse(localStorage.getItem('ark-read') || '[]');
    } catch { return []; }
}

function saveReadList(list) {
    localStorage.setItem('ark-read', JSON.stringify(list));
}

function markAsRead(id) {
    const list = getReadList();
    if (!list.includes(String(id))) {
        list.push(String(id));
        saveReadList(list);
        renderCourseCards();
    }
}

// ============================================================
//  SEARCH MATERI
// ============================================================

let searchQuery = '';

function searchMateri(query) {
    searchQuery = query.toLowerCase().trim();
    renderCourseCards();
}

renderCourseCards = function() {
    const container = document.getElementById('card-grid');
    if (!container) return;
    const entries = Object.entries(materiData);
    const filtered = searchQuery
        ? entries.filter(([id, m]) =>
            m.title.toLowerCase().includes(searchQuery) ||
            m.summary.toLowerCase().includes(searchQuery)
          )
        : entries;
    const limit = showAllCards ? filtered.length : Math.min(6, filtered.length);

    const readList = getReadList();
    const readCount = readList.length;
    const totalCount = Object.keys(materiData).length;

    let html = '';
    if (!searchQuery) {
        html += `
            <div class="col-12">
                <div class="progress-summary">
                    <i class="bi bi-check-circle-fill" style="color:var(--success);"></i>
                    Progress: <strong>${readCount}</strong> / ${totalCount} materi telah dibaca
                </div>
            </div>
        `;
    }

    html += filtered.slice(0, limit).map(([id, materi], idx) => {
        const read = readList.includes(id);
        return `
            <div class="col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="${(idx % 6) * 50}">
                <div class="course-card">
                    <div class="card-number">${String(id).padStart(2, '0')}</div>
                    <h3>${materi.title}</h3>
                    <p class="card-summary">${materi.summary}</p>
                    ${read ? '<div class="read-badge"><i class="bi bi-check-circle-fill"></i> Sudah dibaca</div>' : ''}
                    <div class="card-action">
                        <button class="btn btn-primary btn-sm" onclick="openMateri(${id})">
                            Selengkapnya <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (filtered.length === 0) {
        html += `
            <div class="col-12">
                <div class="text-center py-5" style="color:var(--text-muted);">
                    <i class="bi bi-search" style="font-size:2rem;display:block;margin-bottom:0.5rem;"></i>
                    Materi "${searchQuery}" tidak ditemukan
                </div>
            </div>
        `;
    }

    if (filtered.length > 6 && !searchQuery) {
        html += `
            <div class="col-12">
                <div class="show-more-wrap">
                    <button class="btn btn-outline show-more-btn" onclick="toggleCards()">
                        <i class="bi bi-${showAllCards ? 'chevron-up' : 'grid-3x3-gap-fill'} me-2"></i>
                        ${showAllCards ? 'Tampilkan Lebih Sedikit' : `Semua Materi (${entries.length})`}
                    </button>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
};

openMateri = function(id) {
    currentMateriId = id;
    const materi = materiData[id];
    const contentDiv = document.getElementById('materi-content');
    if (!materi || !contentDiv) return;

    markAsRead(id);

    const videoEmbed = materi.video ? `
        <div class="video-label"><i class="bi bi-play-circle-fill me-1"></i> Tonton Video Pembelajaran</div>
        <div class="video-wrap">
            <iframe src="https://www.youtube.com/embed/${materi.video}" title="${materi.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    ` : '';

    contentDiv.innerHTML = `
        <span class="badge-top">Pertemuan ${id}</span>
        <h1>${materi.title}</h1>
        ${videoEmbed}
        ${materi.content}
    `;

    const total = Object.keys(materiData).length;
    document.getElementById('prev-btn').disabled = id === 1;
    document.getElementById('next-btn').disabled = id === total;
    document.getElementById('reader-position').textContent = `${id} / ${total}`;

    renderSidebar(id);
    showReader();
};

// ============================================================
//  SCROLL TO TOP
// ============================================================

function initScrollToTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
//  BOOT
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    initializeApp();
    initTypewriter();
    initBgSlide();
    initClickRipple();
    initScrollToTop();

    document.addEventListener('click', (e) => {
        const nav = document.getElementById('mainNav');
        const menu = document.getElementById('navMenu');
        const toggle = nav.querySelector('.navbar-toggler');
        if (menu.classList.contains('show') && !nav.contains(e.target)) {
            toggle.click();
        }
    });

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 60,
            easing: 'ease-out-cubic',
        });
    }
});
