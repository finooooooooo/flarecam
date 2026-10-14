<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function loadEnv($filePath) {
    if (!file_exists($filePath)) return false;
    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === "" || strpos($line, "#") === 0) continue;
        if (strpos($line, "=") !== false) {
            list($key, $value) = explode("=", $line, 2);
            $key = trim($key);
            $value = trim($value, " \t\n\r\0\x0B\"'");
            $_ENV[$key] = $value;
            putenv("{$key}={$value}");
        }
    }
    return true;
}

loadEnv(__DIR__ . "/../.env");

$dbHost = $_ENV["DB_HOST"] ?? "localhost";
$dbPort = $_ENV["DB_PORT"] ?? "3306";
$dbName = $_ENV["DB_NAME"] ?? "rental_kamera_db";
$dbUser = $_ENV["DB_USER"] ?? "root";
$dbPass = $_ENV["DB_PASS"] ?? "";

try {
    $dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
    $pdo = new PDO($dsn, $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    error_log($e->getMessage());
    http_response_code(500);
    die("Koneksi database gagal. Pastikan MySQL aktif dan konfigurasi database benar.");
}

$kameraTableExists = $pdo->query("SHOW TABLES LIKE 'kamera'")->fetchColumn();
if ($kameraTableExists && !$pdo->query("SHOW COLUMNS FROM kamera LIKE 'brand'")->fetch()) {
    try {
        $pdo->exec(
            "ALTER TABLE kamera
             ADD COLUMN brand VARCHAR(50) NOT NULL DEFAULT 'FlareCam' AFTER nama_barang"
        );
        $pdo->exec(
            "UPDATE kamera
             SET brand = SUBSTRING_INDEX(nama_barang, ' ', 1)
             WHERE brand = 'FlareCam'"
        );
    } catch (PDOException $e) {
        error_log($e->getMessage());
        http_response_code(500);
        die("Kolom brand belum tersedia. Perbarui struktur database dengan hak akses ALTER.");
    }
}

function setFlash($type, $message) {
    $_SESSION["flash"] = ["type" => $type, "message" => $message];
}

function displayFlash() {
    if (isset($_SESSION["flash"])) {
        $type = $_SESSION["flash"]["type"];
        $msg  = $_SESSION["flash"]["message"];
        $icon = $type === "success" ? "bi-check-circle-fill text-success" : "bi-exclamation-triangle-fill text-danger";
        echo "
        <div class='alert alert-white border shadow-sm rounded-4 mb-4 d-flex align-items-center justify-content-between p-3' role='alert'>
            <div class='d-flex align-items-center gap-2'>
                <i class='bi {$icon} fs-4'></i>
                <div>
                    <strong class='d-block text-dark'>" . ($type === "success" ? "Berhasil!" : "Peringatan!") . "</strong>
                    <span class='text-muted small'>" . htmlspecialchars($msg, ENT_QUOTES, "UTF-8") . "</span>
                </div>
            </div>
            <button type='button' class='btn-close' data-bs-dismiss='alert'></button>
        </div>";
        unset($_SESSION["flash"]);
    }
}
