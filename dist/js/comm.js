// JS ZOOM SCROLL METAH WEB
let bg = document.querySelector('.bg__metah');
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  bg.style.backgroundSize = 30 + value * 1 + "vw";
  if (value / 1000 > 0.6) {
    bg.style.opacity = 1.5 - value / 1000;
    console.log(value / 1000)
  } else {
    bg.style.opacity = 1
  }
})