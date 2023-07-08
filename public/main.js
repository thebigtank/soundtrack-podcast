import './scss/main.scss';
import { mobileMenu } from './js/mobile-menu.js'
import { revealNav } from './js/reveal-nav.js'
import { siteAnimations } from './js/animations/site-animations.js'
import { customCursor } from './js/custom-cursor.js'

document.addEventListener("DOMContentLoaded", function () {
	mobileMenu();
	revealNav();
	siteAnimations();
	// customCursor();
});