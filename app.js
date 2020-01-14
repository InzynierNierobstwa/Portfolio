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
