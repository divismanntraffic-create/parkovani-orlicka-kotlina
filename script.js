// script.js – POZOR! Pokuty za parkování – interactive effects

document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // Scroll-reveal animation for sections
  // ==========================================
  var containers = document.querySelectorAll('.section .container');

  if (containers.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    containers.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ==========================================
  // Smooth scroll for anchor links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================
  // Flashing warning effect on hero
  // ==========================================
  var heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    setInterval(function () {
      heroTitle.style.opacity = '0.3';
      setTimeout(function () {
        heroTitle.style.opacity = '1';
      }, 100);
    }, 4000);
  }

  function copyToClipboard() {
    const url = "https://parkovani-orlicka-kotlina-hk.netlify.app/";
    navigator.clipboard.writeText(url).then(() => {
      const btnText = document.getElementById("copy-text");
      btnText.innerText = "Odkaz zkopírován!";
      setTimeout(() => {
        btnText.innerText = "Kopírovat odkaz";
      }, 2000);
    });
  }

});
