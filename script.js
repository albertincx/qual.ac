const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

subscribeBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red';
        emailInput.focus();
    } else {
        // Perform further actions, such as sending the subscription request
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.style.color = 'green';
        emailInput.value = '';
    }
});
