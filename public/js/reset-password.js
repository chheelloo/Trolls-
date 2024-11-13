 // Validate Passwords with Regex
        function validatePassword(password) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>?\\|`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};:'",.<>?\\|`~]{8,}$/;
            return passwordRegex.test(password);
        }

        // Handle form submission
        document.querySelector('.form-container').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting the normal way

            const resetKey = document.getElementById('resetKey').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Clear previous errors
            document.getElementById('resetKeyError').textContent = '';
            document.getElementById('newPasswordError').textContent = '';
            document.getElementById('confirmPasswordError').textContent = '';

            // Basic validation
            let formIsValid = true;

            // Check if resetKey is provided
            if (!resetKey) {
                document.getElementById('resetKeyError').textContent = 'Reset code is required!';
                formIsValid = false;
            }

            // Validate New Password
            if (!newPassword) {
                document.getElementById('newPasswordError').textContent = 'New password is required!';
                formIsValid = false;
            } else if (!validatePassword(newPassword)) {
                document.getElementById('newPasswordError').textContent = 'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character!';
                formIsValid = false;
            }

            if (!confirmPassword){
                document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required!';
                formIsValid = false;
            }

            // Check if newPassword and confirmPassword match
            if (newPassword !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match!';
                formIsValid = false;
            }

            if (!formIsValid) {
                return; // Prevent form submission if there are errors
            }

            // Submit the form data
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
                    alert(data.message); // Display error message from the server
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });

        // Toggle password visibility for the "New Password" field
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
