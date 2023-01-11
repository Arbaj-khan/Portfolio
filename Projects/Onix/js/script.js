let open_btn = document.querySelector('.opne')
let close_btn = document.querySelector('.close')
let ul = document.querySelector('.nav-menu')

open_btn.addEventListener('click', () => {

    open_btn.classList.toggle('opne-active')
    close_btn.style.display = "block";
    ul.classList.toggle('nav-menu-active')
})
close_btn.addEventListener('click', () => {

    open_btn.classList.toggle('opne-active')
    close_btn.style.display = "none";
    ul.classList.toggle('nav-menu-active')
})

$('.our-service').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-portfolio').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: ["<b>❮</b>", "<b>❯</b>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1100: {
            items: 1
        }
    }
})

