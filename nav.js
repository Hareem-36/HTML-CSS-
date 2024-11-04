// // const navSlide = () => {
// //   const burger = document.querySelector('.burger');
// //   const nav = document.querySelector('.nav-links');
// //   const navLinks = document.querySelectorAll('.nav-links li')
  
// //   burger.addEventListener('click',()=> {
// //       //toggle nav
// //       nav.classList.toggle('nav-active');

// //         // animate links
// //       navLinks.forEach((link, index) => {
// //           if (link.style.animation){
// //               link.style.animation = ''
// //           }
// //           else{
// //               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6 }s`;
// //           }  
// //       });
// //       //burger animation
// //       burger.classList.toggle('toggle');

// //   });


// // }


// // navSlide();

// // //Carousel//
// // let slideIndex = 1;
// // showSlides(slideIndex);

// // function plusSlides(n) {
// // showSlides(slideIndex += n);
// // }

// // function currentSlide(n) {
// // showSlides(slideIndex = n);
// // }

// // function showSlides(n) {
// // let i;
// // let slides = document.getElementsByClassName("mySlides");
// // let dots = document.getElementsByClassName("dot");
// // if (n > slides.length) {slideIndex = 1}    
// // if (n < 1) {slideIndex = slides.length}
// // for (i = 0; i < slides.length; i++) {
// //   slides[i].style.display = "none";  
// // }
// // for (i = 0; i < dots.length; i++) {
// //   dots[i].className = dots[i].className.replace(" active", "");
// // }
// // slides[slideIndex-1].style.display = "block";  
// // dots[slideIndex-1].className += " active";
// // }

// // Script
// let navbar = document.querySelector('.header .navbar');
// let searchForm = document.querySelector('.header .search-form');
// let loginForm = document.querySelector('.header .login-form');
// let contactInfo = document.querySelector('.contact-info');

// document.querySelector('#menu-btn').onclick = () => {
//    navbar.classList.toggle('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
// };

// document.querySelector('#search-btn').onclick = () => {
//    searchForm.classList.toggle('active');
//    navbar.classList.remove('active');
//    loginForm.classList.remove('active');
// };

// document.querySelector('#login-btn').onclick = () => {
//    loginForm.classList.toggle('active');
//    navbar.classList.remove('active');
//    searchForm.classList.remove('active');
// };

// document.querySelector('#info-btn').onclick = () => {
//    contactInfo.classList.toggle('active');
// };

// document.querySelector('#info-btn').onclick = () => {
//    contactInfo.classList.add('active');
// };

// document.querySelector('#close-contact-info').onclick = () => {
//    contactInfo.classList.remove('active');
// };

// window.onscroll = () => {
//    navbar.classList.remove('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
//    contactInfo.classList.remove('active');
// }








































































































let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
   },
}); 