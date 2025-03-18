// ✅ Fixed Lightbox Feature
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// ✅ Fixed Scroll Animation
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
    checkPosition(); // Run once when page loads
});
