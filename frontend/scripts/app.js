document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    const response = await fetch('http://localhost:3000/api/courses', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const courses = await response.json();
        const container = document.getElementById('courses-container');
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.textContent = course.nome_corso;
            container.appendChild(courseElement);
        });
    } else {
        alert('Failed to load courses');
    }
});
