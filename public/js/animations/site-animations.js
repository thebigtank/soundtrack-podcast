import gsap from "gsap";

export const siteAnimations = () => {

    let tl = gsap.timeline({});
    
    let poster = gsap.utils.toArray('.podcast .podcast-poster figure.image');
    let playerCont = gsap.utils.toArray('.player-banner .player-container');


    tl
    .from(poster, {
        duration: 1,
        autoAlpha: 0,
        y: 50
    })
    .from(playerCont, {
        duration: 0.8,
        autoAlpha: 0,
        y: 50
    });
}