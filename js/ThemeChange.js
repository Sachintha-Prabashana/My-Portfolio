document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌙"; // Change icon for dark mode
    } else {
        toggleButton.textContent = "☀️"; // Change icon for light mode
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save theme preference in localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️";
        }
    });
});
