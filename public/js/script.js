window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("menu-toggle", window.scrollY > 0);
  // nav.classList.toggle("shadow-lg", window.scrollY > 0);
});
