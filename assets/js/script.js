
/* ================= CLOUD MOUSE EFFECT ================= */

// const hero = document.querySelector(".hero");
// const mask = document.querySelector(".hero-mask");

// hero.addEventListener("mousemove", (e) => {

//   const rect = hero.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   mask.style.webkitMaskImage =
//     `radial-gradient(circle 200px at ${x}px ${y}px, transparent 0%, black 100%)`;

//   mask.style.maskImage =
//     `radial-gradient(circle 200px at ${x}px ${y}px, transparent 0%, black 100%)`;

// });

/* ================= MENU ANIMATION ================= */
const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menulabel = document.querySelector(".menu-items-label");
const bg = document.querySelector(".menu-bg");
const items = document.querySelectorAll(".menu-item");
const right = document.querySelector(".menu-right");

let tl = gsap.timeline({ paused:true });

tl.to(bg,{
  clipPath:"circle(150% at 100% 0%)",
  duration:1,
  ease:"power4.inOut"
})
.to(items,{
  opacity:1,
  x:0,
  stagger:0.1,
  duration:0.6
},"-=0.6")
.to(right,{
  opacity:1,
  x:0,
  duration:0.6
},"-=0.6");

toggle.addEventListener("click",()=>{

  toggle.classList.toggle("active");
  header.classList.toggle("active");
  menulabel.classList.toggle("active");

  if(toggle.classList.contains("active")){
    menu.style.visibility="visible";
    tl.play();
    document.body.style.overflow="hidden";
  }else{
    tl.reverse();
    setTimeout(()=>{
      menu.style.visibility="hidden";
      document.body.style.overflow="auto";
    },800);
  }

});


$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop:true,
    items: 3,
    margin: 20,   // 👈 space between items
    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1000:{ items:3 }
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".reveal-text");
const words = text.innerText.split(" ");
text.innerHTML = "";

words.forEach(word => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  text.appendChild(span);
});

const spans = document.querySelectorAll(".reveal-text span");

gsap.to(spans, {
  opacity: 1,
  stagger: 0.1,
  ease: "none",
 scrollTrigger: {
  trigger: ".reveal-section",
  start: "top 40%",
  end: "bottom 40%",
  scrub: true,
}
});



$(".testimonial-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 20,
  nav: true,
    navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
    ],
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive:{
    0:{ items:1 },
    768:{ items:1.5 },
    1200:{ items:2.5 }
  }
});

document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", function () {

    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });

});


     AOS.init({
  once: true,          
  mirror: false      
});
