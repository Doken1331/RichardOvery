jQuery(document).ready(function($) {

    'use strict';

    //*** Responsive Menu Function
    jQuery('#eyecix-menu').slicknav();

    //*** Banner Slider Function
    jQuery('.eyecix-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
        dots: false,
        prevArrow: "<span class='slick-arrow-left'>p r e v</span>",
        nextArrow: "<span class='slick-arrow-right'>n e x t</span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //*** Testimonial Slider Function
    jQuery('.eyecix-testimonials-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //*** Partner Slider Function
    jQuery('.eyecix-partner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        prevArrow: "<span class='slick-arrow-left'><i class='fa fa-chevron-left'></i></span>",
        nextArrow: "<span class='slick-arrow-right'><i class='fa fa-chevron-right'></i></span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //*** Back To Top Function
    jQuery('.eyecix-back-top').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});



//*** IsoTop Masonry Function
jQuery(window).on('load', function() {
    var $ = jQuery;
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        percentPosition: false,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filter-button-group').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.filter-button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
});


jQuery(window).on('load', function() {
    var $ = jQuery;
    var $grid = $('.eyecix-blogs-masonry').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
    });
});