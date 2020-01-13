let sliderImages = document.querySelectorAll(".slider__element");
let btnNext = document.querySelector(".slider__button--next");
let btnPrev = document.querySelector(".slider__button--prev");

let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideNext() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

btnNext.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideNext();
});

function slidePrev() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

btnPrev.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slidePrev();
});

startSlide();
