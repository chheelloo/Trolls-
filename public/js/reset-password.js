 // Toggle password visibility for the "Password" field
 document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('newPassword');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁' : '🙈';
});

// Toggle password visibility for the "Confirm Password" field
document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁' : '🙈';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('newPassword').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }


document.querySelector('.form-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the normal way

    const resetKey = document.getElementById('resetKey').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch(this.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resetKey, newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your password has been reset successfully.');
            window.location.href = 'index.html'; // Redirect to login page
        } else {
            alert(data.message); // Display error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
