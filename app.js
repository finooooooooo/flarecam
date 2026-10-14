// --- DATABASE UTAMA (DI-UPGRADE DENGAN OVERVIEW, SPECS, & INCLUDED) ---

const categories = [
    { id: 'kamera', name: 'Kamera', icon: 'bi-camera' },
    { id: 'lensa', name: 'Lensa', icon: 'bi-record-circle' },
    { id: 'drone', name: 'Drone', icon: 'bi-airplane' },
    { id: 'lighting', name: 'Lighting', icon: 'bi-lightbulb' },
    { id: 'audio', name: 'Audio', icon: 'bi-mic' }
];

// Helper untuk men-generate data kelengkapan (Included) bawaan standar
const generateIncluded = (type) => {
    if (type === 'kamera') return [
        { name: 'Body Kamera', img: 'https://placehold.co/150x150/ffffff/333333?text=Body' },
        { name: 'Baterai Original', img: 'https://placehold.co/150x150/ffffff/333333?text=Baterai' },
        { name: 'Charger Desktop', img: 'https://placehold.co/150x150/ffffff/333333?text=Charger' },
        { name: 'Strap Kamera', img: 'https://placehold.co/150x150/ffffff/333333?text=Strap' }
    ];
    if (type === 'lensa') return [
        { name: 'Unit Lensa', img: 'https://placehold.co/150x150/ffffff/333333?text=Lensa' },
        { name: 'Lens Hood', img: 'https://placehold.co/150x150/ffffff/333333?text=Hood' },
        { name: 'Front & Rear Caps', img: 'https://placehold.co/150x150/ffffff/333333?text=Caps' }
    ];
    if (type === 'drone') return [
        { name: 'Unit Drone', img: 'https://placehold.co/150x150/ffffff/333333?text=Drone' },
        { name: 'Remote Controller', img: 'https://placehold.co/150x150/ffffff/333333?text=Remote' },
        { name: '3x Intelligent Battery', img: 'https://placehold.co/150x150/ffffff/333333?text=Baterai+x3' },
        { name: 'Charging Hub', img: 'https://placehold.co/150x150/ffffff/333333?text=Hub' }
    ];
    return [
        { name: 'Main Unit', img: 'https://placehold.co/150x150/ffffff/333333?text=Unit' },
        { name: 'Kabel Power / Data', img: 'https://placehold.co/150x150/ffffff/333333?text=Kabel' },
        { name: 'Hardcase Bag', img: 'https://placehold.co/150x150/ffffff/333333?text=Tas' }
    ];
};

