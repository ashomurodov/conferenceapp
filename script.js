const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("ul li a");
if (window.innerWidth > 1000) {
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
        console.log(link);
      }
    });
  });
}

// carusel;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = ["carusel0.jpg", "carusel1.jpg", "carusel2.jpg"];

let counter = 0;

next.addEventListener("click", () => {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }

  document.querySelector(".caruselImg").src = `./images/${images[counter]}`;
});

prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  console.log(document.querySelector(".caruselImg").src);
  document.querySelector(".caruselImg").src = `./images/${images[counter]}`;
  console.log(images[counter]);
  console.log("hello");
});
