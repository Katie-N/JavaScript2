// Katie Nordberg 9/22/2021

// Improved by separating JS from HTML

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderPieces = document.querySelectorAll('.slide-in');

// Removed this code and replaced it with with more modular functions

// function checkSlide() {
//   sliderImages.forEach(sliderImage => {
//     // half way through the image
//     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//     // bottom of the image
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     console.log(sliderImages[0]);
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add('active');
//     } else {
//       sliderImage.classList.remove('active');
//     }
//   });
// }

// Added these functions which utilize the the getBoundingClientRect method on each element
const handleScrollAnimation = () => {
  sliderPieces.forEach((el) => {
    if (elementInView(el)) {
        displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  })
}

const displayScrollElement = (element) => {
  element.classList.add('active');
}

const hideScrollElement = (element) => {
  element.classList.remove('active');
}

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Updated which function to call when window scrolls
// window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', debounce(handleScrollAnimation));

// For any items that are in view before the page is scrolled and need to slide in
handleScrollAnimation();
