// Mobile Menu open/close logic
const navBtnEl = document.querySelector(".nav-btn");
const sidebarEl = document.querySelector(".sidebar-menu");

function navBtnHandler() {
  const isOpen = navBtnEl.classList.toggle("nav-btn--open");
  navBtnEl.setAttribute("aria-expanded", isOpen);
  sidebarEl.classList.toggle("sidebar-menu--open", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
}

navBtnEl.addEventListener("click", navBtnHandler);