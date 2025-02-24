<?php
// includes/db.php
$host = "localhost";
$user = "db_username"; // replace with your DB username
$password = "db_password"; // replace with your DB password
$dbname = "rentassam_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
