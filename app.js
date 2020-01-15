//slider
const slider = document.querySelector(".slider__container");
const sliderImg = document.querySelectorAll(".slider__container img");

const prevBtn = document.querySelector(".slider__button--prev");
const nextBtn = document.querySelector(".slider__button--next");

let counter = 1;
const size = sliderImg[0].clientWidth;

slider.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= sliderImg.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

slider.addEventListener("transitionend", () => {
  console.log(sliderImg[counter]);
  if (sliderImg[counter].id === "lastImg") {
    slider.style.transition = "none";
    counter = sliderImg.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImg[counter].id === "firstImg") {
    slider.style.transition = "none";
    counter = sliderImg.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

//contact form
const btnContact1 = document.querySelector(".header__button--contact");
const btnContact2 = document.querySelector(".footer__button--contact");
const contactForm = document.querySelector(".contact");
const btnClose = document.querySelector(".contact__button--close");
const windowAll = document.querySelector(".wrapper");

btnContact1.addEventListener("click", () => {
  console.log("ok");
  contactForm.style.display = "block";
  contactForm.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

btnContact2.addEventListener("click", () => {
  console.log("ok");
  contactForm.style.display = "block";
  contactForm.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

btnClose.addEventListener("click", () => {
  console.log("close");
  contactForm.style.display = "none";
  contactForm.style.backgroundColor = "rgba(0, 0, 0, 0)";
});
