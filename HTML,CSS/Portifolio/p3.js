window.addEventListener("scroll", () => {
  const nav = document.querySelector(".na");
  if (window.scrollY >= 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
