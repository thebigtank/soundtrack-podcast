import './scss/main.scss';
import { mobileMenu } from './js/mobile-menu.js'
import { revealNav } from './js/reveal-nav.js'
import { rangeInput } from './js/range-input.js'

document.addEventListener("DOMContentLoaded", function () {
	mobileMenu();
	revealNav();
	rangeInput();
});