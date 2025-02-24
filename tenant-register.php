<?php include("includes/header.php"); ?>

<section class="register-form">
  <div class="container">
    <h1>Tenant Registration</h1>
    <form action="process-tenant-register.php" method="post">
      <label for="name">Full Name:</label>
      <input type="text" name="name" id="name" required>
      
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>
      
      <label for="phone">Phone:</label>
      <input type="text" name="phone" id="phone" required>
      
      <label for="address">Address:</label>
      <textarea name="address" id="address" required></textarea>
      
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" required>
      
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" name="confirm_password" id="confirm_password" required>
      
      <button type="submit">Register</button>
    </form>
    <p>Already registered? <a href="tenant-login.php">Login here</a></p>
  </div>
</section>

<?php include("includes/footer.php"); ?>
