// Scroll Animation: Fade-in effect when elements come into view
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkPosition() {
        fadeElements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Run the function once when the page loads
});
