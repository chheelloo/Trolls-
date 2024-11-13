// Toggle password visibility for the "Password" field
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
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

// Password validation function
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>?\\|`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};:'",.<>?\\|`~]{8,}$/;
    return passwordRegex.test(password);
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    let valid = true;

    // Email validation (basic)
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required!';
        valid = false;
    }


    if (!confirmPassword){
        document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required!';
        valid = false;
    }

    // Password validation

    if (!password){
        document.getElementById('passwordError').textContent = 'Password is required!';
        valid = false;
    }
    else if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character!';
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match!';
        valid = false;
    }

    if (!valid) return;

    fetch(this.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Account created successfully! You can now log in.');
            window.location.href = '/index.html'; // Redirect on success
        } else {
            alert(data.message); // Display the error message if signup fails
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
    
