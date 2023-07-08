export function revealNav() {
  let block = document.querySelector('header.header');

  if (block) {
    
    window.addEventListener("scroll", function() {
      let screenWidth = window.innerWidth || document.documentElement.clientWidth;

      if (screenWidth <= 600) {
        if (window.pageYOffset > 0) {
          block.classList.add('bg-reveal');
        } else {
          block.classList.remove('bg-reveal');
        }
      }

    });
  }

}