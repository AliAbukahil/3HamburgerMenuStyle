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