const flareDatabase = [
    // --- KAMERA (1-3) ---
    { 
        id: 1, categoryId: 'kamera', categoryName: 'Kamera', brand: 'Canon', name: 'Canon Kamera Pro Series Gen 1', price: 820000, stock: 5, rating: '4.2', reviews: 110, image: 'img/canon1.jpg', // ini untuk image Canon Kamera Pro Series Gen 1
        overview: "Kamera flagship dari Canon yang dirancang khusus untuk para profesional. Menawarkan kualitas gambar luar biasa dengan sensor full-frame terbaru, kemampuan merekam video 4K tanpa crop, dan sistem autofokus yang didukung oleh AI untuk mendeteksi mata dan wajah dengan sangat presisi. Sangat cocok untuk kebutuhan wedding, komersial, maupun jurnalisme.",
        detailedSpecs: { "Type": "Digital, single-lens reflex, AF/AE camera", "Recording Media": "CFexpress / SD card", "Compatible Lenses": "Canon RF lenses", "Image Sensor": "Full-Frame CMOS sensor", "Pixels": "Approx. 45.0 megapixels", "ISO Speed": "ISO 100-51200", "Shutter Type": "Electronically-controlled, focal-plane shutter" },
        included: generateIncluded('kamera')
    },
    { 
        id: 2, categoryId: 'kamera', categoryName: 'Kamera', brand: 'Nikon', name: 'Nikon Kamera Pro Series Gen 2', price: 190000, stock: 5, rating: '4.6', reviews: 85, image: 'img/nikon2.jpg', // ini untuk image Nikon Kamera Pro Series Gen 2
        overview: "Kamera serbaguna dari Nikon yang menggabungkan performa fotografi dan videografi dalam satu bodi yang ringkas. Dilengkapi dengan in-body image stabilization (IBIS) yang kuat, memastikan hasil tangkapan Anda selalu tajam meskipun dalam kondisi minim cahaya.",
        detailedSpecs: { "Type": "Mirrorless AF/AE camera", "Recording Media": "SD/SDHC/SDXC (UHS-II)", "Compatible Lenses": "Nikon Z mount", "Image Sensor": "APS-C CMOS", "Pixels": "Approx. 24.2 megapixels", "ISO Speed": "ISO 100-25600", "Autofocus": "Hybrid phase-detection" },
        included: generateIncluded('kamera')
    },
    { 
        id: 3, categoryId: 'kamera', categoryName: 'Kamera', brand: 'Sony', name: 'Sony Kamera Pro Series Gen 3', price: 370000, stock: 5, rating: '4.9', reviews: 402, image: 'img/sony3.jpg', // ini untuk image Sony Kamera Pro Series Gen 3
        overview: "Standar industri terbaru untuk para pembuat film dan fotografer. Sony memberikan dynamic range 15-stop yang memukau dan perekaman 10-bit 4:2:2 internal. Bodi magnesium alloy membuatnya tangguh digunakan dalam berbagai kondisi cuaca ekstrem.",
        detailedSpecs: { "Type": "Interchangeable lens digital camera", "Recording Media": "Dual Slot SD/CFexpress Type A", "Compatible Lenses": "Sony E-mount", "Image Sensor": "33MP Full-Frame Exmor R", "Video Format": "XAVC S, XAVC HS", "ISO Speed": "ISO 100-51200", "Viewfinder": "Quad-VGA OLED" },
        included: generateIncluded('kamera')
    },

    // --- LENSA (4-6) ---
    { 
        id: 4, categoryId: 'lensa', categoryName: 'Lensa', brand: 'Sony', name: 'Sony Lensa Pro Series Gen 1', price: 230000, stock: 5, rating: '4.8', reviews: 140, image: 'img/sony4.jpg', // ini untuk image Sony Lensa Pro Series Gen 1
        overview: "Lensa G Master andalan Sony dengan bukaan konstan f/2.8. Memberikan ketajaman luar biasa dari ujung ke ujung frame dan bokeh yang sangat halus. Ideal untuk potret, acara pernikahan, maupun fotografi jurnalistik.",
        detailedSpecs: { "Focal Length": "24-70mm", "Maximum Aperture": "f/2.8", "Minimum Aperture": "f/22", "Lens Mount": "Sony E", "Format Compatibility": "Full-Frame", "Minimum Focus Distance": "0.21m", "Optical Design": "20 Elements in 15 Groups" },
        included: generateIncluded('lensa')
    },
    { 
        id: 5, categoryId: 'lensa', categoryName: 'Lensa', brand: 'Canon', name: 'Canon Lensa Pro Series Gen 2', price: 190000, stock: 5, rating: '4.7', reviews: 88, image: 'img/canon5.jpg', // ini untuk image Canon Lensa Pro Series Gen 2
        overview: "Lensa prime bukaan super lebar f/1.2 dari Canon L-series. Dirancang untuk mengisolasi subjek dengan sempurna dan bekerja optimal dalam kondisi kurang cahaya. Ketajaman optik yang tidak tertandingi di kelasnya.",
        detailedSpecs: { "Focal Length": "50mm", "Maximum Aperture": "f/1.2", "Lens Mount": "Canon RF", "Format Compatibility": "Full-Frame", "Filter Size": "77mm", "Diaphragm Blades": "10, Rounded", "Autofocus": "Ring-type USM" },
        included: generateIncluded('lensa')
    },
    { 
        id: 6, categoryId: 'lensa', categoryName: 'Lensa', brand: 'Nikon', name: 'Nikon Lensa Pro Series Gen 3', price: 160000, stock: 5, rating: '4.5', reviews: 99, image: 'img/nikon6.jpg', // ini untuk image Nikon Lensa Pro Series Gen 3
        overview: "Lensa telefoto andalan untuk olahraga dan satwa liar. Dengan rentang 70-200mm, lensa ini dilengkapi Vibration Reduction (VR) mutakhir yang memungkinkan Anda memotret tajam menggunakan handheld pada kecepatan rana rendah.",
        detailedSpecs: { "Focal Length": "70-200mm", "Maximum Aperture": "f/2.8", "Lens Mount": "Nikon Z", "Format Compatibility": "Full-Frame", "Image Stabilization": "VR (Vibration Reduction)", "Weight": "1360g", "Filter Size": "77mm" },
        included: generateIncluded('lensa')
    },

    // --- DRONE (7-9) ---
    { 
        id: 7, categoryId: 'drone', categoryName: 'Drone', brand: 'DJI', name: 'DJI Drone Pro Series Gen 1', price: 450000, stock: 5, rating: '4.9', reviews: 250, image: 'img/dji7.jpg', // ini untuk image DJI Drone Pro Series Gen 1
        overview: "Membawa kualitas sinematik ke langit. Drone ini dilengkapi kamera Hasselblad dengan sensor 4/3 CMOS yang menangkap warna yang kaya dan detail yang tajam. Sensor halangan omnidireksional menjamin penerbangan yang aman.",
        detailedSpecs: { "Takeoff Weight": "895g", "Max Flight Time": "46 minutes", "Max Hovering Time": "40 minutes", "Max Flight Distance": "30 km", "Wind Resistance": "12 m/s", "Camera Sensor": "4/3 CMOS, Effective Pixels: 20 MP", "Video Resolution": "5.1K: 5120×2700@50fps" },
        included: generateIncluded('drone')
    },
    { 
        id: 8, categoryId: 'drone', categoryName: 'Drone', brand: 'DJI', name: 'DJI Drone Pro Series Gen 2', price: 320000, stock: 5, rating: '4.8', reviews: 185, image: 'img/dji8.jpg', // ini untuk image DJI Drone Pro Series Gen 2
        overview: "Kecil namun mematikan. Drone ultra-ringan di bawah 250 gram ini lolos dari banyak regulasi ketat, namun tetap menyuguhkan kualitas video 4K HDR dan fitur pelacakan subjek otomatis (ActiveTrack).",
        detailedSpecs: { "Takeoff Weight": "< 249g", "Max Flight Time": "34 minutes", "Max Wind Resistance": "10.7 m/s (Level 5)", "Camera Sensor": "1/1.3-inch CMOS", "Video Resolution": "4K: 3840×2160@60fps", "Transmission": "OcuSync 4.0", "Obstacle Sensing": "Omnidirectional" },
        included: generateIncluded('drone')
    },
    { 
        id: 9, categoryId: 'drone', categoryName: 'Drone', brand: 'DJI', name: 'DJI Drone Pro Series Gen 3', price: 550000, stock: 5, rating: '4.7', reviews: 190, image: 'img/dji9.jpg', // ini untuk image DJI Drone Pro Series Gen 3
        overview: "Spesialis FPV (First Person View) yang memberikan pengalaman terbang paling imersif. Cocok untuk mengambil adegan aksi berkecepatan tinggi dengan manuver akrobatik yang presisi.",
        detailedSpecs: { "Takeoff Weight": "795g", "Max Speed": "140 kph", "Max Acceleration": "0-100 kph in 2s", "Max Flight Time": "20 minutes", "Camera Sensor": "1/2.3-inch CMOS", "FOV": "150°", "Video Resolution": "4K/60fps" },
        included: generateIncluded('drone')
    },

    // --- LIGHTING (10-12) ---
    { 
        id: 10, categoryId: 'lighting', categoryName: 'Lighting', brand: 'Godox', name: 'Godox Lighting Pro Series Gen 1', price: 150000, stock: 5, rating: '4.8', reviews: 180, image: 'img/godox10.jpg', // ini untuk image Godox Lighting Pro Series Gen 1
        overview: "Lampu studio serbaguna (Continuous LED) bertenaga tinggi. Menghasilkan pencahayaan yang stabil dan merata, ideal untuk wawancara, podcast, maupun fotografi potret. Mendukung Bowens mount untuk kemudahan menggunakan softbox.",
        detailedSpecs: { "Power Consumption": "60W", "Color Temperature": "5600K ± 200K", "CRI": "96+", "TLCI": "97+", "Dimming Range": "10%-100%", "Cooling System": "Built-in Fan & Heatsink", "Mount Type": "Bowens Mount" },
        included: generateIncluded('lighting')
    },
    { 
        id: 11, categoryId: 'lighting', categoryName: 'Lighting', brand: 'Godox', name: 'Godox Lighting Pro Series Gen 2', price: 220000, stock: 5, rating: '4.7', reviews: 110, image: 'img/godox11.jpg', // ini untuk image Godox Lighting Pro Series Gen 2
        overview: "Lampu kilat (Strobe) nirkabel portabel dengan output power yang besar. Baterai internal yang tahan lama memungkinkan pemotretan outdoor yang fleksibel tanpa perlu terhubung ke colokan listrik.",
        detailedSpecs: { "Max Power": "400Ws", "Guide Number": "72m at ISO 100", "Recycle Time": "0.01-0.9 sec", "Flashes per Charge": "390 Full Power", "Color Temperature": "5600K ± 200K", "Wireless System": "Built-in 2.4G X System", "Sync Mode": "HSS up to 1/8000s" },
        included: generateIncluded('lighting')
    },
    { 
        id: 12, categoryId: 'lighting', categoryName: 'Lighting', brand: 'Aputure', name: 'Aputure Lighting Pro Series Gen 3', price: 350000, stock: 5, rating: '4.9', reviews: 90, image: 'img/aputure12.jpg', // ini untuk image Aputure Lighting Pro Series Gen 3
        overview: "Lampu tabung RGBWW (Tube Light) yang sangat kreatif. Bisa menghasilkan jutaan warna dan efek pencahayaan khusus (seperti lampu polisi, kembang api) yang dapat dikontrol secara nirkabel melalui aplikasi smartphone.",
        detailedSpecs: { "Power": "36W", "Color Temperature": "2700K - 12000K", "RGB Tuning": "Full HSI Color Control", "CRI": "95", "TLCI": "98", "Battery Life": "2 Hours at 100%", "Control": "On-board, Sidus Link App" },
        included: generateIncluded('lighting')
    },

    // --- AUDIO (13-15) ---
    { 
        id: 13, categoryId: 'audio', categoryName: 'Audio', brand: 'Rode', name: 'Rode Audio Pro Series Gen 1', price: 180000, stock: 5, rating: '4.9', reviews: 280, image: 'img/rode13.jpg', // ini untuk image Rode Audio Pro Series Gen 1
        overview: "Sistem mikrofon nirkabel dual-channel yang paling ringkas dan serbaguna di dunia. Ideal untuk vlog, interview, dan pembuatan film. Dilengkapi dengan memori internal untuk merekam backup audio sehingga Anda tidak akan pernah kehilangan hasil wawancara.",
        detailedSpecs: { "Acoustic Principle": "Pre-polarised pressure transducer", "Polar Pattern": "Omnidirectional", "Frequency Range": "50Hz – 20kHz", "Max SPL": "100 dB SPL", "Analog Inputs": "3.5mm TRS (lavalier)", "Transmission Range": "200m (line of sight)", "Battery Life": "Up to 7 hours" },
        included: generateIncluded('audio')
    },
    { 
        id: 14, categoryId: 'audio', categoryName: 'Audio', brand: 'DJI', name: 'DJI Audio Pro Series Gen 2', price: 210000, stock: 5, rating: '4.8', reviews: 160, image: 'img/dji14.jpg', // ini untuk image DJI Audio Pro Series Gen 2
        overview: "Sistem audio nirkabel pintar dari DJI. Kualitas suara sebening kristal dengan fitur noise cancelling aktif, ditambah desain case pengisian daya yang memudahkan portabilitas sekaligus pairing instan.",
        detailedSpecs: { "Wireless Tech": "2.4 GHz digital transmission", "Operating Range": "250m", "Audio Recording": "32-bit Float Internal Recording", "Microphone Type": "Omnidirectional", "Battery Life (TX)": "5.5 Hours", "Battery Life (w/ Case)": "Up to 15 Hours", "Display": "OLED Touchscreen" },
        included: generateIncluded('audio')
    },
    { 
        id: 15, categoryId: 'audio', categoryName: 'Audio', brand: 'Shure', name: 'Shure Audio Pro Series Gen 3', price: 250000, stock: 5, rating: '5.0', reviews: 195, image: 'img/shure15.jpg', // ini untuk image Shure Audio Pro Series Gen 3
        overview: "Standar industri mutlak untuk podcasting dan broadcasting. Mikrofon dinamis ini mereject noise latar belakang dengan sangat baik dan memberikan karakter suara vokal yang dalam, hangat, dan sangat profesional.",
        detailedSpecs: { "Type": "Dynamic (moving coil)", "Frequency Response": "50 to 20,000 Hz", "Polar Pattern": "Cardioid", "Output Impedance": "150 ohms", "Sensitivity": "-59.0 dBV/Pa (1.12 mV)", "Connector": "Three-pin professional audio (XLR)", "Weight": "765g" },
        included: generateIncluded('audio')
    }
];

