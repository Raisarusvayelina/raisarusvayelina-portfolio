/* =====================================================
   RAISA PORTFOLIO V2
   Aurora Hybrid Theme
===================================================== */

/* =====================================================
   SELECTORS
===================================================== */

const body = document.body;

const navbar =
document.querySelector(".navbar");

const themeToggle =
document.getElementById("themeToggle");

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

const progressBar =
document.getElementById("progressBar");

const topBtn =
document.getElementById("topBtn");

const hiddenElements =
document.querySelectorAll(".hidden");

/* =====================================================
   YEAR
===================================================== */

const year =
document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}

/* =====================================================
   THEME
===================================================== */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "light"){

    body.classList.add("light-mode");

    if(themeToggle){

        themeToggle.innerHTML =
        "🌙";

    }

}else{

    if(themeToggle){

        themeToggle.innerHTML =
        "☀️";

    }

}

if(themeToggle){

themeToggle.addEventListener(

"click",

()=>{

body.classList.toggle(

"light-mode"

);

if(

body.classList.contains(

"light-mode"

)

){

localStorage.setItem(

"theme",

"light"

);

themeToggle.innerHTML="🌙";

}else{

localStorage.setItem(

"theme",

"dark"

);

themeToggle.innerHTML="☀️";

}

});

}

/* =====================================================
   MOBILE MENU
===================================================== */

if(hamburger){

hamburger.addEventListener(

"click",

()=>{

navLinks.classList.toggle(

"active"

);

});

}

document

.querySelectorAll(

".nav-links a"

)

.forEach(link=>{

link.addEventListener(

"click",

()=>{

navLinks.classList.remove(

"active"

);

});

});

/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>50){

navbar.classList.add(

"scrolled"

);

}else{

navbar.classList.remove(

"scrolled"

);

}

});

/* =====================================================
   SCROLL PROGRESS
===================================================== */

window.addEventListener(

"scroll",

()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight
-
document.documentElement.clientHeight;

const progress =

(scrollTop/scrollHeight)*100;

if(progressBar){

progressBar.style.width=

progress+"%";

}

});

/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>500){

topBtn.classList.add(

"show"

);

}else{

topBtn.classList.remove(

"show"

);

}

});

if(topBtn){

topBtn.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer =

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"show"

);

}

});

},

{

threshold:.15

}

);

hiddenElements.forEach(el=>{

observer.observe(el);

});

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const currentPage =

window.location.pathname

.split("/")

.pop();

document

.querySelectorAll(

".nav-links a"

)

.forEach(link=>{

const href=

link.getAttribute("href");

if(href===currentPage){

link.classList.add(

"active"

);

}

});

/* =====================================================
   SMOOTH INTERNAL LINKS
===================================================== */

document

.querySelectorAll(

'a[href^="#"]'

)

.forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

const target=

document.querySelector(

this.getAttribute(

"href"

)

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*PART 2/

/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [
        "Database Management Student",
        "Web Developer",
        "UI / UX Enthusiast",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

}

/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target =
            Number(counter.dataset.target);

            let count = 0;

            const speed =
            Math.max(15, target / 80);

            function update(){

                count += speed;

                if(count < target){

                    counter.textContent =
                    Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.textContent =
                    target;

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const progressBars =
document.querySelectorAll(".progress span");

const progressObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target;

const width =
bar.dataset.width;

bar.style.width = width;

progressObserver.unobserve(bar);

}

});

},{threshold:.4});

progressBars.forEach(bar=>{

progressObserver.observe(bar);

});

/* =====================================================
   PROJECT SPOTLIGHT
===================================================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.setProperty(
"--mouse-x",
`${x}px`
);

card.style.setProperty(
"--mouse-y",
`${y}px`
);

});

});

/* =====================================================
   PROJECT MODAL
===================================================== */

const modal =
document.querySelector(".modal");

const openButtons =
document.querySelectorAll("[data-modal]");

const closeButton =
document.querySelector(".modal-close");

openButtons.forEach(button=>{

button.addEventListener("click",()=>{

modal.classList.add("active");

document.body.style.overflow="hidden";

});

});

if(closeButton){

closeButton.addEventListener("click",()=>{

modal.classList.remove("active");

document.body.style.overflow="";

});

}

if(modal){

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

document.body.style.overflow="";

}

});

}

/* =====================================================
   CERTIFICATE LIGHTBOX
===================================================== */

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox img");

const certificateImages =
document.querySelectorAll(".certificate-image img");

certificateImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

document.body.style.overflow="hidden";

});

});

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="";

}

});

}

/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(modal){

modal.classList.remove("active");

}

if(lightbox){

lightbox.classList.remove("active");

}

document.body.style.overflow="";

}

});

/* =====================================================
   REDUCED MOTION SUPPORT
===================================================== */

const prefersReducedMotion =
window.matchMedia("(prefers-reduced-motion: reduce)");

if(prefersReducedMotion.matches){

document.documentElement.style.scrollBehavior="auto";

document.querySelectorAll("*").forEach(element=>{

element.style.animation="none";

element.style.transition="none";

});

}

/* =====================================================
   RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple =
document.createElement("span");

const rect =
this.getBoundingClientRect();

const size =
Math.max(rect.width,rect.height);

ripple.style.width =
size+"px";

ripple.style.height =
size+"px";

ripple.style.left =
(e.clientX-rect.left-size/2)+"px";

ripple.style.top =
(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});