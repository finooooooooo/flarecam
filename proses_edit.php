<?php
require_once __DIR__ . "/config/koneksi.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id     = (int)($_POST["id"] ?? 0);
    $kode   = trim($_POST["kode_barang"] ?? "");
    $nama   = trim($_POST["nama_barang"] ?? "");
    $brand  = trim($_POST["brand"] ?? "FlareCam");
    $kat    = trim($_POST["kategori"] ?? "");
    $jumlah = (int)($_POST["jumlah"] ?? 0);
    $harga  = (int)($_POST["harga"] ?? 0);
    $desc   = trim($_POST["deskripsi"] ?? "");

    if ($id <= 0 || empty($kode) || empty($nama) || empty($kat) || $jumlah < 0 || $harga < 0) {
        setFlash("danger", "Semua kolom formulir harus valid!");
        header("Location: edit.php?id={$id}");
        exit;
    }

    try {
        $cek = $pdo->prepare("SELECT id FROM kamera WHERE kode_barang = :kode AND id != :id");
        $cek->execute([":kode" => $kode, ":id" => $id]);
        if ($cek->fetch()) {
            setFlash("danger", "Kode '{$kode}' sudah digunakan barang lain!");
            header("Location: edit.php?id={$id}");
            exit;
        }

        $sql = "UPDATE kamera SET
                    kode_barang = :kode,
                    nama_barang = :nama,
                    brand       = :brand,
                    kategori    = :kat,
                    jumlah      = :jumlah,
                    harga       = :harga,
                    deskripsi   = :desc
                WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":kode"   => $kode,
            ":nama"   => $nama,
            ":brand"  => $brand,
            ":kat"    => $kat,
            ":jumlah" => $jumlah,
            ":harga"  => $harga,
            ":desc"   => $desc,
            ":id"     => $id
        ]);

        setFlash("success", "Data gear '{$nama}' berhasil diperbarui!");
        header("Location: index.php");
        exit;
    } catch (PDOException $e) {
        setFlash("danger", "Gagal memperbarui: " . $e->getMessage());
        header("Location: edit.php?id={$id}");
        exit;
    }
}
header("Location: index.php");
exit;
