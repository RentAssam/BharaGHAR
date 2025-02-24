<?php include("includes/header.php"); ?>
  
<section class="login-form">
  <h1>Tenant Login / Registration</h1>
  <form action="process-login.php" method="post">
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
    
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required>
    
    <button type="submit">Login</button>
  </form>
  <p>New tenant? <a href="tenant-register.php">Register here</a></p>
</section>
  
<?php include("includes/footer.php"); ?>
