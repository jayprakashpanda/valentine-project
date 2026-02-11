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
});

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919078572171&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}
