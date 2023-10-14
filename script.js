"use strict";

// ---- ELEMENTS ---- //
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
// ---- END OF ELEMENTS ---- //

// ---- FUNCTION ---- //
const viewContent = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // Remove active class from other btns
    btns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to btn that was clicked
    e.target.classList.add("active");

    articles.forEach((article) => {
      // Remove active class from other contents/articles
      article.classList.remove("active");
      // Add active class to content if content id === btn id
      if (article.id === e.target.dataset.id) article.classList.add("active");
    });
  }
};
// ---- END OF FUNCTION ---- //

// ---- EVENT HANDLER ---- //
about.addEventListener("click", viewContent);
// ---- END OF EVENT HANDLER ---- //
