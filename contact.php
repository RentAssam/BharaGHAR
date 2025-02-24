<?php include("includes/header.php"); ?>
  
<section class="contact">
  <h1>Contact Us</h1>
  <form action="process-contact.php" method="post">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required>
    
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
    
    <label for="message">Message:</label>
    <textarea name="message" id="message" required></textarea>
    
    <button type="submit">Send Message</button>
  </form>
</section>
  
<?php include("includes/footer.php"); ?>
