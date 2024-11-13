document.querySelector('.form-container').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    let hasError = false;

    // Clear previous error messages
    emailError.textContent = '';

    // Email validation: check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Email is required!';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address!';
        hasError = true;
    }

    // If there are validation errors, stop form submission
    if (hasError) {
        return; // Prevent form submission if there are errors
    }

    // Make the API request to send the password reset link
    try {
        const response = await fetch('/send-password-reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();
        
        if (response.ok) {
            // If the response contains the redirect URL, redirect the user
            if (result.redirectUrl) {
                window.location.href = result.redirectUrl; // Redirect to reset-password.html
            } else {
                alert(result.message); // Show success message
            }
        } else {
            // Display error message if the response is not OK
            emailError.textContent = result.message || 'An error occurred. Please try again.';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
});
