new WOW().init();
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            544:{
                items: 2
            }
        }
    })
});