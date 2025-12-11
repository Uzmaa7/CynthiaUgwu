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
circleMouseFollower();


