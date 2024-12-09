// Fade-in effect for sections as they appear in the viewport
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));
