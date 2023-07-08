import gsap from "gsap";

export const headerAnimation = () => {

    let tl = gsap.timeline({});

    let block = document.querySelector("header.header");

	if (block) {

        let navigation = block.querySelector('nav');

        tl.from(navigation, {
            duration: 0.5,
            autoAlpha: 0,
            y: -50
        });
	}
}