// Wait for the HTML to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {

  // Step 1: Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Step 2: Listen for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading

    // Step 3: Get and clean (trim) user inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Step 4: Prepare validation
    let isValid = true;           // Will become false if anything is wrong
    const messages = [];          // To collect all error messages

    // Validation 1: Username must be at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Validation 2: Email must contain @ and .
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Validation 3: Password must be at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Step 5: Show feedback to user
    feedbackDiv.style.display = 'block'; // Make it visible

    if (isValid) {
      // Everything is perfect!
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';        // Green color
      feedbackDiv.style.backgroundColor = '#d4edda';
    } else {
      // Show all errors at once
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';        // Red color
      feedbackDiv.style.backgroundColor = '#f8d7da';
    }
  });
});