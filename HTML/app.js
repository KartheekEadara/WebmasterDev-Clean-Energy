//Parallax & Fade in code

document.addEventListener('DOMContentLoaded', function () {
    const parallaxImage = document.querySelector('.parallax-content img');
  
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
  });
  
  
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
