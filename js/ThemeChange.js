const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleIcon();
}

// Toggle Theme Function
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    updateToggleIcon();

    // Save theme preference to localStorage
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);
});

// Update Toggle Icon
function updateToggleIcon() {
    const isDarkTheme = body.classList.contains('dark-theme');
    toggleButton.innerHTML = isDarkTheme ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
}