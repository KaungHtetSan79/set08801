// ---- Auth Setup ----
function setupAuth() {
    const authContainer = document.getElementById("auth-container");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (authContainer) {
        if (loggedInUser) {
            authContainer.innerHTML = `
                <div class="user-info">
                    <span class="user-email">${loggedInUser}</span>
                    <button class="logout-btn" onclick="logout()">Logout</button>
                </div>
            `;
        } else {
            authContainer.innerHTML = `
                <button id="login-btn" onclick="window.location.href='login.html'">Login</button>
            `;
        }
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    setupAuth(); // Refresh the UI after logout
    window.location.href = "home.html"; // Redirect after logout
}

// ---- Theme Toggle Setup ----
function setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");

    // Ensure the correct theme is set on page load based on saved preferences
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", currentMode); // Store user's theme preference
    });
}

// ---- On Page Load ----
document.addEventListener("DOMContentLoaded", () => {
    setupAuth();
    setupThemeToggle();
    w3.includeHTML(); // Only if you're using W3 include
});
