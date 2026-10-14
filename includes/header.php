<?php
require_once __DIR__ . "/../config/koneksi.php";
$appName = $_ENV["APP_NAME"] ?? "FlareCam";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($appName) ?> - Kelola Inventaris</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <style>
        .table-custom-card {
            border: 1px solid #eee;
            border-radius: 20px;
            overflow: hidden;
            background: #ffffff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }
        .table-custom thead th {
            background-color: #fafafa;
            color: #666;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 16px 20px;
            border-bottom: 2px solid #eee;
        }
        .table-custom tbody td {
            padding: 18px 20px;
            border-bottom: 1px solid #f2f2f2;
            vertical-align: middle;
        }
        .badge-category {
            background-color: #e8f7f0;
            color: #00b14f;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
        }
    </style>
</head>
<body>
    <!-- Navbar Khas FlareCam -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
        <div class="container">
            <a class="navbar-brand fw-bold text-success fs-4 d-flex align-items-center gap-2" href="katalog.php">
                <i class="bi bi-camera-fill"></i>
                <span><?= htmlspecialchars($appName) ?></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navFlare">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navFlare">
                <ul class="navbar-nav mx-auto fw-medium">
                    <li class="nav-item"><a class="nav-link px-3" href="katalog.php">Katalog</a></li>
                    <li class="nav-item"><a class="nav-link px-3 active text-success fw-bold" href="index.php">Daftar Barang</a></li>
                </ul>
                <div class="d-flex align-items-center gap-2">
                    <a href="tambah.php" class="btn btn-success fw-bold rounded-pill px-4 shadow-sm">
                        <i class="bi bi-plus-lg me-1"></i> Tambah Gear
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Konten Utama -->
    <main class="container my-4">
        <?php displayFlash(); ?>
