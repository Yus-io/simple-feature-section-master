"use strict";

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0]
  // forEach((entry) => {
  //   console.log(entry);
  //   if (entry.isIntersecting) {
  //     entry.target.classList.add("show");
  //   }
  // });
});

const hiddenElement = document.querySelector(".hidden");
hiddenElement.forEach((el) => observer.observe(el));
