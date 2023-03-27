// header scroll

let nav = document.querySelector(".navbar");

window.onscroll = function() {

   if(document.documentElement.scrollTop > 100){

       nav.classList.add("header-scrolled");
   }else{
       nav.classList.remove("header-scrolled");
   }
}

//  nav hide
let navBar = document.querySelectoraAll(".nav-link");
let navCollapse = document.querySelector(".nav-collapse.collapse");

navBar.array.forEach(element => {
   
});

// Back to top button
$(window).scroll(function () {
   if ($(this).scrollTop() > 300) {
       $('.back-to-top').fadeIn('slow');
   } else {
       $('.back-to-top').fadeOut('slow');
   }
});
$('.back-to-top').click(function () {
   $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
   return false;
});
AOS.init();

// Project carousel
$(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0:{
            items:2
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})(jQuery);

