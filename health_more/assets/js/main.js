// show menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // ketika klik tiap nav_link, maka kelas show-menu akan dihapus
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// scroll section link aktif 
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

// mengganti bg header
function scrollHeader(){
    const nav = document.getElementById('header');
    // ketika scroll lebih dari 200 viewport height, tambahkan kelas scroll-header ke header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// tampilkan scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // ketika scroll lebih dari 560 viewport height, tambahkan kelas scroll-header ke header tag
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

// tema dark/light
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

// jika user memilih dark/light
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// mendapatkan tema saat ini yang dimiliki interface dangan kondisi kelas dark theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'bx-moon':'bx-sun';

// kondisi ketika user sebelumnya memilih tema
if(selectedTheme){
    // jika kondisi terpenuhi, apakah activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// activated / deactivated tema manual dengan button
themeButton.addEventListener('click', ()=>{
    // add atau remove dark / theme icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // menyimpan tema dan icon saat dipilih oleh user
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// scroll reveal animation
const sr = ScrollReveal({
    origin: top,
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .bio__data, .footer__content`, {
    interval: 200
})