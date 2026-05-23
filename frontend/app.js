const API_URL = 'http://localhost:5000/users';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle User Signup
    const signupForm = document.querySelector('form[action*="signup"], #signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Gather input fields dynamically
            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();

                if (response.ok) {
                    alert('Registration successful! Redirecting to login...');
                    window.location.href = 'login.html'; // Redirect to login page
                } else {
                    alert(`Registration failed: ${result.error}`);
                }
            } catch (error) {
                console.error("Signup Error:", error);
                alert('Could not connect to the server. Is the backend running?');
            }
        });
    }

    // 2. Handle User Login
    const loginForm = document.querySelector('form[action*="login"], #login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();

                if (response.ok) {
                    alert('Login successful!');
                    // Save user data to localStorage so other pages know who is logged in
                    localStorage.setItem('user', JSON.stringify(result.user));
                    
                    // Route user based on their role
                    if(result.user.role === 'admin') {
                        window.location.href = 'admin-dashboard.html';
                    } else {
                        window.location.href = 'dashboard.html';
                    }
                } else {
                    alert(`Login failed: ${result.error}`);
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert('Could not connect to the server.');
            }
        });
    }

    // 3. Load Dashboard Data (If on Dashboard)
    const dashboardMetrics = document.getElementById('dashboard-metrics');
    if (dashboardMetrics) {
        fetch(`${API_URL}/dashboard`)
            .then(res => res.json())
            .then(data => {
                // Assuming you have HTML elements with these IDs to display the numbers
                if(document.getElementById('total-users')) document.getElementById('total-users').innerText = data.metrics.totalUsers;
                if(document.getElementById('total-mentors')) document.getElementById('total-mentors').innerText = data.metrics.mentorsCount;
            })
            .catch(err => console.error("Failed to load metrics:", err));
    }
});