import './scss/main.scss';
import { mobileMenu } from './js/mobile-menu.js'
import { revealNav } from './js/reveal-nav.js'
import { headerAnimation } from './js/animations/header-animation.js'
import { customCursor } from './js/custom-cursor.js'

document.addEventListener("DOMContentLoaded", function () {
	mobileMenu();
	revealNav();
	// headerAnimation();
	// customCursor();
});