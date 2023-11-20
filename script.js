(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  }

  const typed = select('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

})();


document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.querySelector('.tx-fx');

  function updateGradient() {
    const currentAngle = parseFloat(textElement.style.getPropertyValue('--gradient-angle'));
    const randomAngle = Math.floor(Math.random() * 360) - 180;
    const animationDuration = 10000000000000; // Duration of the animation in milliseconds
  
    anime({
      targets: textElement,
      '--gradient-angle': [currentAngle, randomAngle],
      easing: 'easeInOutQuad',
      duration: animationDuration,
    });
  }
  

  setInterval(updateGradient, 500); // Change gradient every 5 seconds
});

const buttonElement = document.getElementById('abt-me');
  const targetPage = 'about-me/index.html'; // Replace with the name of your target page

  buttonElement.addEventListener('click', function() {
    window.location.href = targetPage;
  });