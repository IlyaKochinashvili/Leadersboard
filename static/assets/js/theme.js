(function($) {
    'use strict';

    /*--
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });

    // top quearys menu 
    var emsmenu = $(".em-quearys-menu i.t-quearys");
    var emscmenu = $(".em-quearys-menu i.t-close");
    var emsinner = $(".em-quearys-inner");
    emsmenu.on('click', function() {
        emsinner.addClass('em-s-open').fadeToggle(1000);
        $(this).addClass('em-s-hidden');
        emscmenu.removeClass('em-s-hidden');
    });
    emscmenu.on('click', function() {
        emsinner.removeClass('em-s-open').fadeToggle(1000);
        $(this).addClass('em-s-hidden');
        emsmenu.removeClass('em-s-hidden');
    });

    // 6.HOME 2 HERO CAROUSEL
    $('.single_slider_js_active').slick({
        loop: true,
        autoplayTimeout: 10000,		
        dots: false,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    $('.em-slick-testi-description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.em-slick-testi-wraper'
    });

    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 300000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });



    if ($('.headrooma').length != 0) {
        // grab an element
        var myElement = document.querySelector(".headrooma");
        // construct an instance of Headroom, passing the element
        var headroom = new Headroom(myElement);
        // initialise
        headroom.init();
    }

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
    /*---------------------

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });



    /*--
    	One Page Nav
    ----------------------------------- */
    var top_offset = $('.one_page').height() + 100;
    $('.one_page .shrewd_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

    $(".nav_scroll > li:first-child").addClass("current");
    /* sticky nav 1 */
    $('.one_page').scrollToFixed({
        preFixed: function() {
            $(this).find('.scroll_fixed').addClass('prefix');
        },
        postFixed: function() {
            $(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
        }
    });

    /* sticky nav 2 */
    var headers1 = $('.trp_nav_area');
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 200) {
            headers1.addClass('hbg2');
        } else {
            headers1.removeClass('hbg2');
        }

    });

    /*---------------------
    counterUp
    --------------------- */
    $('.countr_text h1').counterUp({
        delay: 10,
        time: 1000
    });
    /* Portfolio Isotope  */

    $('.em_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.em_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });


            $('.filter_menu li').on('click', function() {

                $('.filter_menu li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });



    /*--------------------------
    	blog messonary
    ---------------------------- */
    $('.bgimgload').imagesLoaded(function() {
        if ($.fn.isotope) {
            var $blogmassonary = $('.blog-messonary');
            $blogmassonary.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });

        };
    });

    /*--------------------
    	testimonial 
    -----------------------------------*/

    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })


    $('.blog_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,		
        nav: true,
		dots: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
	
	 $('.service_carousel').owlCarousel({
        loop: true,	
        dots: false,
        speed: 300,
        arrows: true,
        autoplaySpeed: 6000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
	

    // 6.HOME 2 HERO CAROUSEL
    $('.em-slick-slider-new').slick({
        loop: true,
        autoplayTimeout: .1,		
        dots: false,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });


    $('.single_carousel').owlCarousel({
		
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    $('.portfolio_gallery_post').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



    // Mouse Direction Hover Iffect
    $('.single_protfolio').directionalHover();

    $('.single_protfolio').directionalHover({

        // CSS class for the overlay
        overlay: "em_port_content",

        // Linear or swing
        easing: "swing",
        speed: 50
    });
	
	
	
	/*---------------------
	 countdown
	--------------------- */
		$('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdowns days"><span class="time-counts">%-D</span> <p>Days</p></span> <span class="cdowns hour"><span class="time-counts">%-H</span> <p>Hour</p></span> <span class="cdowns minutes"><span class="time-counts">%M</span> <p>Min</p></span> <span class="cdowns second"> <span><span class="time-counts">%S</span> <p>Sec</p></span>'));
		  });
		});	
	
	
    // top quearys menu 
    var accoll = $(".panel-heading1");
    accoll.on('click', function() {
        accoll.removeClass('active');
        $(this).addClass('active');
    });	
	
	



})(jQuery);