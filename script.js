document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const changeTextBtn = document.getElementById('changeTextBtn');

    changeTextBtn.addEventListener('click', function() {
        if (greetingElement.textContent === 'Hello there!') {
            greetingElement.textContent = 'Welcome, user!';
        } else {
            greetingElement.textContent = 'Hello there!';
        }
    });
});