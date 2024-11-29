
const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;


nightModeToggle.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    
    if (body.classList.contains('night-mode')) {
        nightModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for day mode
    } else {
        nightModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for night mode
    }
});
