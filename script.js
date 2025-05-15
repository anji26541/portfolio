// AOS Initialization
AOS.init({
    offset: 0,
    duration: 1200
});

// Toggle dropdown menu
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// Close dropdown when a link is clicked
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    });
});