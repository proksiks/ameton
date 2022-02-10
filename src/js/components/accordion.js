const accordionBtns = document.querySelectorAll(".accordion__btn");
const accordionWrap = document.querySelectorAll(".accordion__box")

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;
    this.parentElement.classList.toggle("is-open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
