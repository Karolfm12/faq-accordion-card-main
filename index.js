console.log("hello");
const faqlist = document.querySelector(".faq__list");
const faqListItems = document.querySelectorAll(".faq__list--item");

faqlist.addEventListener("click", (e) => {
  const clicked = e.target.firstElementChild;
  faqListItems.forEach((val) => {
    if (val.firstElementChild !== clicked) {
      val.firstElementChild.classList.remove("active");
    }
  });
  clicked.classList.toggle("active");
});
