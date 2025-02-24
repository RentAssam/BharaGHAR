<?php
// cron.php - This script sends notifications and expires listings based on their age.

include("includes/db.php");

// 1. Send notifications for listings between 40 and 44 days old
$sql_notify = "SELECT id, title, owner_email, created_at, DATEDIFF(CURDATE(), created_at) AS days_old 
               FROM properties
               WHERE DATEDIFF(CURDATE(), created_at) >= 40 
                 AND DATEDIFF(CURDATE(), created_at) < 45";
$result_notify = $conn->query($sql_notify);

if ($result_notify->num_rows > 0) {
    while ($row = $result_notify->fetch_assoc()) {
        $ownerEmail = $row["owner_email"];
        $propertyTitle = $row["title"];
        $daysOld = $row["days_old"];
        $subject = "Your property listing will expire soon";
        $message = "Dear Property Owner,\n\nYour property listing titled \"$propertyTitle\" was posted on " 
                   . $row["created_at"] . " and is now $daysOld days old. It will automatically expire after 45 days. "
                   . "Please consider renewing or updating your listing if you wish to continue advertising it.\n\nRegards,\nRentAssam Team";

        // Send email notification (ensure your server supports mail() or use an alternative mailing library)
        mail($ownerEmail, $subject, $message);
    }
}

// 2. Remove listings that are 45 days or older
$sql_expire = "DELETE FROM properties WHERE DATEDIFF(CURDATE(), created_at) >= 45";
$conn->query($sql_expire);

$conn->close();

echo "Cron job executed: Notifications sent and expired listings removed.";
?>
