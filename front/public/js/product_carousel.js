const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");

let carouselWidth =
  document.querySelector(".productCarouselItem").offsetWidth + 15;

window.addEventListener("resize", () => {
  carouselWidth =
    document.querySelector(".productCarouselItem").offsetWidth + 15;
});

let index = 0;

next.addEventListener("click", () => {
  index++;
  prev.classList.add("show");
  track.style.transform = `translateX(-${index * carouselWidth}px)`;

  if (track.offsetWidth - (index + 1) * carouselWidth < carouselWidth) {
    console.log("index");
    console.log(index);
    console.log("offsetWidth");
    console.log(track.offsetWidth);
    console.log("carouselWidth");
    console.log(carouselWidth);

    next.classList.add("hide");
  }
});

prev.addEventListener("click", () => {
  index--;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
});
