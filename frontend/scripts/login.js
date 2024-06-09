// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const response = await fetch('/auth/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     });

//     if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('token', data.token);
//         window.location.href = 'index.html';
//     } else {
//         alert('Login failed');
//     }
// });

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/auth/login', { // Assicurati che l'URL sia corretto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } else {
            document.getElementById('error').textContent = 'Login failed';
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        document.getElementById('error').textContent = 'Login failed: Unable to reach the server';
    }
});

