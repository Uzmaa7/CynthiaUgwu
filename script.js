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

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", (e)=>{
        document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

function circleflat(){
    var xscale = 1;
    var yscale = 1;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove", (e)=>{
        clearTimeout(timeout);
        var xdiff = e.clientX - xprev;
        var ydiff = e.clientY - yprev;

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        xprev = e.clientX;
        yprev =  e.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
        },100);
    })
}
circleflat();

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


