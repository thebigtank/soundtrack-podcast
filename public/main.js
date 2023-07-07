import './scss/main.scss';
import { mobileMenu } from './js/mobile-menu.js'
import { revealOnScroll } from './js/reveal-onscroll.js'
import { customCursor } from './js/custom-cursor.js'

document.addEventListener("DOMContentLoaded", function () {
	mobileMenu();
	revealOnScroll();
	// customCursor();
});