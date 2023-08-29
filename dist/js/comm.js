var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
