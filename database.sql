CREATE DATABASE IF NOT EXISTS rental_kamera_db;
USE rental_kamera_db;

CREATE TABLE IF NOT EXISTS kamera (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_barang VARCHAR(20) NOT NULL UNIQUE,
    nama_barang VARCHAR(100) NOT NULL,
    brand VARCHAR(50) NOT NULL DEFAULT "FlareCam",
    kategori VARCHAR(50) NOT NULL,
    jumlah INT NOT NULL DEFAULT 1,
    harga INT NOT NULL,
    deskripsi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO kamera (kode_barang, nama_barang, brand, kategori, jumlah, harga, deskripsi) VALUES
("CAM-001", "Canon Kamera Pro Series Gen 1", "Canon", "Kamera", 5, 820000, "Sensor Full-Frame CMOS 45MP, 4K tanpa crop, autofokus deteksi mata & wajah dengan AI."),
("CAM-002", "Sony Kamera Pro Series Gen 3", "Sony", "Kamera", 5, 370000, "Dynamic range 15-stop, 10-bit 4:2:2 internal, magnesium alloy tangguh."),
("CAM-003", "Nikon Kamera Pro Series Gen 2", "Nikon", "Kamera", 5, 190000, "Mirrorless Z-mount serbaguna, IBIS stabilisasi kuat, sangat tajam di minim cahaya."),
("LNS-001", "Sony Lensa Pro Series Gen 1 (24-70mm f/2.8)", "Sony", "Lensa", 4, 230000, "Lensa G Master andalan dengan bukaan konstan f/2.8 dan bokeh halus."),
("LNS-002", "Canon Lensa Pro Series Gen 2 (50mm f/1.2)", "Canon", "Lensa", 3, 190000, "Lensa prime bukaan super lebar f/1.2, isolasi subjek tajam luar biasa."),
("DRN-001", "DJI Drone Pro Series Gen 1", "DJI", "Drone", 3, 450000, "Kamera Hasselblad 4/3 CMOS, video 5.1K, sensor halangan omnidireksional."),
("LGT-001", "Godox Lighting Pro Series Gen 1", "Godox", "Lighting", 6, 150000, "Continuous LED 60W, 5600K CRI 96+, Bowens mount untuk softbox."),
("AUD-001", "Rode Audio Pro Series Gen 1", "Rode", "Audio", 4, 180000, "Wireless mikrofon dual-channel, backup recording internal, transmisi 200m.");
