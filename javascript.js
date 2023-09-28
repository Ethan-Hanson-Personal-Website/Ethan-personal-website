// Get a reference to the form
const contactForm = document.querySelector('form');

// Handle form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get user-entered values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Add validation if needed

    // Redirect to the success page
    window.location.href = 'success.html'; // Change to your success page URL
});
