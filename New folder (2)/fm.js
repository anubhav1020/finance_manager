// Get the button element
const toggleButton = document.getElementById('toggleLoginSignup');

// Get the login and signup options container
const loginSignupContainer = document.querySelector('.login-signup');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the login/signup options container
    loginSignupContainer.classList.toggle('hidden');
});
