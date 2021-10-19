$(document).ready(function () {
   "use strict";
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 2000,

    });



    //smooth js starts

//
//    // Select all links with hashes
//    $('a[href*="#"]')
//        // Remove links that don't actually link to anything
//        .not('[href="#"]')
//        .not('[href="#0"]')
//        .click(function (event) {
//            // On-page links
//            if (
//                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//                location.hostname == this.hostname
//            ) {
//                // Figure out element to scroll to
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                // Does a scroll target exist?
//                if (target.length) {
//                    // Only prevent default if animation is actually gonna happen
//                    event.preventDefault();
//                    $('html, body').animate({
//                        scrollTop: target.offset().top
//                    }, 1000, function () {
//                        // Callback after animation
//                        // Must change focus!
//                        var $target = $(target);
//                        $target.focus();
//                        if ($target.is(":focus")) { // Checking if the target was focused
//                            return false;
//                        } else {
//                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                            $target.focus(); // Set focus again
//                        };
//                    });
//                }
//            }
//        });

    //smooth js ends
//another block of code 
    
     //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });

    //another block of code ends



    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#5abdc6',
    });
    $('.gallery_venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#5abdc6',
    });
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });
    $('.counter').counterUp();
    $('.slider_unknown').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 2000,
        arrows: false,
        prevArrow: '<i class="fas fa-angle-left pvr_arr"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // Pre Loader start
    $(window).load(function () {
        $('.pre_loader').fadeOut(100);
    });
    // Back to top button js
    $(window).scroll(function () {
        var btn_fade = $(this).scrollTop();

        if (btn_fade > 150) {
            $('.btp').fadeIn();
        } else {
            $('.btp').fadeOut();
        }
    });

    $('.btp').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000)
    });
    //menu fix  
    var navoff = $('#about_part').offset().top;



    // $(window).scroll(function () {  //event binding is important!!! so,use the next structure instead

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
    var navoff2 = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff2) {
            $('.logo').addClass('logo_fix');
        } else {
            $('.logo').removeClass('logo_fix');
        }
    });



});
