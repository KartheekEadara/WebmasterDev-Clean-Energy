document.addEventListener('DOMContentLoaded', function () {
    const parallaxImage = document.querySelector('.parallax-content img');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.54 + 'px)';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const progressBar = document.querySelector('.skill');
    const progressBarObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateProgressBar();
                progressBarObserver.unobserve(entry.target);
            }
        });
    });

    progressBarObserver.observe(progressBar);
});

function animateProgressBar() {
    // Your code to animate the progress bar goes here
}
