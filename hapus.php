<?php
require_once __DIR__ . "/config/koneksi.php";

$id = $_SERVER["REQUEST_METHOD"] === "POST" ? (int)($_POST["id"] ?? 0) : 0;
if ($id > 0) {
    try {
        $stmtName = $pdo->prepare("SELECT nama_barang FROM kamera WHERE id = :id");
        $stmtName->execute([":id" => $id]);
        $barang = $stmtName->fetch();

        if ($barang) {
            $del = $pdo->prepare("DELETE FROM kamera WHERE id = :id");
            $del->execute([":id" => $id]);
            setFlash("success", "Peralatan '{$barang["nama_barang"]}' telah berhasil dihapus dari inventaris!");
        } else {
            setFlash("warning", "Barang tidak ditemukan.");
        }
    } catch (PDOException $e) {
        setFlash("danger", "Gagal menghapus: " . $e->getMessage());
    }
} else {
    setFlash("danger", "Permintaan penghapusan tidak valid.");
}
header("Location: index.php");
exit;
