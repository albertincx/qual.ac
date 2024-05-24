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
        window.__arsfChatIdg='1002238842457_S';
        window.__arsfChatUrl = 'api.cafechat.app';
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = '//cafechat.app/start.js';
        newScript.onload = () => {
            setTimeout(function() {
                document.querySelector('.messanger-button').click();
                setTimeout(function() {
                    const message = { service: '', g: window.__arsfChatIdg, message: `subscribe ${emailInput.value}` }
                    if (window.__arsfChat) {
                        window.__arsfChat.send(JSON.stringify(message));
                        emailInput.value = '';
                    }
                    if (window.__arsfChatDestroy) {
                        window.__arsfChatDestroy();
                    }
                }, 1500);
            }, 1000)
        };
        document.getElementsByTagName("head")[0].appendChild(newScript);
    }
});
