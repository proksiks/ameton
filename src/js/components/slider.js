import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
