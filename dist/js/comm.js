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

function scrollSlide(args) {
  //args.container, args.item, args.animType, args.duration, args.delay, args.uncutMove
  const scrollContainerEle = document.querySelector(args.container);
  const scrollItems = Array.from(
    document.querySelectorAll(`${args.container} ${args.item}`)
  );

  let allowAnimation = true;
  let allowAnimationTimeout;

  // NOTE:
  // INNER FUNCTIONS DECLARATION
  function addAnimationClasses() {
    scrollItems.forEach((item) => {
      item.classList.add(args.animType);
    });
  }

  function addLoppAnimClasses() {
    let activeItem = scrollItems.find((item) => {
      return item.classList.contains("active");
    });

    let nextItem = scrollItems[scrollItems.indexOf(activeItem) + 1];
    let prevItem = scrollItems[scrollItems.indexOf(activeItem) - 1];

    if (!nextItem) {
      nextItem = scrollItems[0];
    }

    if (!prevItem) {
      prevItem = scrollItems[scrollItems.length - 1];
    }
    let itemsProceed = 0;
    console.log("%c Remove Classes", "background-color: red;");
    scrollItems.forEach((item) => {
      itemsProceed++;

      item.classList.remove("ss-move-prev");
      item.classList.remove("ss-move-next");
      console.log(itemsProceed + " | " + scrollItems.length);

      if (itemsProceed === scrollItems.length) {
        nextItem.classList.add("ss-move-next");
        prevItem.classList.add("ss-move-prev");
      }
    });
  }

  function addAnimationDuration() {
    scrollItems.forEach((item) => {
      item.style.transitionDuration = `${args.duration}s`;
      addAnimationDelay(item);
    });
  }

  function addAnimationDelay(item) {
    item.style.transitionDelay = `${args.delay}s`;
  }

  function stopScrollAnim() {
    if (allowAnimation) {
      allowAnimation = false;
    }
    allowAnimationTimeout = setTimeout(() => {
      allowAnimation = true;

      scrollItems.forEach((item) => {
        item.classList.remove("ss-moving");
      });
    }, (args.duration + args.delay) * 1000);
  }

  function changeScrollSlide(moveDown) {
    console.log(moveDown);
    let activeItem = scrollItems.find((item) => {
      return item.classList.contains("active");
    });
    let nextItem;

    if (moveDown) {
      nextItem = scrollItems[scrollItems.indexOf(activeItem) + 1];
    } else {
      nextItem = scrollItems[scrollItems.indexOf(activeItem) - 1];
    }

    if (nextItem) {
      activeItem.classList.add("ss-moving");
      nextItem.classList.add("ss-moving");
      activeItem.classList.remove("active");
      nextItem.classList.add("active");

      if (args.uncutMove) {
        addLoppAnimClasses();
      }
    } else {
      activeItem.classList.add("ss-moving");
      activeItem.classList.remove("active");

      if (moveDown) {
        scrollItems[0].classList.add("ss-moving");
        scrollItems[0].classList.add("active");

        if (args.uncutMove) {
          addLoppAnimClasses();
        }
      } else {
        scrollItems[scrollItems.length - 1].classList.add("ss-moving");
        scrollItems[scrollItems.length - 1].classList.add("active");

        if (args.uncutMove) {
          addLoppAnimClasses();
        }
      }
    }
  }

  // NOTE:
  // INNER FUNCTION CALLS
  addAnimationClasses();
  if (args.uncutMove) {
    addLoppAnimClasses();
  }
  addAnimationDuration();

  return (function () {
    let eventType;
    let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    let isIe = /MSIE|Trident/.test(window.navigator.userAgent);
    if (isFirefox) {
      eventType = "DOMMouseScroll";
    } else if (isIe) {
      eventType = "mousewheel";
    } else {
      eventType = "wheel";
    }
    scrollContainerEle.addEventListener(eventType, function (event) {
      let scrollTop = scrollContainerEle.scrollTop,
        scrollHeight = scrollContainerEle.scrollHeight,
        height = scrollContainerEle.clientHeight;

      let delta = event.wheelDelta ? event.wheelDelta : -(event.detail || 0);
      // console.log(`scrollTop ${screenTop}  height ${height} scrollHeight ${scrollHeight}`)
      if (
        (delta > 0 && scrollTop - delta <= 0) ||
        (delta < 0 && scrollTop + height >= scrollHeight - 1)
      ) {
        if (delta > 0) {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(false);
          }
        } else {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(true);
          }
        }
        event.preventDefault();
      } else {
        if (delta < 0) {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(true);
          }
        }
        event.preventDefault();
      }
    });
  })();
}

scrollSlide({
  container: ".scroll_container",
  item: ".content1",
  animType: "ss-move-up",
  duration: 1,
  delay: 0,
  uncutMove: true,
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
