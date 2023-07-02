export function mobileMenu() {
  let block = document.querySelector('header.header');

  if (block) {
    const hamburger = block.querySelector(".hamburger");
    // const menu = block.querySelector('.menu ul');
    
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      // menu.classList.toggle("active");
    });
  }

}