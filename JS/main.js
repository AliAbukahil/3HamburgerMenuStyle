const menuBtn = document.querySelector(".menu-btn");
let menuOPen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOPen) {
    menuBtn.classList.add("open");
    menuOPen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOPen = false;
  }
});

const menuBtn2 = document.querySelector(".menu-btn2");
let menuOPen2 = false;
menuBtn2.addEventListener("click", () => {
  if (!menuOPen2) {
    menuBtn2.classList.add("open");
    menuOPen2 = true;
  } else {
    menuBtn2.classList.remove("open");
    menuOPen2 = false;
  }
});
