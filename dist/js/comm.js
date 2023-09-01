var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var menu = [
  "축구의 역사",
  "축구의 포지션",
  "축구가 인기있는 이유",
  "축구가 차별받는 이유",
  "축구의단점",
  "축구의장점",
];
var mySwiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  },
});
var menu = [
  "프라하",
  "부다페스트",
  "시드니",
  "몬테레이",
  "카사블랑카",
  "로스앤젤레스",
  "나폴리",
];
var mySwiper = new Swiper(".swiper-container2", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  },
});
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
  });
  slides[index].style.opacity = 1;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlideIndex); // Show the initial slide
