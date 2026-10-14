<?php
require_once __DIR__ . "/config/koneksi.php";

$id = (int)($_GET["id"] ?? 0);
if ($id <= 0) {
    setFlash("danger", "ID barang tidak valid!");
    header("Location: index.php");
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM kamera WHERE id = :id");
$stmt->execute([":id" => $id]);
$barang = $stmt->fetch();

if (!$barang) {
    setFlash("danger", "Data barang tidak ditemukan di sistem!");
    header("Location: index.php");
    exit;
}

$kategoriList = ["Kamera", "Lensa", "Drone", "Lighting", "Audio"];
require_once __DIR__ . "/includes/header.php";
?>

<div class="row justify-content-center py-4">
    <div class="col-lg-8">
        <div class="card p-4 p-md-5 border rounded-4 shadow-sm bg-white">
            <div class="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
                <div>
                    <span class="badge bg-warning-subtle text-warning-emphasis px-3 py-1 rounded-pill small fw-semibold">Pembaruan Data</span>
                    <h3 class="fw-bold text-dark mt-2 mb-0">Edit Data Peralatan</h3>
                </div>
                <a href="index.php" class="btn btn-light rounded-pill px-3 text-muted">
                    <i class="bi bi-arrow-left me-1"></i> Kembali
                </a>
            </div>

            <form action="proses_edit.php" method="POST">
                <input type="hidden" name="id" value="<?= $barang["id"] ?>">

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Kode Gear <span class="text-danger">*</span></label>
                        <input type="text" name="kode_barang" value="<?= htmlspecialchars($barang["kode_barang"]) ?>" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Brand / Pabrikan <span class="text-danger">*</span></label>
                        <input type="text" name="brand" value="<?= htmlspecialchars($barang["brand"] ?? "FlareCam") ?>" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Nama Barang <span class="text-danger">*</span></label>
                        <input type="text" name="nama_barang" value="<?= htmlspecialchars($barang["nama_barang"]) ?>" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Kategori <span class="text-danger">*</span></label>
                        <select name="kategori" class="form-select form-select-lg bg-light rounded-3 fs-6" required>
                            <?php foreach ($kategoriList as $k): ?>
                                <option value="<?= $k ?>" <?= $barang["kategori"] === $k ? "selected" : "" ?>><?= $k ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Jumlah Stok (Unit) <span class="text-danger">*</span></label>
                        <input type="number" name="jumlah" min="0" value="<?= htmlspecialchars($barang["jumlah"]) ?>" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Tarif Sewa per Hari (Rp) <span class="text-danger">*</span></label>
                        <input type="number" name="harga" min="0" step="5000" value="<?= htmlspecialchars($barang["harga"]) ?>" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label small fw-bold text-dark">Kondisi & Kelengkapan</label>
                    <textarea name="deskripsi" rows="3" class="form-control bg-light rounded-3 fs-6"><?= htmlspecialchars($barang["deskripsi"] ?? "") ?></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2 pt-2 border-top">
                    <a href="index.php" class="btn btn-light rounded-pill px-4 fw-medium">Batal</a>
                    <button type="submit" class="btn btn-success rounded-pill px-5 fw-bold shadow-sm">
                        <i class="bi bi-arrow-repeat me-1"></i> Perbarui Data
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once __DIR__ . "/includes/footer.php"; ?>
