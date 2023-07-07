export function mobileMenu() {
  let block = document.querySelector('header.header');

  if (block) {
    const body = document.querySelector('body');
    const hamburger = block.querySelector(".hamburger");
    const mobileMenu = block.querySelector('.mobile-menu');
    
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      block.classList.toggle("mobile-menu-active");
      mobileMenu.classList.toggle("active");
      body.classList.toggle("scroll-lock");
    });
  }

}