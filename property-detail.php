<?php include("includes/header.php"); ?>
  
<section class="property-detail">
  <?php
    include("includes/db.php");
    if(isset($_GET["id"])) {
      $id = intval($_GET["id"]);
      $stmt = $conn->prepare("SELECT * FROM properties WHERE id = ?");
      $stmt->bind_param("i", $id);
      $stmt->execute();
      $result = $stmt->get_result();
      if($result->num_rows > 0) {
          $row = $result->fetch_assoc();
          echo '<h1>' . htmlspecialchars($row["title"]) . '</h1>';
          echo '<img src="images/' . htmlspecialchars($row["image"]) . '" alt="' . htmlspecialchars($row["title"]) . '">';
          echo '<p><strong>Rent:</strong> ₹' . htmlspecialchars($row["rent"]) . '/month</p>';
          echo '<p><strong>Description:</strong> ' . htmlspecialchars($row["description"]) . '</p>';
          echo '<a href="tenant-login.php" class="btn">Apply Now</a>';
      } else {
          echo "<p>Property not found.</p>";
      }
      $stmt->close();
    } else {
      echo "<p>No property specified.</p>";
    }
    $conn->close();
  ?>
</section>
  
<?php include("includes/footer.php"); ?>
