console.log("hello");
const faqlist = document.querySelector(".faq__list");
const faqListItems = document.querySelectorAll(".faq__list--item");

faqlist.addEventListener("click", (e) => {
  // console.log(e.target.parentElement);
  const clicked = e.target.parentElement.lastElementChild;
  const arrow = e.target.parentElement.children[0].children[0];
  // console.log(clicked);
  if (clicked.classList.contains("faq__list--item__paragraph")) {
    faqListItems.forEach((el) => {
      el.children[1].classList.remove("active");
      el.children[0].classList.remove("active-main-text");
      el.children[0].children[0].classList.remove("arrow-active");
    });

    clicked.classList.toggle("active");
    arrow.classList.toggle("arrow-active");
    e.target.parentElement.firstElementChild.classList.toggle(
      "active-main-text"
    );
  }
});
