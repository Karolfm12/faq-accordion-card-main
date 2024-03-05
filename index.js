console.log("hello");
const faqlist = document.querySelector(".faq__list");
const faqListItems = document.querySelectorAll(".faq__list--item");

faqlist.addEventListener("click", (e) => {
  // console.log(e.target.parentElement);
  const clicked = e.target.parentElement.lastElementChild;
  const arrow = e.target.parentElement.children[0].children[0];

  if (clicked.classList.contains("faq__list--item__paragraph")) {
    faqListItems.forEach((el) => {
      console.log(clicked);
      // if (el.children[1].classList.contains("active")) {
      el.children[1].classList.remove("active");
      // el.classList.remove("active");
      // }
    });

    clicked.classList.toggle("active");
    arrow.classList.toggle("arrow-active");
    e.target.parentElement.firstElementChild.classList.toggle(
      "active-main-text"
    );
  }
});
