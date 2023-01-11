// banner-carousel.....
$('.banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    navText:["<b>❮</b>","<b>❯</b>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// testimonial-carousel

$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Toggle-button//
$(".toggle").click(function(){
    $("ul").slideToggle();  
});