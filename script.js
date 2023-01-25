const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

const handleClick = (direction) => {
  activeSlide =
    direction === "right"
      ? (activeSlide + 1) % slides.length
      : (activeSlide - 1 + slides.length) % slides.length;
  setBgToBody();
  setActiveSlide();
};

const setBgToBody = () =>
  (body.style.backgroundImage = slides[activeSlide].style.backgroundImage);

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};

rightBtn.addEventListener("click", () => handleClick("right"));
leftBtn.addEventListener("click", () => handleClick("left"));

setBgToBody();
