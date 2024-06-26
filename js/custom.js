$(function(){
    $('.banner_slider').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            },
            1200:{
                items:1,
            }
        }
    })

    $('.testimonial_slider').owlCarousel({
        loop:true,
        margin:30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    })
  });