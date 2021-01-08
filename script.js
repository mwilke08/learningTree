const header = document.querySelector('.nav-wrapper');
const navImg = document.getElementById('nav-header-img');

function applyStickyNav() {
  header.classList.add("fixed");
  header.style.width = '100%';
  navImg.style.height = '60%';
  navImg.style.width = '60%';
}

function removeStickyNav() {
  header.classList.remove("fixed");
  header.style.width = '80vw';
  navImg.style.height = '80%';
  navImg.style.width = '80%';
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function callStickyNav() {
  // Get the offset position of the navbar
  const sticky = header.offsetTop;
  if (window.screen.width < 480) {
    header.style.display = "none";
    return;
  }
  window.pageYOffset > sticky ? applyStickyNav() : removeStickyNav();
}
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  });

///////////////////////////////////////
//Testimonial Section Functionality
///////////////////////////////////////
const slider = function () {

  //creating testimonial variable
  const testimonials = [{
      name: 'Jimmy',
      img: 'person1.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna fermentum iaculis.'
    },
    {
      name: 'Sue',
      img: 'person2.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Vitae et leo duis ut diam.'
    },
    {
      name: 'Bobby',
      img: 'person3.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Sit amet venenatis urna cursus eget.'
    },
  ]

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const testimonialText = document.querySelector('.testimonial-text');
  const testimonialAuthor = document.querySelector('.testimonial__name');
  const testimonialImg = document.querySelector('.testimonial__photo');

  let currentSlide = 0;
  const maxSlide = testimonials.length - 1;

  //functions
  const goToSlide = function (slide) {
    testimonialText.innerText = testimonials[slide].testimonial;
    testimonialAuthor.innerText = testimonials[slide].name;
    testimonialImg.src = `img/${testimonials[slide].img}`;
    animateCSS('.testimonial__photo', 'fadeIn');
    animateCSS('.testimonial-text', 'fadeIn');
  }

  const nextSlide = function () {
    if (currentSlide === maxSlide) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
    //-100% 0% 100% 200%
  };

  const prevSlide = function () {
    if (currentSlide === 0) currentSlide = maxSlide;
    else currentSlide--;
    goToSlide(currentSlide);
  }

  const init = function () {
    //sets slide up at 0
    goToSlide(0);
  };
  init();

  //event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
};
slider();

// When the user scrolls the page, execute myFunction
window.onscroll = () => callStickyNav();