const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');
let chatLoaded

const connectCb = () => {
    if (window.__arsfChat) {
        window.__arsfChat.sendMessage(`subscribe ${emailInput.value}`);
        emailInput.value = '';
    }
    if (window.__arsfChatDestroy) {
        window.__arsfChatDestroy();
    }
};

const OnLoad = () => {
    setTimeout(() => {
        if (!window.__arsfChatConnect) {
            return;
        }
        chatLoaded = true;
        window.__arsfChatConnect(false, {
            cb: connectCb
        });
    }, 1000)
};

subscribeBtn.addEventListener('click', function (event) {
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
        if (chatLoaded) {
            connectCb();
        } else {
            window.__arsfChatIdg = '1002238842457_S';
            window.__arsfChatUrl = 'api.cafechat.app';
            var newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = '//cafechat.app/start.js';
            newScript.onload = OnLoad();
            document.getElementsByTagName("head")[0].appendChild(newScript);
        }
    }
});
