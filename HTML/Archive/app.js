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
});


const xValues = ["Solar", "Hydropower", "Wind", "Biomass", "Geothermal"];
const yValues = [10.3, 6, 3.4, 1.2, 0.4];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Renewable Energy In The United States"
    }
  }
});