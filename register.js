
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        const user = {
            username: username,
            email: email,
            phone: phone,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert('Registration successful!');
        window.location.href = 'main-page.html';
    });
});