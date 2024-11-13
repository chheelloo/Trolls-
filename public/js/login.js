// Password visibility toggle
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁' : '🙈';
});

// Password strength validation
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strengthMessage = document.getElementById('passwordStrength');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    passwordError.textContent = '';

    // Regular expressions for password strength checks
    const minLength = /^(?=.{8,})/;  // At least 8 characters
    const hasUpperCase = /[A-Z]/;    // At least one uppercase letter
    const hasLowerCase = /[a-z]/;    // At least one lowercase letter
    const hasNumber = /\d/;          // At least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    // Check each condition and show feedback
    let strength = 0;
    if (minLength.test(password)) strength++;
    if (hasUpperCase.test(password)) strength++;
    if (hasLowerCase.test(password)) strength++;
    if (hasNumber.test(password)) strength++;
    if (hasSpecialChar.test(password)) strength++;

    // Set password strength message
    if (strength === 0) {
        strengthMessage.textContent = 'Password is very weak!';
        strengthMessage.style.color = 'red';
    } else if (strength === 1) {
        strengthMessage.textContent = 'Password is weak!';
        strengthMessage.style.color = 'red';
    } else if (strength === 2) {
        strengthMessage.textContent = 'Password is weak!';
        strengthMessage.style.color = 'red';
    } else if (strength === 3) {
        strengthMessage.textContent = 'Password is strong!';
        strengthMessage.style.color = 'green';
    } else if (strength === 4) {
        strengthMessage.textContent = 'Password is very strong!';
        strengthMessage.style.color = 'green';
    } else if (strength === 5) {
        strengthMessage.textContent = 'Password is very strong!';
        strengthMessage.style.color = 'green';
    }
});

// Client-side validation and form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formError').textContent = '';

    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var hasError = false;

    // Simple email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email){
        document.getElementById('emailError').textContent = 'Email is required!';
        hasError = true;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address!';
        hasError = true;
    }

    // Password validation (must pass strength checks)
    if (!password){
        document.getElementById('passwordError').textContent = 'Password is required!';
        hasError = true;
    }
    else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long!';
        hasError = true;
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!';
        hasError = true;
    }

    if (hasError) {
        return; // If there are errors, prevent the form from submitting
    }

    // Send login data to the server
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
        credentials: 'include' // Include credentials for session cookies
    })
    .then(response => response.json().then(data => {
        if (!response.ok) {
            throw new Error(data.message || 'Login failed.');
        }
        return data;
    }))
    .then(data => {
        if (data.success) {
            // Check user role and redirect accordingly
            if (data.role === 'admin') {
                window.location.href = '/admin_dashboard.html';
            } else {
                window.location.href = '/dashboard.html';
            }
        } else {
            // Display form-level error message
            document.getElementById('formError').textContent = data.message || 'Incorrect email or password';
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        document.getElementById('formError').textContent = error.message || 'An error occurred during login!';
    });
});
