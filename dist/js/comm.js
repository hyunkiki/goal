var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 화면의 넓이가 1024px 이상일 때
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 화면의 넓이가 768px 이상일 때
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 화면의 넓이가 428px 이상일 때
    428: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
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
  effect: "fade",
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
gsap.to(".content1", {
  scrollTrigger: {
    trigger: ".scroll_container_intro", //객체기준범위
    start: "10% 0%", //시작 지점
    end: "90% 80%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  top: "-100%",
  // duration: 1
});

// const scrollBox = document.getElementById('.scroll_box');
// const content = document.getElementById('.content1');

// let scrollPosition = 0;

// // scrollBox.addEventListener('.scroll_box', () => {
// //   const scrollTop = scrollBox.scrollTop;
// //   if (scrollTop > scrollPosition) {
// //     // 아래로 스크롤하는 경우: 슬라이드 업
// //     content.style.transform = `translateY(-${scrollTop}px)`;
// //   } else {
// //     // 위로 스크롤하는 경우: 슬라이드 다운
// //     content.style.transform = `translateY(-${scrollTop}px)`;
// //   }
// //   scrollPosition = scrollTop;
// // });
// scrollBox.addEventListener('scroll', () => {
//   const scrollTop = scrollBox.scrollTop;
//   if (scrollTop > scrollPosition) {
//     // 아래로 스크롤하는 경우: 슬라이드 업
//     content.style.transform = `translateY(-${scrollTop}px)`;
//   } else {
//     // 위로 스크롤하는 경우: 슬라이드 다운
//     content.style.transform = `translateY(-${scrollTop}px)`;
//   }
//   // scrollPosition을 업데이트합니다.
//   scrollPosition = scrollTop;
// });

// const scrollBox = document.querySelector(".scroll_box"); // .scroll_box 클래스를 가진 요소를 찾습니다.
// const content = document.querySelector(".content1"); // .content1 클래스를 가진 요소를 찾습니다.

// let scrollPosition = 0;

// scrollBox.addEventListener("scroll", () => {
//   // 이벤트 이름은 'scroll'로 변경합니다.
//   const scrollTop = scrollBox.scrollTop;
//   if (scrollTop > scrollPosition) {
//     // 아래로 스크롤하는 경우: 슬라이드 업
//     content.style.transform = `translateY(-${scrollTop}px)`;
//   } else {
//     // 위로 스크롤하는 경우: 슬라이드 다운
//     content.style.transform = `translateY(-${scrollTop}px)`;
//   }
//   // scrollPosition을 업데이트합니다.
//   scrollPosition = scrollTop;
// });

AOS.init();
