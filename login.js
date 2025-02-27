
document.addEventListener('DOMContentLoaded', () => {
       // HTML құжатынан бірінші форманы таңдайды
    const form = document.querySelector('form');

     // Форманың жіберілу оқиғасын тыңдайды
    form.addEventListener('submit', (event) => {

        // Форманың жіберілу оқиғасын болдырмау 
        event.preventDefault();
        
        // Іске қосу үшін пайдаланушы аты мен құпия сөзді алу
        const username = document.getElementById('username').value;
         // Құпия сөз өрісінің мәнін алады
        const password = document.getElementById('password').value;

        // Пайдаланушы аты мен құпия сөзді тексеру
        if (username === 'admin' && password === 'password') {
            // Құпия сөз дұрыс болса, кіру сәтті
            alert('Login successful');
            // Басылған кезде басқа бетке өту
            window.location.href = 'main-page.html';
        } else {
            // Құпия сөз дұрыс емес болса, кіру сәтсіз
            alert('Error username or password');
        }
    });
});