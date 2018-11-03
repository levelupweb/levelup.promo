export const smoothScroll = require("smoothscroll");

export const bindSmoothScrolling = () => {
  const links = document.querySelectorAll("[data-scrollTo]");
  links.forEach(link => {
    link.addEventListener("click", e => {
      smoothScroll(document.querySelector(e.target.dataset.scrollto));
    });
  });
};
