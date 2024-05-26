const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');
let chatLoaded;

const onConnectIvChatSend = (txt) => {
    if (window.__arsfChat) {
        window.__arsfChat.sendMessage(txt);
        chatLoaded = true;
    }
    if (window.__arsfChatDestroy) {
        window.__arsfChatDestroy();
    }
};
const onLoad = () => {
    onConnectIvChatSend(`subscribe ${emailInput.value}`)
};

window.onConnectIvChat = onLoad;

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
            onLoad();
            emailInput.value = '';
        } else {
            window.__arsfChatIdg = '1002238842457_S';
            let startSrc = '//cafechat.app/start.js';
            let dev = false;
            if (dev) {
                //http://localhost:9000/
                // startSrc = 'http://localhost:9000/start.js';
            }
            const newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = startSrc;
            document.getElementsByTagName("head")[0].appendChild(newScript);
        }
    }
});
