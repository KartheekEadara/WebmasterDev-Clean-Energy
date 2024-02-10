document.addEventListener('DOMContentLoaded', function () {
    const parallaxImage = document.querySelector('.parallax-content img');
  
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.54 + 'px)';
    });
});

// Intersection Observer for Progress Bar
const progressBar = document.querySelector('.skill');
const progressBarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateProgressBar(); // Call your function to animate the progress bar
            progressBarObserver.unobserve(entry.target); // Stop observing once it's visible
        }
    });
});

progressBarObserver.observe(progressBar);

function animateProgressBar() {
    // Your code to animate the progress bar goes here
    console.log("Animating progress bar...");
}
