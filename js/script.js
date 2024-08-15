document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const userDisplayName = document.getElementById('userDisplayName');

    // Basic registration handling
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple validation (add your own logic)
            if (username && email && password) {
                // Save user data in localStorage (for demo purposes)
                localStorage.setItem('username', username);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                alert('Registration successful!');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Basic login handling
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation (add your own logic)
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                window.location.href = 'home.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Display the user's name on the home page
    if (userDisplayName) {
        const storedUsername = localStorage.getItem('username');
        userDisplayName.textContent = storedUsername || 'User';
    }
});
