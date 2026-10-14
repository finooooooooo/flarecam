<?php require_once __DIR__ . "/includes/header.php"; ?>

<div class="row justify-content-center py-4">
    <div class="col-lg-8">
        <div class="card p-4 p-md-5 border rounded-4 shadow-sm bg-white">
            <div class="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
                <div>
                    <span class="badge bg-success-subtle text-success px-3 py-1 rounded-pill small fw-semibold">Form Input</span>
                    <h3 class="fw-bold text-dark mt-2 mb-0">Tambah Gear Baru</h3>
                </div>
                <a href="index.php" class="btn btn-light rounded-pill px-3 text-muted">
                    <i class="bi bi-arrow-left me-1"></i> Kembali
                </a>
            </div>

            <form action="proses_tambah.php" method="POST">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Kode Gear <span class="text-danger">*</span></label>
                        <input type="text" name="kode_barang" class="form-control form-control-lg bg-light rounded-3 fs-6" placeholder="Cth: CAM-004 atau LNS-003" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Brand / Pabrikan <span class="text-danger">*</span></label>
                        <input type="text" name="brand" class="form-control form-control-lg bg-light rounded-3 fs-6" placeholder="Cth: Sony, Canon, DJI, Godox" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Nama Barang <span class="text-danger">*</span></label>
                        <input type="text" name="nama_barang" class="form-control form-control-lg bg-light rounded-3 fs-6" placeholder="Cth: Sony Alpha 7C II" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Kategori <span class="text-danger">*</span></label>
                        <select name="kategori" class="form-select form-select-lg bg-light rounded-3 fs-6" required>
                            <option value="" disabled selected>-- Pilih Kategori --</option>
                            <option value="Kamera">Kamera</option>
                            <option value="Lensa">Lensa</option>
                            <option value="Drone">Drone</option>
                            <option value="Lighting">Lighting</option>
                            <option value="Audio">Audio</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Jumlah Stok (Unit) <span class="text-danger">*</span></label>
                        <input type="number" name="jumlah" min="1" value="1" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label small fw-bold text-dark">Tarif Sewa per Hari (Rp) <span class="text-danger">*</span></label>
                        <input type="number" name="harga" min="0" step="5000" placeholder="Cth: 250000" class="form-control form-control-lg bg-light rounded-3 fs-6" required>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label small fw-bold text-dark">Kondisi & Kelengkapan</label>
                    <textarea name="deskripsi" rows="3" class="form-control bg-light rounded-3 fs-6" placeholder="Kondisi fisik, kelengkapan baterai, charger, case..."></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2 pt-2 border-top">
                    <a href="index.php" class="btn btn-light rounded-pill px-4 fw-medium">Batal</a>
                    <button type="submit" class="btn btn-success rounded-pill px-5 fw-bold shadow-sm">
                        <i class="bi bi-check2 me-1"></i> Simpan Gear
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once __DIR__ . "/includes/footer.php"; ?>
