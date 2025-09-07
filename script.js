document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(Thank you for your message, ${name}! We will get back to you soon.);
    
    // Reset the form fields
    document.getElementById('contactForm').reset();
});
