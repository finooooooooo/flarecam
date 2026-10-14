<?php
require_once __DIR__ . "/includes/header.php";

$stmt = $pdo->query("SELECT * FROM kamera ORDER BY id DESC");
$barangList = $stmt->fetchAll();
$totalItem = count($barangList);
$totalStok = array_sum(array_column($barangList, "jumlah"));
?>

<section class="hero-section mb-4 p-4 p-md-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <span class="badge bg-white text-success px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm">
                <i class="bi bi-shield-check me-1"></i> Sistem Manajemen Inventaris
            </span>
            <h1 class="display-6 fw-bold mb-2 text-dark">Inventaris Peralatan FlareCam</h1>
            <p class="text-muted mb-0">Kelola kamera, lensa, drone, lighting, dan audio rental dalam satu tempat.</p>
        </div>
        <div class="col-md-4 mt-3 mt-md-0 text-md-end">
            <div class="d-inline-flex gap-2">
                <div class="bg-white p-3 rounded-4 border shadow-sm text-start">
                    <span class="text-muted small d-block">Total Gear</span>
                    <h2 class="h4 fw-bold text-success mb-0"><?= $totalItem ?> Tipe</h2>
                </div>
                <div class="bg-white p-3 rounded-4 border shadow-sm text-start">
                    <span class="text-muted small d-block">Total Stok</span>
                    <h2 class="h4 fw-bold text-dark mb-0"><?= $totalStok ?> Unit</h2>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="table-custom-card mb-5" aria-labelledby="inventory-title">
    <div class="p-4 border-bottom d-flex flex-wrap gap-3 justify-content-between align-items-center bg-white">
        <div>
            <h2 id="inventory-title" class="h5 fw-bold text-dark m-0">Daftar Barang</h2>
            <small class="text-muted">Data tersimpan dan dikelola menggunakan PHP Native dan MySQL.</small>
        </div>
        <a href="tambah.php" class="btn btn-success fw-bold rounded-pill px-4">
            <i class="bi bi-plus-circle me-1"></i> Tambah Barang
        </a>
    </div>

    <div class="table-responsive">
        <table class="table table-custom align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Kode Barang</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Kategori</th>
                    <th scope="col" class="text-center">Jumlah</th>
                    <th scope="col" class="text-end">Harga / Hari</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Dibuat</th>
                    <th scope="col" class="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($barangList): ?>
                    <?php foreach ($barangList as $item): ?>
                        <tr>
                            <td class="text-muted fw-semibold"><?= (int)$item["id"] ?></td>
                            <td>
                                <span class="badge bg-light text-dark border px-3 py-2 rounded-pill font-monospace fw-bold">
                                    <?= htmlspecialchars($item["kode_barang"], ENT_QUOTES, "UTF-8") ?>
                                </span>
                            </td>
                            <td class="fw-bold text-dark"><?= htmlspecialchars($item["nama_barang"], ENT_QUOTES, "UTF-8") ?></td>
                            <td><?= htmlspecialchars($item["brand"] ?? "FlareCam", ENT_QUOTES, "UTF-8") ?></td>
                            <td><span class="badge-category"><?= htmlspecialchars($item["kategori"], ENT_QUOTES, "UTF-8") ?></span></td>
                            <td class="text-center">
                                <?php if ((int)$item["jumlah"] > 0): ?>
                                    <span class="badge bg-success px-3 py-2 rounded-pill"><?= (int)$item["jumlah"] ?> unit</span>
                                <?php else: ?>
                                    <span class="badge bg-danger px-3 py-2 rounded-pill">Habis</span>
                                <?php endif; ?>
                            </td>
                            <td class="text-end text-success fw-bold">Rp<?= number_format((int)$item["harga"], 0, ",", ".") ?></td>
                            <td class="small text-muted"><?= htmlspecialchars($item["deskripsi"] ?? "-", ENT_QUOTES, "UTF-8") ?></td>
                            <td class="small text-muted"><?= htmlspecialchars($item["created_at"], ENT_QUOTES, "UTF-8") ?></td>
                            <td>
                                <div class="d-flex justify-content-center gap-2">
                                    <a href="edit.php?id=<?= (int)$item["id"] ?>" class="btn btn-sm btn-outline-success rounded-pill px-3 fw-semibold">Edit</a>
                                    <form action="hapus.php" method="POST" onsubmit="return confirm('Apakah Anda yakin ingin menghapus barang ini?');">
                                        <input type="hidden" name="id" value="<?= (int)$item["id"] ?>">
                                        <button type="submit" class="btn btn-sm btn-outline-danger rounded-pill px-3 fw-semibold">Hapus</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="10" class="text-center py-5 text-muted">
                            <i class="bi bi-camera fs-1 d-block mb-3 text-success opacity-50"></i>
                            <h3 class="h6 fw-bold">Belum Ada Barang</h3>
                            <p class="small mb-3">Tambahkan barang pertama ke inventaris.</p>
                            <a href="tambah.php" class="btn btn-success rounded-pill px-4 fw-bold">Tambah Barang</a>
                        </td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</section>

<?php require_once __DIR__ . "/includes/footer.php"; ?>
