import gsap from "gsap";

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
      
      if (mobileMenu.classList.contains("active")) {
        animateContent();
      }

    });



    // Animate the menu items
    function animateContent() {
      const menuItems = mobileMenu.querySelectorAll(".menu-item");
      const authLinks = mobileMenu.querySelectorAll(".auth-links a");

      let tl = gsap.timeline({});
      
      tl.from(menuItems, { autoAlpha: 0, x: 50, stagger: 0.3 }, ">=0.5")
        .from(authLinks, { autoAlpha: 0, y: 20, stagger: 0.2 });
    }
  }

}