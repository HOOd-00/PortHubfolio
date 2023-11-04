const navigation = 
    document.querySelector(".navbar");

const navigationHeigth = 
    navigation.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeigth + "px");

function toggleP(x,p) {
    if (x == 1) {
        p.src='image/chef_eyn.jpg';
    }
    if (x == 2) {
        p.src='image/IMG_6509.JPG';
    }

    // if (p.src.includes('IMG_6509.JPG')) {
    //     p.src='image/chef_eyn.jpg';
    // } else {
    //     p.src='image/IMG_6509.JPG';
    // }
};

const navLinksEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 3)) {
            currentSection = sectionEl.id;
        }
    });

    navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSection)) {
            navLinksEl.classList.add('active');
        }
        else {
            navLinksEl.classList.remove('active');
        }
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         const top = window.scrollY;
//         const offset = sec.offsetTop - 150;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove("active");
//                 document.querySelector("nav a [href*=' + id + ']").classList.add("active");
//             });
//         };
//     });
// };