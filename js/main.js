//loader

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  



// nav-bar


function nav(){
    var toggleMenu = document.getElementById('menu-toggle')
    toggleMenu.classList.toggle('active')

    var slideNav = document.getElementById('nav-ul')
    slideNav.classList.toggle('active')

    var beforeNav = document.getElementById('header-nav')
    beforeNav.classList.toggle('open')
}




// smooth scrolling

$("footer img").click(function () {
    $('html,body').animate({
        scrollTop: true
    },500);
});

// next-prev button

var slide_img = document.getElementById("slide-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var images = new Array(
    "images/slider/slider1.png",
    "images/slider/slider2.png",
    "images/slider/slider3.png"
);
let i = 0;

next.onclick = function () {
    if (i < 2) {
        slide_img.src = images[i + 1];
        i++;
    }
};

prev.onclick = function () {
    if (i > 0) {
        slide_img.src = images[i - 1];
        i--;
    }
};



// available-items-carousel

$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        items:5,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        autoplayHoverPause:true,
        rewind: true,
        responsive:{
            0:{
                items:1
            },
            415:{
                items:1
            },
            600:{
                items:2

            },
            1200:{
                items:4
            }
        }
    });

});