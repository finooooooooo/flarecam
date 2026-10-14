<?php
require_once __DIR__ . "/../config/koneksi.php";

header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    header("Allow: POST");
    echo json_encode(["error" => "Metode permintaan tidak didukung."]);
    exit;
}

$payload = json_decode(file_get_contents("php://input"), true);
$id = filter_var($payload["id"] ?? null, FILTER_VALIDATE_INT);
$action = $payload["action"] ?? "";

if (!$id || !in_array($action, ["rent", "return"], true)) {
    http_response_code(400);
    echo json_encode(["error" => "Permintaan stok tidak valid."]);
    exit;
}

try {
    if ($action === "rent") {
        $stmt = $pdo->prepare(
            "UPDATE kamera SET jumlah = jumlah - 1 WHERE id = :id AND jumlah > 0"
        );
        $stmt->execute([":id" => $id]);

        if ($stmt->rowCount() === 0) {
            $check = $pdo->prepare("SELECT jumlah FROM kamera WHERE id = :id");
            $check->execute([":id" => $id]);
            $item = $check->fetch();

            http_response_code($item ? 409 : 404);
            echo json_encode([
                "error" => $item ? "Stok barang sudah habis." : "Barang tidak ditemukan."
            ]);
            exit;
        }
    } else {
        $stmt = $pdo->prepare("UPDATE kamera SET jumlah = jumlah + 1 WHERE id = :id");
        $stmt->execute([":id" => $id]);

        if ($stmt->rowCount() === 0) {
            http_response_code(404);
            echo json_encode(["error" => "Barang tidak ditemukan."]);
            exit;
        }
    }

    $check = $pdo->prepare("SELECT jumlah FROM kamera WHERE id = :id");
    $check->execute([":id" => $id]);
    echo json_encode(["stock" => (int)$check->fetchColumn()]);
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(["error" => "Stok barang gagal diperbarui."]);
}
