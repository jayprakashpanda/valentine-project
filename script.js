function goYes() {
    window.location.href = "yes.html";
}

function goNo() {
    window.location.href = "no.html";
}

// Custom cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // Heartbreak on NO button
    const noBtn = document.querySelector('.no-btn');
    if (noBtn && cursor) {
        noBtn.addEventListener('mouseenter', function() {
            cursor.innerHTML = '💔';
        });
        noBtn.addEventListener('mouseleave', function() {
            cursor.innerHTML = '💖';
        });
    }

    // Password unlock for Contact 2
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            if (this.value === 'jayprakash') {
                const select = document.getElementById('contact');
                // Check if Contact 2 is already added
                const options = select.options;
                let exists = false;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].value === '917847837153') {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    const option = document.createElement('option');
                    option.value = '917847837153';
                    option.text = 'Contact 2';
                    select.appendChild(option);
                }
                // Hide the password input
                this.style.display = 'none';
            }
        });
    }
});

const contacts = [
    { name: 'Contact 1', phone: '919078572171' },
    { name: 'Contact 2', phone: '917847837153' },
    { name: 'Contact 3', phone: '917008175703' },
    { name: 'Contact 4', phone: '919078557611' }
];

function sendMessage() {
    const message = document.getElementById('message').value;
    const selectedPhone = document.getElementById('contact').value;
    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    if (!selectedPhone) {
        alert('Please select a contact.');
        return;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${selectedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    // Clear the textarea after sending
    document.getElementById('message').value = '';
    // Redirect to main page after sending
    window.location.href = "index.html";
}

function sendNote() {
    const phone = prompt("Enter the phone number (with country code, e.g., 919078572171):");
    if (!phone || phone.trim() === '') return;
    const message = prompt("Enter your note:");
    if (!message || message.trim() === '') return;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}
