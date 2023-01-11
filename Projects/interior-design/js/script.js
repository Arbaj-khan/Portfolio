//banner-carousel...

$('.banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
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

// service-carousel...

$('.service ').owlCarousel({
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
        900:{
            items:1
        },    
        1000:{
            items:2
        }
    }
})

//team-carousel....

$('.team').owlCarousel({
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
        900:{
            items:1
        },    
        1000:{
            items:3
        }
    }
})

//testimonial-carousel......

$('.testimonial').owlCarousel({
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
        900:{
            items:1
        },    
        1000:{
            items:1
        }
    }
})

// toggle-button.....

$(".toggle").click(function(){
    $("ul").slideToggle();  
});