const categoryImages = {
    kamera: 'img/canon1.jpg',
    lensa: 'img/sony4.jpg',
    drone: 'img/dji7.jpg',
    lighting: 'img/godox10.jpg',
    audio: 'img/rode13.jpg'
};

function initializeDatabase() {
    if (!localStorage.getItem('flare_products')) {
        localStorage.setItem('flare_products', JSON.stringify(flareDatabase));
    }
    return JSON.parse(localStorage.getItem('flare_products'));
}

function mapInventoryProduct(item) {
    const categoryId = String(item.kategori || '').toLocaleLowerCase('id-ID');
    const brand = String(item.brand || 'FlareCam');
    const name = String(item.nama_barang || 'Peralatan');
    const normalizedName = name.toLocaleLowerCase('id-ID');
    const presentation = flareDatabase.find(product =>
        product.categoryId === categoryId &&
        product.brand.toLocaleLowerCase('id-ID') === brand.toLocaleLowerCase('id-ID') &&
        normalizedName.startsWith(product.name.toLocaleLowerCase('id-ID'))
    ) || flareDatabase.find(product =>
        product.categoryId === categoryId &&
        product.brand.toLocaleLowerCase('id-ID') === brand.toLocaleLowerCase('id-ID')
    );

    return {
        ...(presentation || {}),
        id: Number(item.id),
        sku: item.kode_barang,
        categoryId,
        categoryName: item.kategori,
        brand,
        name,
        price: Number(item.harga),
        stock: Number(item.jumlah),
        image: presentation?.image || categoryImages[categoryId] || categoryImages.kamera,
        rating: presentation?.rating || '5.0',
        reviews: presentation?.reviews || 0,
        overview: item.deskripsi || presentation?.overview || 'Informasi produk belum tersedia.',
        detailedSpecs: presentation?.detailedSpecs || { 'Kondisi & Kelengkapan': item.deskripsi || '-' },
        included: presentation?.included || generateIncluded(categoryId)
    };
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

// --- CORE APPLICATION LOGIC ---
const app = {
    products: initializeDatabase(),
    user: JSON.parse(localStorage.getItem('flare_user')) || null,
    rentals: JSON.parse(localStorage.getItem('flare_rentals')) || [],
    currentFilter: 'all',
    serverInventory: false,
    localDemo: false,
    returnProcessing: false,

    async init() {
        this.localDemo = window.location.protocol === 'file:';
        if (!this.localDemo) {
            try {
                const response = await fetch('api/produk.php', {
                    headers: { Accept: 'application/json' }
                });
                const result = await response.json();
                if (!response.ok) {
                    throw new Error(result.error || 'Data inventaris gagal dimuat.');
                }
                if (!Array.isArray(result)) {
                    throw new Error('Format data inventaris tidak valid.');
                }
                this.products = result.map(mapInventoryProduct);
                this.serverInventory = true;
                this.rentals = JSON.parse(localStorage.getItem('flare_rentals_php')) || [];
            } catch (error) {
                console.error('Gagal memuat inventaris PHP:', error);
                this.products = [];
                this.inventoryLoadError = true;
            }
        }
        this.startCronJob();
        this.navigate('home');
        if (this.inventoryLoadError) {
            this.showToast('Katalog gagal terhubung ke database. Periksa koneksi PHP dan MySQL.', 'danger');
        }
    },

    persistRentals() {
        const key = this.serverInventory ? 'flare_rentals_php' : 'flare_rentals';
        localStorage.setItem(key, JSON.stringify(this.rentals));
    },

    async updateServerStock(action, id) {
        const response = await fetch('api/stok.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ action, id })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Stok gagal diperbarui.');
        }
        return Number(result.stock);
    },

    showToast(message, type = 'success') {
        const toastEl = document.getElementById('liveToast');
        document.getElementById('toastMessage').innerText = message;
        toastEl.className = `toast align-items-center text-bg-${type} border-0 shadow`;
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    },

    inventoryNotice() {
        return this.inventoryLoadError
            ? `<div class="alert alert-warning border-0 shadow-sm rounded-4 mb-4" role="alert">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Katalog belum terhubung ke database. Pastikan MySQL aktif dan database rental sudah disiapkan.
               </div>`
            : '';
    },

    startCronJob() {
        setInterval(async () => {
            if (this.returnProcessing) return;
            let now = Date.now();
            const expiredRentals = this.rentals.filter(r => now > r.returnTime);
            if (expiredRentals.length === 0) return;
            this.returnProcessing = true;

            try {
                let hasReturnedItems = false;
                const updatedRentals = this.rentals.filter(r => now <= r.returnTime);
                for (const rental of expiredRentals) {
                    const product = this.products.find(p => p.id === rental.productId);
                    if (!product) {
                        updatedRentals.push(rental);
                        continue;
                    }
                    try {
                        product.stock = this.serverInventory
                            ? await this.updateServerStock('return', product.id)
                            : product.stock + rental.qty;
                        hasReturnedItems = true;
                    } catch (error) {
                        console.error('Gagal mengembalikan stok:', error);
                        updatedRentals.push(rental);
                        this.showToast(error.message, 'danger');
                    }
                }
                this.rentals = updatedRentals;
                if (!this.serverInventory) {
                    localStorage.setItem('flare_products', JSON.stringify(this.products));
                }
                this.persistRentals();
                
                if (document.getElementById('profile-page')) this.renderProfile();
                if (document.getElementById('products-page')) this.renderProductsList();
                if (hasReturnedItems) {
                    this.showToast('Beberapa barang telah dikembalikan otomatis oleh sistem.', 'info');
                }
            } finally {
                this.returnProcessing = false;
            }
        }, 5000);
    },

    scrollToSection(id) {
        if (!document.getElementById('home-page')) {
            this.navigate('home');
        }
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    },

    navigate(route, param = null) {
        this.renderNav();
        const container = document.getElementById('app-container');
        window.scrollTo(0, 0);

        if (route === 'home') this.renderHome(container);
        else if (route === 'products') this.renderProductsPage(container);
        else if (route === 'profile') this.renderProfile(container);
        else if (route === 'detail') this.renderDetail(container, param);
    },

    renderNav() {
        const actions = document.getElementById('nav-actions');
        const inventoryLink = `
            <a href="index.php" class="btn btn-outline-success fw-bold rounded-pill px-3 ms-2">
                <i class="bi bi-box-seam me-1"></i>Kelola Inventaris
            </a>
        `;
        if (this.user) {
            actions.innerHTML = `
                <button class="btn btn-light fw-medium rounded-pill px-3 shadow-sm border" onclick="app.navigate('profile')">
                    <i class="bi bi-person-circle me-2 text-success"></i>Halo, ${escapeHtml(this.user.email)}
                </button>
                <button class="btn btn-outline-danger rounded-pill px-3 ms-2" onclick="app.logout()">Keluar</button>
                ${inventoryLink}
            `;
        } else {
            actions.innerHTML = `
                <button class="btn btn-outline-dark fw-bold rounded-pill px-4 me-2">Daftar</button>
                <button class="btn btn-success fw-bold rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#loginModal">Masuk</button>
                ${inventoryLink}
            `;
        }
    },

    renderHome(container) {
        const topProducts = this.products.slice(0, 4);
        container.innerHTML = `
            <div class="container mt-4" id="home-page">
                ${this.inventoryNotice()}
                <div class="hero-section row align-items-center mb-5">
                    <div class="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
                        <h1 class="display-4 fw-bolder mb-3" style="letter-spacing:-1px;">Satu Tempat untuk Semua Kebutuhan Fotografi.</h1>
                        <p class="text-muted fs-5 mb-4">Sewa peralatan profesional mulai dari kamera flagship, lensa premium, hingga drone tercanggih. Proses cepat, harga transparan.</p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-success btn-lg fw-bold px-4 rounded-pill" onclick="app.navigate('products')">Sewa Sekarang</button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-img-container">
                            <div class="floating-badge top-0 start-0 mt-3 ms-3"><i class="bi bi-star-fill text-warning me-1"></i>Rating 4.9+</div>
                            <div class="floating-badge bottom-0 end-0 mb-4 me-4"><i class="bi bi-truck text-success me-1"></i>Pengiriman Cepat</div>
                            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" class="hero-img" alt="Hero">
                        </div>
                    </div>
                </div>

                <div class="mb-5">
                    <div class="d-flex justify-content-between align-items-end mb-4">
                        <h4 class="fw-bold m-0">Kategori Populer</h4>
                        <a href="javascript:void(0)" class="text-success text-decoration-none fw-medium" onclick="app.navigate('products')">Lihat Semua <i class="bi bi-arrow-right"></i></a>
                    </div>
                    <div class="d-flex gap-4 overflow-auto pb-3 hide-scrollbar">
                        ${categories.map(c => `
                            <div class="category-item" onclick="app.filterProducts('${c.id}')">
                                <div class="category-icon-box"><i class="bi ${c.icon}"></i></div>
                                <span class="small fw-medium">${c.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="promo-banner mb-5 row align-items-center">
                    <div class="col-md-8">
                        <span class="badge bg-white text-success mb-3 px-3 py-2 rounded-pill">Promo Terbatas</span>
                        <h2 class="fw-bold mb-3">Upgrade Hasil Karyamu dengan Diskon 30%</h2>
                        <p class="mb-4 opacity-75">Khusus untuk penyewaan paket wedding dan cinema di akhir pekan ini. Gunakan kode: CREATOR30.</p>
                        <button class="btn btn-light text-success fw-bold px-4 py-2 rounded-pill">Lihat Promo</button>
                    </div>
                </div>

                <div class="mb-5">
                    <h4 class="fw-bold mb-4">Produk Terlaris</h4>
                    <div class="row g-4">
                        ${topProducts.length
                            ? topProducts.map(p => this.generateProductCard(p)).join('')
                            : '<div class="col-12"><p class="text-muted mb-0">Belum ada produk yang tersedia.</p></div>'}
                    </div>
                </div>

                <div id="paket-section" class="mb-5 pt-4">
                    <h4 class="fw-bold mb-4">Paket Aktivitas Kreatif</h4>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card bg-dark text-white border-0 overflow-hidden" style="height:200px; border-radius: 16px;">
                                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600" class="card-img" alt="Wedding" style="object-fit:cover; opacity: 0.6; height:100%;">
                                <div class="card-img-overlay d-flex flex-column justify-content-end p-4">
                                    <h5 class="card-title fw-bold mb-3">Wedding Cinema</h5>
                                    <button class="btn btn-light btn-sm w-50 fw-bold rounded-pill text-success" onclick="app.navigate('products')">Lihat Paket</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bg-dark text-white border-0 overflow-hidden" style="height:200px; border-radius: 16px;">
                                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600" class="card-img" alt="Traveling" style="object-fit:cover; opacity: 0.6; height:100%;">
                                <div class="card-img-overlay d-flex flex-column justify-content-end p-4">
                                    <h5 class="card-title fw-bold mb-3">Traveling & Vlog</h5>
                                    <button class="btn btn-light btn-sm w-50 fw-bold rounded-pill text-success" onclick="app.navigate('products')">Lihat Paket</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bg-dark text-white border-0 overflow-hidden" style="height:200px; border-radius: 16px;">
                                <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=600" class="card-img" alt="Podcast" style="object-fit:cover; opacity: 0.6; height:100%;">
                                <div class="card-img-overlay d-flex flex-column justify-content-end p-4">
                                    <h5 class="card-title fw-bold mb-3">Podcast Pro</h5>
                                    <button class="btn btn-light btn-sm w-50 fw-bold rounded-pill text-success" onclick="app.navigate('products')">Lihat Paket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="inspirasi-section" class="mb-5 pt-4">
                    <h4 class="fw-bold mb-2">Inspirasi Karya</h4>
                    <p class="text-muted mb-4">Lihat apa yang dihasilkan komunitas kami dengan gear dari FlareCam.</p>
                    <div class="row g-3">
                        <div class="col-6 col-md-3"><img src="img/inspirasi1.jpg" class="img-fluid rounded-4 h-100 object-fit-cover shadow-sm" alt="Inspirasi fotografi 1"></div>
                        <div class="col-6 col-md-3"><img src="img/inspirasi2.jpg" class="img-fluid rounded-4 h-100 object-fit-cover shadow-sm" alt="Inspirasi fotografi 2"></div>
                        <div class="col-6 col-md-3"><img src="img/inspirasi3.1.jpg" class="img-fluid rounded-4 h-100 object-fit-cover shadow-sm" alt="Inspirasi fotografi 3"></div>
                        <div class="col-6 col-md-3"><img src="img/inspirasi4.2.jpg" class="img-fluid rounded-4 h-100 object-fit-cover shadow-sm" alt="Inspirasi fotografi 4"></div>
                    </div>
                </div>

                <div class="join-banner mb-5">
                    <h2 class="fw-bold mb-3">Siap Berkarya Hari Ini?</h2>
                    <p class="text-muted mb-4">Bergabunglah dengan ribuan kreator lainnya dan wujudkan visual impianmu dengan peralatan terbaik.</p>
                    <div class="d-flex justify-content-center gap-3">
                        ${this.user ? '' : `<button class="btn btn-success fw-bold px-4 py-2 rounded-pill shadow" data-bs-toggle="modal" data-bs-target="#loginModal">Daftar Sekarang</button>`}
                        <a href="https://wa.me/6285137955855" target="_blank" class="btn btn-outline-success fw-bold px-4 py-2 rounded-pill bg-white shadow-sm text-decoration-none">Hubungi Sales</a>
                    </div>
                </div>
            </div>
        `;
    },

    renderProductsPage(container) {
        container.innerHTML = `
            <div class="container mt-4" id="products-page">
                ${this.inventoryNotice()}
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="filter-sidebar bg-white p-4 rounded-4 border shadow-sm">
                            <h5 class="fw-bold mb-4">Filter</h5>
                            <div class="filter-section mb-4">
                                <h6>Kategori</h6>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="radio" name="cat" id="cat-all" onchange="app.filterProducts('all')" ${this.currentFilter === 'all' ? 'checked' : ''}>
                                    <label class="form-check-label text-muted" for="cat-all">Semua Kategori</label>
                                </div>
                                ${categories.map(c => `
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="cat" id="cat-${c.id}" onchange="app.filterProducts('${c.id}')" ${this.currentFilter === c.id ? 'checked' : ''}>
                                        <label class="form-check-label text-muted" for="cat-${c.id}">${c.name}</label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="fw-bold m-0" id="product-count">Menampilkan Produk</h5>
                            ${this.localDemo ? '<button class="btn btn-sm btn-outline-danger rounded-pill px-3" onclick="app.resetDB()"><i class="bi bi-arrow-clockwise me-1"></i>Reset DB</button>' : ''}
                        </div>
                        <div class="row g-4" id="product-grid"></div>
                    </div>
                </div>
            </div>
        `;
        this.renderProductsList();
    },

    filterProducts(catId) {
        this.currentFilter = catId;
        if (document.getElementById('products-page')) {
            this.renderProductsList();
        } else {
            this.navigate('products');
        }
    },

    renderProductsList() {
        const grid = document.getElementById('product-grid');
        if (!grid) return;

        let filtered = this.products;
        if (this.currentFilter !== 'all') {
            filtered = this.products.filter(p => p.categoryId === this.currentFilter);
        }

        document.getElementById('product-count').innerText = `Menampilkan ${filtered.length} produk`;
        grid.innerHTML = filtered.length
            ? filtered.map(p => this.generateProductCard(p)).join('')
            : `<div class="col-12">
                    <div class="text-center py-5 border rounded-4 bg-light">
                        <i class="bi bi-camera fs-1 text-success opacity-50 mb-3 d-block"></i>
                        <h6 class="fw-bold">${this.inventoryLoadError ? 'Katalog belum bisa dimuat' : 'Belum ada barang di kategori ini'}</h6>
                        <p class="text-muted small mb-0">${this.inventoryLoadError
                            ? 'Coba lagi setelah layanan MySQL dan koneksi PHP tersedia.'
                            : 'Silakan pilih kategori lain atau cek kembali nanti.'}</p>
                    </div>
               </div>`;
    },

    generateProductCard(p) {
        const isAvailable = p.stock > 0;
        const statusClass = isAvailable ? 'status-available' : 'status-empty';
        const statusText = isAvailable ? `Tersedia: ${p.stock}` : 'Habis';
        const btnClass = isAvailable ? 'btn-outline-success' : 'btn-secondary disabled';

        return `
            <div class="col-md-6 col-lg-4">
                <div class="product-card" onclick="app.navigate('detail', ${p.id})">
                    <div class="product-img-wrapper">
                        <span class="status-badge ${statusClass}">${statusText}</span>
                        <img src="${escapeHtml(p.image)}" class="product-img" alt="${escapeHtml(p.name)}">
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <span class="text-muted small">${escapeHtml(p.categoryName)} • ${escapeHtml(p.brand)}</span>
                            <span class="small fw-bold"><i class="bi bi-star-fill text-warning me-1"></i>${p.rating} (${p.reviews})</span>
                        </div>
                        <h6 class="fw-bold mb-3 lh-base">${escapeHtml(p.name)}</h6>
                        <div class="mt-auto">
                            <h6 class="text-success fw-bold m-0">Rp${p.price.toLocaleString('id-ID')} <span class="text-muted small fw-normal">/hari</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // --- HALAMAN DETAIL PRODUK (TERBARU DENGAN TABS PONDOKLENSA STYLE) ---
    renderDetail(container, id) {
        const p = this.products.find(x => x.id === id);
        if (!p) return this.navigate('products');

        const isAvailable = p.stock > 0;
        
        // Membangun Table Spesifikasi HTML
        let tableHtml = '<table class="table table-bordered table-specs"><tbody>';
        for (const [key, value] of Object.entries(p.detailedSpecs)) {
            tableHtml += `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(value)}</td></tr>`;
        }
        tableHtml += '</tbody></table>';

        // Membangun Included Grid HTML
        let includedHtml = '<div class="row g-4">';
        p.included.forEach(item => {
            includedHtml += `
                <div class="col-6 col-md-3">
                    <div class="included-card">
                        <img src="${item.img}" alt="${item.name}">
                        <h6>${item.name}</h6>
                    </div>
                </div>
            `;
        });
        includedHtml += '</div>';

        container.innerHTML = `
            <div class="container mt-4 mb-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)" class="text-success text-decoration-none" onclick="app.navigate('home')">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)" class="text-success text-decoration-none" onclick="app.navigate('products')">Produk</a></li>
                        <li class="breadcrumb-item active">${escapeHtml(p.name)}</li>
                    </ol>
                </nav>

                <div class="row mb-5">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <div class="position-relative border p-3 rounded text-center h-100 d-flex align-items-center justify-content-center">
                            <img src="${escapeHtml(p.image)}" class="img-fluid" style="max-height: 400px; object-fit: contain;" alt="${escapeHtml(p.name)}">
                        </div>
                    </div>
                    <div class="col-md-6 d-flex flex-column justify-content-start px-md-4 pt-3">
                        <h2 class="fw-bolder mb-3">${escapeHtml(p.name)}</h2>
                        
                        <div class="d-flex align-items-center mb-4">
                            <div class="me-4">
                                <span class="d-block text-muted small mb-1">Cities Available</span>
                                <div class="d-flex align-items-center"><span class="badge bg-success rounded-circle p-1 me-2"></span> Salatiga</div>
                            </div>
                            <div>
                                <span class="d-block text-muted small mb-1">Stock Status</span>
                                <div class="d-flex align-items-center">
                                    <span class="badge ${isAvailable ? 'bg-success' : 'bg-danger'} rounded-circle p-1 me-2"></span> 
                                    ${isAvailable ? p.stock + ' Available' : 'Not Available'}
                                </div>
                            </div>
                        </div>
                        
                        <h1 class="text-success fw-bolder mb-4">Rp${p.price.toLocaleString('id-ID')} <span class="fs-6 text-muted fw-normal">/ Hari</span></h1>
                        
                        <button class="btn ${isAvailable ? 'btn-success' : 'btn-secondary'} btn-lg w-100 fw-bold rounded-pill py-3 shadow" 
                            ${isAvailable ? `onclick="app.openRentModal(${p.id})"` : 'disabled'}>
                            <i class="bi bi-cart-plus me-2"></i>${isAvailable ? 'Sewa Sekarang' : 'Stok Habis'}
                        </button>
                    </div>
                </div>

                <!-- TABS (OVERVIEW, SPESIFICATION, INCLUDED) -->
                <div class="row mt-5">
                    <div class="col-12">
                        <ul class="nav nav-tabs custom-tabs" id="detailTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab">OVERVIEW</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="spec-tab" data-bs-toggle="tab" data-bs-target="#spec" type="button" role="tab">SPESIFICATION</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="included-tab" data-bs-toggle="tab" data-bs-target="#included" type="button" role="tab">INCLUDED</button>
                            </li>
                        </ul>
                        
                        <div class="tab-content" id="detailTabsContent">
                            <div class="tab-pane fade show active py-4" id="overview" role="tabpanel">
                                <p class="text-muted" style="line-height: 1.8; font-size: 1rem;">${escapeHtml(p.overview)}</p>
                            </div>
                            <div class="tab-pane fade py-4" id="spec" role="tabpanel">
                                ${tableHtml}
                            </div>
                            <div class="tab-pane fade py-4" id="included" role="tabpanel">
                                ${includedHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    openRentModal(id) {
        if (!this.user) {
            new bootstrap.Modal(document.getElementById('loginModal')).show();
            this.showToast('Silakan masuk terlebih dahulu.', 'warning');
            return;
        }
        
        const p = this.products.find(x => x.id === id);
        if (p.stock <= 0) return;

        document.getElementById('rentProductId').value = p.id;
        document.getElementById('rentProductName').innerText = p.name;
        document.getElementById('rentProductPrice').innerText = `Rp${p.price.toLocaleString('id-ID')} / hari`;
        document.getElementById('rentImage').src = p.image;
        document.getElementById('rentDuration').value = '';
        
        new bootstrap.Modal(document.getElementById('rentModal')).show();
    },

    async processRent() {
        const id = parseInt(document.getElementById('rentProductId').value);
        const duration = parseInt(document.getElementById('rentDuration').value);
        
        if (isNaN(duration) || duration <= 0) {
            this.showToast('Masukkan durasi yang valid!', 'danger');
            return;
        }

        let pIndex = this.products.findIndex(x => x.id === id);
        let p = this.products[pIndex];

        if (!p || p.stock <= 0) {
            this.showToast('Stok barang sudah habis.', 'warning');
            return;
        }

        try {
            this.products[pIndex].stock = this.serverInventory
                ? await this.updateServerStock('rent', p.id)
                : p.stock - 1;
            this.rentals.push({
                id: 'TRX-' + Date.now(),
                productId: p.id,
                productName: p.name,
                image: p.image,
                qty: 1,
                rentTime: Date.now(),
                returnTime: Date.now() + (duration * 60000) 
            });

            if (!this.serverInventory) {
                localStorage.setItem('flare_products', JSON.stringify(this.products));
            }
            this.persistRentals();

            bootstrap.Modal.getInstance(document.getElementById('rentModal')).hide();
            this.showToast(`Berhasil menyewa ${p.name}! Otomatis kembali dalam ${duration} menit.`);
            
            this.navigate('profile');
        } catch (error) {
            console.error('Gagal memproses penyewaan:', error);
            this.showToast(error.message || 'Penyewaan gagal diproses.', 'danger');
        }
    },

    renderProfile(container = document.getElementById('app-container')) {
        if (!this.user) return this.navigate('home');

        container.innerHTML = `
            <div class="container mt-5" id="profile-page">
                <div class="row mb-4">
                    <div class="col-12">
                        <div class="bg-light p-4 rounded-4 border d-flex align-items-center gap-3 shadow-sm">
                            <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fs-2" style="width:60px; height:60px;">
                                <i class="bi bi-person"></i>
                            </div>
                            <div>
                                <h4 class="fw-bold m-0">${escapeHtml(this.user.email)}</h4>
                                <p class="text-muted m-0">Member FlareCam</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5 class="fw-bold mb-4">Barang yang Sedang Disewa (${this.rentals.length})</h5>
                        ${this.rentals.length === 0 ? `
                            <div class="text-center py-5 border rounded-4 bg-light">
                                <i class="bi bi-box-seam fs-1 text-muted mb-3 d-block"></i>
                                <h6 class="fw-bold">Belum ada barang yang disewa</h6>
                                <button class="btn btn-success mt-3 rounded-pill px-4 shadow" onclick="app.navigate('products')">Sewa Sekarang</button>
                            </div>
                        ` : `
                            <div class="table-custom bg-white shadow-sm">
                                <table class="table table-hover align-middle mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="py-3 px-4">Produk</th>
                                            <th>Waktu Sewa</th>
                                            <th>Batas Pengembalian</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${this.rentals.map(r => {
                                            let isLate = Date.now() > r.returnTime;
                                            return `
                                                <tr>
                                                    <td class="py-3 px-4">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <img src="${escapeHtml(r.image)}" alt="${escapeHtml(r.productName)}" class="rounded shadow-sm" width="40" height="40" style="object-fit:cover;">
                                                            <span class="fw-bold">${escapeHtml(r.productName)}</span>
                                                        </div>
                                                    </td>
                                                    <td class="text-muted small">${new Date(r.rentTime).toLocaleTimeString('id-ID')}</td>
                                                    <td class="${isLate ? 'text-danger fw-bold' : 'text-muted small'}">${new Date(r.returnTime).toLocaleTimeString('id-ID')}</td>
                                                    <td>
                                                        ${isLate ? '<span class="badge bg-warning text-dark px-2 py-1">Memproses...</span>' : '<span class="badge bg-success px-2 py-1 shadow-sm">Disewa</span>'}
                                                    </td>
                                                </tr>
                                            `;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    },

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
        if (email.length > 2 && pass.length > 0) {
            this.user = { email: email };
            localStorage.setItem('flare_user', JSON.stringify(this.user));
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            this.showToast('Login berhasil! Selamat datang.');
            this.navigate('home');
        } else {
            this.showToast('Masukkan detail login yang valid.', 'danger');
        }
    },

    logout() {
        this.user = null;
        localStorage.removeItem('flare_user');
        this.showToast('Anda telah keluar.');
        this.navigate('home');
    },

    resetDB() {
        localStorage.removeItem('flare_products');
        localStorage.removeItem('flare_rentals');
        location.reload();
    }
};

document.addEventListener('DOMContentLoaded', () => { app.init(); });