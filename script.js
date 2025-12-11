const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//  smooth scrolling
//  attach locomotive scroll CSS
//  attach locomotive scroll min js
//  some code from loco githb for js

// gsap
// gsap attach

function circleMouseFollower(){
    window.addEventListener("mousemove", (e)=>{
        document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    })
}
function firstpageAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration:2,
        stagger:0.2,
        delay:-1
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

circleMouseFollower();
firstpageAnimation();


