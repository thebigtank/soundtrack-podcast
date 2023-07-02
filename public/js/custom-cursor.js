export function customCursor() {
    
    const cursor = document.querySelector(".custom-cursor");
    const logo = document.querySelector("header.header .logo");
    const menuItems = document.querySelectorAll(".menu ul .menu-item");
    const hamburger = document.querySelector(".hamburger");

    document.addEventListener("mousemove", function(e) {
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px";

    });

    logo.addEventListener("mouseenter", function(e) {
        scaleUp();
    });

    logo.addEventListener("mouseleave", function(e) {
        scaleDown();
    });
    
    hamburger.addEventListener("mouseenter", function(e) {
        scaleUp();
    });

    hamburger.addEventListener("mouseleave", function(e) {
        scaleDown();
    });
    
    menuItems.forEach(function(item) {
        item.addEventListener("mouseenter", function(e) {
            scaleUp();
        });

        item.addEventListener("mouseleave", function(e) {
            scaleDown();
        });
    });

    function scaleUp() {
        cursor.classList.remove("cursor-scale-down");
        cursor.classList.add("cursor-scale-up");
    }

    function scaleDown() {
        cursor.classList.remove("cursor-scale-up");
        cursor.classList.add("cursor-scale-down");
    }

}