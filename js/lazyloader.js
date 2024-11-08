document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 1023; // Adjust width as needed for mobile breakpoint
  const images = document.querySelectorAll(".work__item-image");

  if (isMobile) {
    images.forEach((img) => {
      img.setAttribute("loading", "lazy");
    });
  }
});
