const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', ()=>{
    navDiv.classList.toggle('showNav');
});

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            /*console.log(sectionId)*/
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.add('nav-active')
            /*console.log('.navbar-collapse a[href*=' + sectionId + ']')*/
        }else{
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.remove('nav-active')
        } 
    })
}
window.addEventListener('scroll', scrollActive)

/* ==== REMOVE MENU ====*/
const navItem = document.querySelectorAll('.nav-item')

function linkAction() {
    navDiv.classList.remove('showNav')
    navItem.forEach(n => n.classList.remove('nav-active'));
    this.classList.add('nav-active');
    console.log(this)
}
navItem.forEach(n => n.addEventListener('click', linkAction))

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

/*----------- about section tabs----------------*/
(() =>{
    const aboutSection = document.querySelector(".skill-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* if event.target contains 'tab-item' class and not contains
        'active' class */
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing activate 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'tab-item'
            event.target.classList.add("active","outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

/* = SCROLL HOME = */
sr.reveal('.home-text',{delay:100, origin:'top'});
sr.reveal('.home-img',{delay: 400, origin: 'bottom'});

/* = SCROLL ABOUT = */
sr.reveal('.section-title',{origin:'bottom'});
sr.reveal('.about-info',{delay: 300, origin: 'left'});
sr.reveal('.about-img',{delay: 300, origin: 'right'});

/* = SCROLL SKILL = */
sr.reveal('.skill-type',{interval: 150, origin:'top'});
sr.reveal('.tab-item',{interval: 150, origin:'top'});

/* = SCROLL PROJECTS = */
sr.reveal('.project-type',{interval: 150, origin:'top'});
