(function(jQuery) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset : 0
    };

    jQuery.scrollIt = function(options) {

        var settings = jQuery.extend(defaults, options),
            active = 0,
            lastIndex = jQuery('[data-scroll-index]:last').attr('data-scroll-index');


            var navigate = function(ndx) {
            if(ndx < 0 || ndx > lastIndex) return;

            var targetTop = jQuery('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            jQuery('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        var doScroll = function (e) {
            var target = jQuery(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
            jQuery(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        var keyNavigation = function (e) {
            var key = e.which;
            if(jQuery('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if(key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if(key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        var updateActive = function(ndx) {
            if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            jQuery('[data-scroll-nav]').removeClass(settings.activeClass);
            jQuery('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        var watchActive = function() {
            var winTop = jQuery(window).scrollTop();

            var visible = jQuery('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= jQuery(div).offset().top + settings.topOffset &&
                winTop < jQuery(div).offset().top + (settings.topOffset) + jQuery(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        jQuery(window).on('scroll',watchActive).scroll();

        jQuery(window).on('keydown', keyNavigation);

        jQuery('body').on('click','[data-scroll-nav], [data-scroll-goto]', function(e){
            e.preventDefault();
            doScroll(e);
        });

    };
}(jQuery));


jQuery(document).ready(function() {
    jQuery(window).on("scroll", function() {
        if(jQuery(this).scrollTop() > 90) {
            jQuery(".navbar").addClass("navbar-shrink");
        } else {
            jQuery(".navbar").removeClass("navbar-shrink");
        }
    });

    function parallaxMouse() {
        if(jQuery("#parallax").length) {
            var scene = document.getElementById("parallax");
            var parallax = new Parallax(scene);
        }
    }

    parallaxMouse();


    jQuery(window).scroll(function(){
        var hT = jQuery("#skill-bar-wrapper").offset().top;
        var hH = jQuery("#skill-bar-wrapper").outerHeight();
        var wH = jQuery(window).height();
        var wS = jQuery(this).scrollTop();

        if( wS > (hT + hH - 1.4 * wH)){
            jQuery('.skillbar-container').each(function(){
                jQuery(this).find('.skills').animate({
                    width:jQuery(this).attr('data-percent')
                }, 5000)
            })
        }
    })

    let jQuerybtns = jQuery('.img-gallery .sortBtn .filter-btn');
    jQuerybtns.click(function(e) {
        jQuery('.img-gallery .sortBtn .filter-btn').removeClass('active');
        e.target.classList.add('active');

        let selector = jQuery(e.target).attr('data-filter');
        jQuery('.img-gallery .grid').isotope({
            filter:selector
        })
        return false;
    })

    jQuery('.image-popup').magnificPopup({
        type:'image',
        gallery: { enabled: true }
    })

    jQuery('.testimonial-slider').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    jQuery.scrollIt({
        topOffset:-50
    })

    jQuery(".nav-link").on("click", function() {
        jQuery(".navbar-collapse").collapse("hide");
    })

});