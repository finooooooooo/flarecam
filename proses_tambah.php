<?php
require_once __DIR__ . "/config/koneksi.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $kode   = trim($_POST["kode_barang"] ?? "");
    $nama   = trim($_POST["nama_barang"] ?? "");
    $brand  = trim($_POST["brand"] ?? "FlareCam");
    $kat    = trim($_POST["kategori"] ?? "");
    $jumlah = (int)($_POST["jumlah"] ?? 0);
    $harga  = (int)($_POST["harga"] ?? 0);
    $desc   = trim($_POST["deskripsi"] ?? "");

    if (empty($kode) || empty($nama) || empty($kat) || $jumlah < 1 || $harga < 0) {
        setFlash("danger", "Semua kolom bertanda bintang wajib diisi!");
        header("Location: tambah.php");
        exit;
    }

    try {
        $cek = $pdo->prepare("SELECT id FROM kamera WHERE kode_barang = :kode");
        $cek->execute([":kode" => $kode]);
        if ($cek->fetch()) {
            setFlash("danger", "Kode barang '{$kode}' sudah ada di database!");
            header("Location: tambah.php");
            exit;
        }

        $sql = "INSERT INTO kamera (kode_barang, nama_barang, brand, kategori, jumlah, harga, deskripsi)
                VALUES (:kode, :nama, :brand, :kat, :jumlah, :harga, :desc)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":kode"   => $kode,
            ":nama"   => $nama,
            ":brand"  => $brand,
            ":kat"    => $kat,
            ":jumlah" => $jumlah,
            ":harga"  => $harga,
            ":desc"   => $desc
        ]);

        setFlash("success", "Peralatan '{$nama}' berhasil ditambahkan ke inventaris FlareCam!");
        header("Location: index.php");
        exit;
    } catch (PDOException $e) {
        setFlash("danger", "Terjadi kesalahan: " . $e->getMessage());
        header("Location: tambah.php");
        exit;
    }
}
header("Location: index.php");
exit;
