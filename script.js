document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication check (for demonstration purposes)
    if (username === 'user' && password === 'pass') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error').innerText = 'Invalid username or password';
    }
});

document.getElementById('logout')?.addEventListener('click', function() {
    window.location.href = 'login.html';
});