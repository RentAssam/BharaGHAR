<?php include("includes/header.php"); ?>

<!-- Featured Listings Section -->
<section class="featured">
  <div class="container">
    <h2>Featured Listings</h2>
    <div class="property-list">
      <?php
        include("includes/db.php");
        // Fetch the 3 most recent properties
        $sql = "SELECT * FROM properties ORDER BY id DESC LIMIT 3";
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
  </div>
</section>

<!-- Additional Information Section (Optional) -->
<section class="info">
  <div class="container">
    <h2>Why Choose BharaGHAR?</h2>
    <p>BharaGHAR provides a trusted, verified platform that connects landlords with quality tenants. Our dynamic listings and user-friendly search make it easy to find the perfect rental property in Assam. Experience transparency, modern design, and localized support with BharaGHAR.</p>
  </div>
</section>

<?php include("includes/footer.php"); ?>
