<?php
require_once __DIR__ . "/../config/koneksi.php";

header("Content-Type: application/json; charset=utf-8");

try {
    $stmt = $pdo->query(
        "SELECT id, kode_barang, nama_barang, brand, kategori, jumlah, harga, deskripsi
         FROM kamera
         ORDER BY id ASC"
    );
    echo json_encode($stmt->fetchAll(), JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(["error" => "Data inventaris tidak dapat dimuat."]);
}
