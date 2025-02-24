<?php include("includes/header.php"); ?>
  
<section class="listings">
  <h1>Available Properties</h1>
  <div class="property-list">
    <?php
      include("includes/db.php");
      $sql = "SELECT * FROM properties";
      $result = $conn->query($sql);
      if($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
              echo '<div class="property-item">';
              echo '<img src="images/' . htmlspecialchars($row["image"]) . '" alt="' . htmlspecialchars($row["title"]) . '">';
              echo '<h3>' . htmlspecialchars($row["title"]) . '</h3>';
              echo '<p>Rent: ₹' . htmlspecialchars($row["rent"]) . '/month</p>';
              echo '<a href="property-detail.php?id=' . $row["id"] . '">View Details</a>';
              echo '</div>';
          }
      } else {
          echo "<p>No properties found.</p>";
      }
      $conn->close();
    ?>
  </div>
</section>
  
<?php include("includes/footer.php"); ?>
